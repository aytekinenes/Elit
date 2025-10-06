const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'img');

async function convertFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  const name = path.basename(file, ext);
  const input = path.join(imagesDir, file);
  const output = path.join(imagesDir, `${name}.webp`);
  try {
    await sharp(input)
      .webp({ quality: 80 })
      .toFile(output);
    console.log('Converted', file, '->', `${name}.webp`);
  } catch (err) {
    console.error('Failed to convert', file, err.message);
  }
}

async function run() {
  const files = await fs.promises.readdir(imagesDir);
  await Promise.all(files.map(convertFile));
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
