import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs-extra";
import path from "path";

const BASE_URL = "https://ageofempires.fandom.com/wiki/";

const ROOT_DIR = process.cwd();

const IMAGES_BASE_DIR = path.join(ROOT_DIR, "src", "assets", "cards");
const FLAGS_DIR = path.join(ROOT_DIR, "src", "assets", "flags");
const DATA_DIR = path.join(ROOT_DIR, "src", "data");
const DATA_FILE = path.join(DATA_DIR, "allCards.json");

// Ensure folders exist
fs.ensureDirSync(IMAGES_BASE_DIR);
fs.ensureDirSync(FLAGS_DIR);
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
    console.error(`❌ Failed to download image ${url}:`, err.message);
    return null;
  }
}
//

async function downloadFlag($, civ) {
  try {
    const flagImg =
      $(".pi-image img").first().attr("data-src") ||
      $(".pi-image img").first().attr("src");

    if (!flagImg) return null;

    const ext = path.extname(flagImg).split("?")[0] || ".png";
    const filename = `${civ}${ext}`;
    const filePath = path.join(FLAGS_DIR, filename);

    const response = await axios.get(flagImg, { responseType: "arraybuffer" });
    await fs.writeFile(filePath, response.data);

    return `/assets/flags/${filename}`;
  } catch (err) {
    console.warn(`⚠️ Could not fetch flag for ${civ}`);
    return null;
  }
}

//
async function scrapeCiv(civ) {
  const url = `${BASE_URL}${civUrls[civ]}`;
  console.log(`🔗 Scraping ${civ} from ${url}`);

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const flag = await downloadFlag($, civ);

    const cards = [];

    $(".wikitable tbody tr").each((_, el) => {
      const name = $(el).find("td:nth-child(1)").text().trim();
      const description = $(el).find("td:nth-child(2)").text().trim();
      const imgEl = $(el).find("td:nth-child(1) img");
      // const imageUrl = imgEl.attr("data-src") || imgEl.attr("src");
      let imageUrl =
        imgEl.attr("data-src") ||
        imgEl.attr("srcset")?.split(",").pop()?.split(" ")[0] ||
        imgEl.attr("src");

      // Force full-size image (remove wiki downscaling)
      if (imageUrl?.includes("/scale-to-width-down/")) {
        imageUrl = imageUrl.replace(/\/scale-to-width-down\/\d+/, "");
      }

      if (name) {
        cards.push({ name, description, imageUrl });
      }
    });

    // Download images
    for (let card of cards) {
      if (card.imageUrl) {
        const ext = path.extname(card.imageUrl).split("?")[0] || ".png";
        const filename = `${card.name.replace(/[^a-z0-9]/gi, "_")}${ext}`;

        const webPath = await downloadImage(card.imageUrl, civ, filename);

        if (webPath) card.image = webPath;
        delete card.imageUrl;
      }
    }

    console.log(`✅ Found ${cards.length} cards for ${civ}`);
    // allCards[civ] = cards;
    allCards[civ] = {
      flag,
      cards,
    };
  } catch (err) {
    console.error(`❌ Failed to scrape ${civ}:`, err.message);
  }
}

async function scrapeAll() {
  for (let civ of Object.keys(civUrls)) {
    await scrapeCiv(civ);
  }

  await fs.writeJson(DATA_FILE, allCards, { spaces: 2 });
  console.log(`🏁 All card data saved to src/data/allCards.json`);
}

scrapeAll();
