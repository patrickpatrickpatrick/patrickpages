---
layout: layouts/home.njk
eleventyNavigation:
  key: Works
  order: 2
---
{% set postslist = collections.works %}
{% include "postslist.njk" %}