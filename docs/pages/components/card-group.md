---
title: Card Group
keywords: card group
sidebar: components-sidebar
toc: false
permalink: card-group.html
folder: components
summary:
---

## Default Layout

{% capture default-card %}
<div class="tn-card-group">
  <div class="tn-card" role="button">
      <div class="tn-card__content">
           <h2 class="tn-card__header">
               Lorem ipsum dolor quam placeat numquam repellendus
           </h2>
           <p class="tn-card__description">
               Tenetur quam placeat obcaecati molestias voluptatibus dolorum ut
               molestias voluptatibus dolorum ut.
           </p>
           <p class="tn-card__status">
               <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
           </p>
      </div>
  </div>
    <div class="tn-card" role="button">
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="tn-card__description">
                 Tenetur quam placeat obcaecati molestias voluptatibus dolorum
                 ut molestias voluptatibus dolorum ut.
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
             </p>
        </div>
    </div>
    <div class="tn-card" role="button">
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="tn-card__description">
                 Tenetur quam placeat obcaecati molestias voluptatibus dolorum
                 ut molestias voluptatibus dolorum ut.
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
             </p>
        </div>
    </div>
    <div class="tn-card" role="button">
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="tn-card__description">
                 Tenetur quam placeat obcaecati molestias voluptatibus dolorum
                 ut molestias voluptatibus dolorum ut.
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
             </p>
        </div>
    </div>
    <div class="tn-card" role="button">
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="tn-card__description">
                 Tenetur quam placeat obcaecati molestias voluptatibus dolorum
                 ut molestias voluptatibus dolorum ut.
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
             </p>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-card %}

<br>

## Two Column Layout

{% capture two-column %}
<div class="tn-card-group tn-card-group--2col">
    <div class="tn-card">
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="tn-card__description">
                 Tenetur quam  dolorum ut.
             </p>
             <p class="tn-card__status">
                 VOLUPTATE QUIS ADIPISCI SIT
             </p>
        </div>
        <div class="tn-card__actions">
            <button class="tn-button tn-button--small">
        View
    </button>
        </div>
    </div>
    <div class="tn-card" role="button">
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="tn-card__description">
                 Tenetur quam placeat obcaecati molestias voluptatibus dolorum
                 ut molestias voluptatibus dolorum ut.
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
             </p>
        </div>
    </div>
    <div class="tn-card" role="button"><div class="tn-card__media tn-card__media--fill"
     style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
    aria-label="YaaS product thumbnail"></div>
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Asperiores doloribus id dolore
             </h2>
             <p class="tn-card__description">
                 Consectetur adipisicing elit
             </p>
        </div>
    </div>
    <div class="tn-card" role="button">
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="tn-card__description">
                 Tenetur quam  dolorum ut.
             </p>
        </div>
    </div>
    <div class="tn-card" role="button">
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Lorem ipsum dolor quam placeat numquam repellendus
             </h2>
             <p class="tn-card__description">
                 Tenetur quam placeat obcaecati molestias voluptatibus dolorum
                 ut molestias voluptatibus dolorum ut.
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
             </p>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=two-column %}

<br>

## Four Column Layout

{% capture four-column %}
<div class="tn-card-group tn-card-group--4col">
    <div class="tn-card tn-card--vertical" role="button">
        <div class="tn-card__media"
             style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
             aria-label="YaaS product thumbnail"></div>
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Asperiores doloribus id dolore
             </h2>
             <p class="tn-card__description">
                 Consectetur adipisicing elit
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Cumque itaque</span>
             </p>
        </div>
    </div>
    <div class="tn-card tn-card--vertical" role="button">
        <div class="tn-card__media"
             style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
             aria-label="YaaS product thumbnail"></div>
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Asperiores doloribus id dolore
             </h2>
             <p class="tn-card__description">
                 Consectetur adipisicing elit
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Cumque itaque</span>
             </p>
        </div>
    </div>
    <div class="tn-card tn-card--vertical" role="button">
        <div class="tn-card__media"
             style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
             aria-label="YaaS product thumbnail"></div>
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Asperiores doloribus id dolore
             </h2>
             <p class="tn-card__description">
                 Consectetur adipisicing elit
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Cumque itaque</span>
             </p>
        </div>
    </div>
    <div class="tn-card tn-card--vertical" role="button">
        <div class="tn-card__media"
             style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
             aria-label="YaaS product thumbnail"></div>
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Asperiores doloribus id dolore
             </h2>
             <p class="tn-card__description">
                 Consectetur adipisicing elit
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Cumque itaque</span>
             </p>
        </div>
    </div>
    <div class="tn-card tn-card--vertical" role="button"><div class="tn-card__media"
         style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
         aria-label="YaaS product thumbnail"></div>
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Asperiores doloribus id dolore
             </h2>
             <p class="tn-card__description">
                 Consectetur adipisicing elit
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Cumque itaque</span>
             </p>
        </div>
    </div>
    <div class="tn-card tn-card--vertical" role="button"><div class="tn-card__media"
         style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
         aria-label="YaaS product thumbnail"></div>
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Asperiores doloribus id dolore
             </h2>
             <p class="tn-card__description">
                 Consectetur adipisicing elit
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Cumque itaque</span>
             </p>
        </div>
    </div>
    <div class="tn-card tn-card--vertical" role="button"><div class="tn-card__media"
         style="background-image: url(https://techne.yaas.io/images/product-thumbnail.png)"
         aria-label="YaaS product thumbnail"></div>
        <div class="tn-card__content">
             <h2 class="tn-card__header">
                 Asperiores doloribus id dolore
             </h2>
             <p class="tn-card__description">
                 Consectetur adipisicing elit
             </p>
             <p class="tn-card__status">
                 <span class="tn-has-color-status-1">Cumque itaque</span>
             </p>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=four-column %}
