const path = require('path');
const fs = require('fs');
const http = require("http");
const slugify = require('slugify');
const showdown = require('showdown');
const blockfetcher = require("blockfetcher");

const webshot = require('webshot');

const src ="../_drafts"
const dest ="../viz"

const md = new showdown.Converter({metadata: true})


// check if localhost running
const req = http.get('http://localhost:4000', res => {
  console.log('STATUS: ' + res.statusCode + ' http://localhost:4000 running.');
}).on('error', function(e) {
  console.log('problem with request: ' + e.message);
  throw new Error("Are you sure that jekyll localhost is running?")
});

fs.readdirSync(src).forEach(filename => {

  const filepath = path.join(src, filename)

  const doc = md.makeHtml(fs.readFileSync(filepath, 'utf8'));
  const metadata = md.getMetadata();
  // console.log(metadata.gist_url);

  if(metadata.gist_url) {
    const gistId = metadata.gist_url.replace('https://bl.ocks.org/','')
      .replace('http://bl.ocks.org/','')

    const fn = filename.replace(/\.[^/.]+$/, "")
    console.log(`Fetching ${fn}...`)
    blockfetcher.saveProject(gistId, dest, fn)
      .then(files => {
        console.log(`${files.length} files saved!`)

        const url = `http://localhost:4000/viz/${fn}`
        console.log(`New viz available at ${url}`);

        // const options = {
        //     screenSize: {
        //       width: 400
        //     , height: 400
        //     }
        //     , shotSize: {
        //       width: 400
        //     , height: 400
        //     }
        //   }

        webshot(url,
          `${dest}/${fn}/thumb.png`,
          // options,
          err => {
            if (err) throw err
            else console.log(`screenshot now saved to ${fn}.png`);
          });
      })
      .catch(err =>  console.log(err.message))

  }
});
