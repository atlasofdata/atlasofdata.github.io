---
type: post
title: "Voronoi Map of Weather Stations Worldwide"
noviz: true
authors:
- Clément Renaud
topics:
  - digital metabolism
data:
  - source: WorldClim
    url: http://databasin.org/datasets/15a31dec689b4c958ee491ff30fcce75
    size: Mo
    quality: open
---

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

<div class="fullwidth">
<div id="chart"></div>
</div>
<p id="viewof-details"></p>
<p id="viewof-rotate"></p>
<p id="viewof-showHide"></p>


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

A voronoi map of the world based on weather stations.

Colors represents the density of weather stations in an area

We use a [Lambert Azimuthal Equal-Area](https://en.wikipedia.org/wiki/Lambert_azimuthal_equal-area_projection) projection so it represents accurately the areas. Weather station data comes from World Clim (2015 data). The 10k+ points dataset was clusterized using [supercluster](https://github.com/mapbox/supercluster/). We use the [d3 Geo Voronoi](https://github.com/Fil/d3-geo-voronoi)to create the vornoi geo clusters of areas based on the dataset.

See the [original visualisation](https://observablehq.com/@clemsos/world-weather-stations).

### Weather Stations Dataset

> *WorldClim: Global weather stations*
>
> Robert J. Hijmans, Susan Cameron, and Juan Parra, at the Museum of Vertebrate Zoology, University of California, Berkeley, in collaboration with Peter Jones and Andrew Jarvis (CIAT), and with Karen Richardson (Rainforest CRC).
>
> Published on  [Databasin]( http://databasin.org/datasets/15a31dec689b4c958ee491ff30fcce75)


### Data Exploration Workflow

{% jupyter_notebook "/notebooks/[World Clim] Weather Stations.ipynb" %}
