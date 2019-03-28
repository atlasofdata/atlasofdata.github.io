---
title: Datasets
---

Here is a list of all datasets usedin the website.

<div id="datasets">
<input class="search" />
<button class="sort" data-sort="size">Sort by Size</button>
<button class="sort" data-sort="quality">Sort by Quality</button>

<ul class="list">
{% for post in site.posts %}
{% for dataset in post.data %}
<li>
  {% include dataset.html dataset=dataset %}
</li>
{% endfor %}
{% endfor %}
</ul>
</div>

<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>

<script>
var options = {
    valueNames: [ 'source', 'size', 'quality' ]
};

var datasetList = new List('datasets', options);
</script>
