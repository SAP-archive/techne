---
title: Pagination
keywords: paging, pagination
sidebar: components-sidebar
toc: false
permalink: pagination.html
folder: components
summary: Use pagination components in conjunction with Tables (recommended) or Cards (if needed) to allow for more efficient performance and quick access to specific records in the overall data set.
---

## Usage Guidelines
Techne recommends displaying up to three pages in the pagination: the current page; the previous page and the next page, as well as arrows to go to the first page (<<) or last page (>>). 
Display pagination at the top and bottom of the data set. It is also recommended that the number of records is displayed at the top of the page, not just the total number displayed on the single page.


{% capture pagination %}
<nav>
  <ul class="tn-pagination">
    <li disabled>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}


{% include display-component.html component=pagination %}

<br>