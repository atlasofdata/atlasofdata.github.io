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
  {% if dataset.url %}
    <a href="{{ dataset.url }}">
      <span class="source">{{ dataset.source }}</span>
    </a>
  {% else %}
    <span class="source">{{ dataset.source }}</span>
  {% endif %}
  (size: <span class="size">{{ dataset.size }}</span>, format: <span class="quality">{{ dataset.quality }}</span>)
  - in <a href="{{post.url}}" title="read the post">{{post.title}}</a>
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
