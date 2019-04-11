---
type: post
title: "Voronoi Map of Weather Stations Worldwide"
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

A voronoi map of the world based on weather stations.

Colors represents the density of weather stations in an area

We use a [Lambert Azimuthal Equal-Area](https://en.wikipedia.org/wiki/Lambert_azimuthal_equal-area_projection) projection so it represents accurately the areas. Weather station data comes from World Clim (2015 data). The 10k+ points dataset was clusterized using [supercluster](https://github.com/mapbox/supercluster/). We use the [d3 Geo Voronoi](https://github.com/Fil/d3-geo-voronoi)to create the vornoi geo clusters of areas based on the dataset.


### Weather Stations Dataset

> *WorldClim: Global weather stations*
>
> Robert J. Hijmans, Susan Cameron, and Juan Parra, at the Museum of Vertebrate Zoology, University of California, Berkeley, in collaboration with Peter Jones and Andrew Jarvis (CIAT), and with Karen Richardson (Rainforest CRC).
>
> Published on  [Databasin]( http://databasin.org/datasets/15a31dec689b4c958ee491ff30fcce75)

See the [original visualisation](https://observablehq.com/@clemsos/world-weather-stations).
