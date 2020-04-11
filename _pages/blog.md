---
permalink: "/blog/"
layout: post
title:  "About Us"
---

Well. Finally got around to putting this old website together. Neat thing about it - powered by [Jekyll](http://jekyllrb.com) and I can use Markdown to author my posts. It actually is a lot easier than I thought it was going to be.


<!-- loop over posts -->
<div class="post-box">
    {% for post in site.posts %}
    <div class="post-item">
      <span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
    </div>
    {% endfor %}
    </div>
