const path = require('path');
const fs = require('fs');
const slugify = require('slugify');
const showdown = require('showdown');
const blockfetcher = require("blockfetcher");

const folder ="../_drafts"

const md = new showdown.Converter({metadata: true})

fs.readdirSync(folder).forEach(filename => {

  const filepath = path.join(folder, filename)

  const doc = md.makeHtml(fs.readFileSync(filepath, 'utf8'));
  const metadata = md.getMetadata();

});


// const gistId="https://bl.ocks.org/clemsos/009f78d9bf410295f63335419aead372".replace('https://bl.ocks.org/','')




//
// blockfetcher.saveProject(gistId)
//   .then(files => console.log(`${files.length} saved!`) )
//   .catch(err =>  console.log(err.message))
