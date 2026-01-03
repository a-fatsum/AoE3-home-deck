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

async function scrapeCiv(civ) {
  const url = `${BASE_URL}${civUrls[civ]}`;
  console.log(`🔗 Scraping ${civ}`);

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const cards = [];

    $(".wikitable tbody tr").each((_, el) => {
      const name = $(el).find("td:nth-child(1)").text().trim();
      const description = $(el).find("td:nth-child(2)").text().trim();
      const imgEl = $(el).find("td:nth-child(1) img");

      // IMPORTANT: fandom stores high-res images in data-src
      const imageUrl = imgEl.attr("data-src") || imgEl.attr("src");

      if (name && imageUrl) {
        cards.push({ name, description, imageUrl });
      }
    });

    for (const card of cards) {
      const ext = path.extname(card.imageUrl).split("?")[0] || ".png";
      const filename = `${card.name.replace(/[^a-z0-9]/gi, "_")}${ext}`;

      const webPath = await downloadImage(card.imageUrl, civ, filename);
      if (webPath) card.image = webPath;

      delete card.imageUrl;
    }

    allCards[civ] = cards;
    console.log(`✅ ${civ}: ${cards.length} cards`);
  } catch (err) {
    console.error(`❌ Failed ${civ}`);
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
