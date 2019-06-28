---
layout: page
title: "Blockfetcher: a npm module to backup your work from gist / bl.ocks.org"
---


The Atlas of Data aims at becoming a useful resource for designers, artists, researchers or enthusiasts interested in the project. Therefore it has to think about what contents produced here will become in the mid/long-term. The Internet is a wild place and broken URL are the norm more than the exception.

Visualisation practicionners have used the excellent [bl.ocks.org](https://bl.ocks.org/-/about) to build and share code across the d3js community.

As web platforms become pervasive, problems of availability and accessibility are growing up fast. That is why we have decided to develop this small tool that will allow anyone who has work stored on bl.ocks.org to back it up locally as plain files. Make no mistake, we like bl.ocks.org very much but we need to be able to keep a coherent archive for the need of the project.

The `blockfetcher` is a node/js library. You can install it by using the following command or [download it via npm](https://www.npmjs.com/package/blockfetcher?activeTab=readme).

```
npm i blockfetcher
```

Here is an example of use :

```js
const blockfetcher = require("blockfetcher")

const gistId="https://bl.ocks.org/clemsos/009f78d9bf410295f63335419aead372".replace('https://bl.ocks.org/','')

blockfetcher.saveProject(gistId, "/tmp", "super-computers")
  .then(files => console.log(`${files.length} saved!`) )
  .catch(err =>  console.log(err.message))ß
```

It is also distributed with a CLI util :

```sh

$ blocksfetcher -h

Usage: blocksfetcher [url] [options]

  url                 bl.ocks.org URL (required)
  --dest,-d           Destination folder (default: ./blocks)
  --name,-n           Name of the folder (default: gist hash)
  --version,-v        Print out the installed version
  --help              Show this help
```

For feedbacks and discussions, please post on the [Github repo](https://github.com/clemsos/blockfetcher) or via Twitter [@atlasofdata](https://twitter.com/atlasofdata).
