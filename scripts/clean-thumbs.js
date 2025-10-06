const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'img');

async function run(){
  const files = await fs.promises.readdir(imagesDir);
  const dupes = files.filter(f => f.includes('-thumb-thumb.webp'));
  for (const f of dupes){
    const p = path.join(imagesDir, f);
    try{
      await fs.promises.unlink(p);
      console.log('Removed', f);
    }catch(e){
      console.error('Failed to remove', f, e.message);
    }
  }
}

run().catch(e=>{console.error(e);process.exit(1)});
