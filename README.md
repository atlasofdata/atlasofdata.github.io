# The Atlas of Data

The Atlas of Data investigate how flows of data relate to the ecosystems of our planet.

### Howto Run

```
bundle exec jekyll serve
```

### Publish

We use the [jgd](https://github.com/yegor256/jekyll-github-deploy) Gem to build locally and deploy to gh-pages branch.

```
gem install jgd
jgd
```

### Backup all viz from blocks

Run the scripts to fetch all viz from blocks/gist and store them locally.

```
cd bin
node fetchviz.js
```
