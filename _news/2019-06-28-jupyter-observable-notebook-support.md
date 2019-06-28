---
layout: post
title: Support for Jupyter and Observable notebooks
noviz: true
---

Notebooks have become very popular solutions to write data workflows and experiments. We have decided to add support for two of the main notebooks in use nowadays: [Jupyter](https://jupyter,org) for data mining and [Observable](https://observablehq.com) for visualisation.

These type of notebooks are an important part of the publishing pipeline for the Atlas of Data, as it allow to access directly the source code and makes it easier to replicate. Both allows the embedding of figures and text.

### Jupyter notebook

[Jupyter Notebook](https://jupyter,org) is arguably the most popular notebook solution for data analysis. Originally based on iPython, it supports today many languages and environments. It is entirely open-source and can be installed locally or on a remote server.

Below an example of an embed.  
View [full screen](/notebooks/Climate Stations.ipynb) or download the [file](./).

{% jupyter_notebook "/notebooks/Climate stations.ipynb" %}


### Observable notebooks

[Observable](https://observablehq.com) is an online service for Javascript notebook. Founded by the d3js team, it offers a powerful writing environment for JS development. Besides the great usability of the interface and the JS engine, one of the downside is that - to date - it exists only as a platform and can not be deployed locally. If results produced on the platform can be downloaded as tarballs, no development can happen outside the website itself.

The upside is that you can rely on the running Observable engine to embed your code dynamically anywhere, as demonstrated below. Thanks to Visions Carto for the [explanations](https://visionscarto.net/observable-jekyll/).



<style>
.fullwidth {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
</style>

<p id="viewof-details"></p>
<p id="viewof-rotate"></p>
<p id="viewof-showHide"></p>
<div class="fullwidth">
  <div id="chart"></div>
</div>


<script type="module">
  import notebook from "https://api.observablehq.com/@clemsos/world-weather-stations.js";

  const renders = {
    "viewof details": "#viewof-details",
    "viewof showHide": "#viewof-showHide",
    "viewof rotate": "#viewof-rotate",
    "chart": "#chart",
  };

  import {Inspector, Runtime} from "https://unpkg.com/@observablehq/notebook-runtime@2?module";
  for (let i in renders)
    renders[i] = document.querySelector(renders[i]);

  Runtime.load(notebook, (variable) => {
    if (renders[variable.name])
      return new Inspector(renders[variable.name]);
  });
</script>
