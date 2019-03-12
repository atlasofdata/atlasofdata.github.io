const path = require('path');
const fs = require('fs');
const slugify = require('slugify');
const showdown = require('showdown');
const blockfetcher = require("blockfetcher");

const src ="../_drafts"
const dest ="../viz"

const md = new showdown.Converter({metadata: true})

fs.readdirSync(src).forEach(filename => {

  const filepath = path.join(src, filename)

  const doc = md.makeHtml(fs.readFileSync(filepath, 'utf8'));
  const metadata = md.getMetadata();
  console.log(metadata.gist_url);

  if(metadata.gist_url) {
    const gistId = metadata.gist_url.replace('https://bl.ocks.org/','')
      .replace('http://bl.ocks.org/','')

    blockfetcher.saveProject(gistId, dest, filename.replace(/\.[^/.]+$/, ""))
      .then(files => console.log(`${files.length} saved!`) )
      .catch(err =>  console.log(err.message))
  }
});
