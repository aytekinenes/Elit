const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'img');
const thumbWidth = 800; // reasonable thumbnail width for portfolio

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;
  const name = path.basename(file, ext);
  const input = path.join(imagesDir, file);
  const outWebp = path.join(imagesDir, `${name}-thumb.webp`);
  try {
    // create a reasonably sized WebP thumbnail
    await sharp(input)
      .resize({ width: thumbWidth })
      .webp({ quality: 70 })
      .toFile(outWebp);
    console.log('Thumbnail created', outWebp);
  } catch (err) {
    console.error('Failed to create thumb for', file, err.message);
  }
}

async function run() {
  const files = await fs.promises.readdir(imagesDir);
  await Promise.all(files.map(processFile));
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
