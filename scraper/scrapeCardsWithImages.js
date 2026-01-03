import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs-extra";
import path from "path";

const BASE_URL = "https://ageofempires.fandom.com/wiki/";
const ROOT_DIR = process.cwd();

const IMAGES_BASE_DIR = path.join(ROOT_DIR, "src", "assets", "cards");
const DATA_DIR = path.join(ROOT_DIR, "src", "data");
const DATA_FILE = path.join(DATA_DIR, "allCards.json");

fs.ensureDirSync(IMAGES_BASE_DIR);
fs.ensureDirSync(DATA_DIR);

const civUrls = {
  British: "British/HCC",
  Dutch: "Dutch/HCC",
  Germans: "Germans/HCC",
  Russians: "Russians/HCC",
  French: "French_(Age_of_Empires_III)/HCC",
  Ottomans: "Ottomans_(Age_of_Empires_III)/HCC",
  Portuguese: "Portuguese_(Age_of_Empires_III)/HCC",
  Spanish: "Spanish_(Age_of_Empires_III)/HCC",
};

const allCards = {};

async function downloadImage(url, civ, filename) {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });

    const civDir = path.join(IMAGES_BASE_DIR, civ);
    fs.ensureDirSync(civDir);

    const filePath = path.join(civDir, filename);
    await fs.writeFile(filePath, response.data);

    return `/assets/cards/${civ}/${filename}`;
  } catch (err) {
    console.error(`❌ Image download failed: ${url}`);
    return null;
  }
}

function romanToNumber(roman) {
  const map = { I: 1, II: 2, III: 3, IV: 4, V: 5 };
  return map[roman] || null;
}

async function scrapeCiv(civ) {
  const url = `${BASE_URL}${civUrls[civ]}`;
  console.log(`🔗 Scraping ${civ}`);

  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
      },
    });

    const $ = cheerio.load(data);

    const cards = [];

    $(".wikitable tbody tr").each((_, el) => {
      const cells = $(el).find("td");
      if (!cells.length) return;

      // --- NAME + IMAGE ---
      const firstCell = $(cells[0]);
      const name = firstCell.text().trim();

      const imgEl = firstCell.find("img");
      const imageUrl = imgEl.attr("data-src") || imgEl.attr("src");

      if (!name) return;

      // --- AGE (text OR icon alt/title) ---
      let age = null;

      cells.each((_, cell) => {
        const txt = $(cell).text();
        const img = $(cell).find("img");

        if (/Age/i.test(txt)) {
          const roman = txt.replace(/[^IVX]/gi, "");
          age = romanToNumber(roman);
        }

        if (img.length) {
          const alt = img.attr("alt") || img.attr("title") || "";
          if (/Age/i.test(alt)) {
            const roman = alt.replace(/[^IVX]/gi, "");
            age = romanToNumber(roman);
          }
        }
      });

      // --- DESCRIPTION (longest cell text) ---
      let description = "";
      cells.each((_, cell) => {
        const text = $(cell).text().trim();
        if (text.length > description.length) {
          description = text;
        }
      });

      cards.push({ name, age, description, imageUrl });
    });

    for (const card of cards) {
      // const ext = path.extname(card.imageUrl).split("?")[0] || ".png";
      if (!card.imageUrl) continue;

      const ext = path.extname(card.imageUrl.split("?")[0]) || ".png";

      const filename = `${card.name.replace(/[^a-z0-9]/gi, "_")}${ext}`;

      const webPath = await downloadImage(card.imageUrl, civ, filename);
      if (webPath) card.image = webPath;

      delete card.imageUrl;
    }

    allCards[civ] = cards;
    console.log(`✅ ${civ}: ${cards.length} cards`);
  } catch (err) {
    console.error(`❌ Failed ${civ}:`, err.response?.status || err.message);
  }
}

async function scrapeAll() {
  for (const civ of Object.keys(civUrls)) {
    await scrapeCiv(civ);
  }

  await fs.writeJson(DATA_FILE, allCards, { spaces: 2 });
  console.log("🏁 Card data saved");
}

scrapeAll();
