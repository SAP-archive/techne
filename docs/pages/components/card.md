---
title: Card
keywords: card
sidebar: components-sidebar
toc: false
permalink: card.html
folder: components
summary:
---

## Default Card

{% capture default-card %}
<div class="tn-card">
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Primary Value
         </h2>
         <p class="tn-card__description">
             Secondary Value aute irure dolor in reprehenderit in voluptate
         </p>
         <p class="tn-card__status">
             Status
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-card %}

<br>

## Button Card

{% capture button-card %}
<div class="tn-card tn-card--button" role="button">
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Lorem ipsum dolor quam placeat numquam repellendus
         </h2>
         <p class="tn-card__description">
             Tenetur quam placeat obcaecati molestias voluptatibus dolorum ut.
         </p>
         <p class="tn-card__status">
             <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=button-card %}

<br>

## Disabled Card

{% capture disabled-card %}
<div class="tn-card tn-card--button is-disabled" aria-disabled="true" role="button">
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Repellendus obcaecati molestias
         </h2>
         <p class="tn-card__description">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit aute irure dolor in reprehenderit in voluptate
         </p>
         <p class="tn-card__status">
             <span>Voluptate quis adipisci sit</span> | <span>Voluptate quis adipisci sit</span>
         </p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=disabled-card %}

<br>

## Actions Card

{% capture action-card %}
<div class="tn-card tn-card--button">
    <div class="tn-card__content">
         <h2 class="tn-card__header">
             Lorem ipsum dolor quam placeat numquam repellendus
         </h2>
         <p class="tn-card__description">
             Tenetur quam placeat ipsum dolor sit amet obcaecati molestias voluptatibus dolorum ut
         </p>
         <p class="tn-card__status">
             <span class="tn-has-color-status-1">Voluptate quis adipisci sit</span>
         </p>
    </div>
    <div class="tn-card__actions">
        <div class="tn-dropdown">
            <button class="tn-button tn-button--icon tn-button--text" aria-controls="dKKJX636" aria-haspopup="true" aria-label="More">
                <span class="tn-icon tn-icon--more tn-icon--medium" role="presentation"></span>
            </button>
            <ul class="tn-dropdown__menu tn-contextual-menu" aria-hidden="true" id="dKKJX636">
                <li><a class="tn-dropdown__item">Pellentesque metus</a></li>
                <li><a class="tn-dropdown__item">Duis malesuada odio volutpat</a></li>
                <li><a class="tn-dropdown__item">Suspendisse</a></li>
                <li><a class="tn-dropdown__item">Donec mattis arcu et velit</a></li>
            </ul>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=action-card %}
<script type="text/javascript">
// demo interaction script
var els = document.querySelectorAll("[aria-controls]");
for (var i = 0; i < els.length; i++) {
    var el = els[i];
    el.addEventListener('click', function() {
        var isExpanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !isExpanded);
        var targetId = this.getAttribute("aria-controls");
        var target = document.getElementById(targetId);
        var targetIsHidden = target.getAttribute("aria-hidden") == "true";
        target.setAttribute("aria-hidden", isExpanded);
    })
}
</script>
<br>

## Media Card

{% capture media-card %}
<div class="tn-card" role="button">
    <div class="tn-card__media" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
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
{% endcapture %}

{% include display-component.html component=media-card %}

## Media Card with Round Image

{% capture media-card-round-image %}
<div class="tn-card" role="button">
    <div class="tn-card__media tn-card__media--round" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
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
{% endcapture %}

{% include display-component.html component=media-card-round-image %}

<br>

## Media Card with Fill Image

{% capture media-card-fill-image %}
<div class="tn-card" role="button">
    <div class="tn-card__media tn-card__media--fill" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
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
{% endcapture %}

{% include display-component.html component=media-card-fill-image %}

<br>

## Vertical Media Card

{% capture verticle-media-card %}
<div class="tn-card tn-card--vertical" role="button">
    <div class="tn-card__media" style="background-image: url(https://techne.yaas.io/images/product-thumbnail-wide.png)" aria-label="YaaS product thumbnail"></div>
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
{% endcapture %}

{% include display-component.html component=verticle-media-card %}

<br>

## Custom Content Card

{% capture custom-content-card %}
<div class="tn-card">
    <div class="tn-card__content">
        <span class="tn-has-color-text-3 tn-has-type-minus-2">Client I.D.</span>
        <p>*******************</p>
        <span class="tn-has-color-text-3 tn-has-type-minus-2">Client Secret</span>
        <p>*******************</p>
        <span class="tn-has-color-text-3 tn-has-type-minus-2">Creation Date</span>
        <p>Consectetur adipisicing</p>
        <span class="tn-has-color-txt-3 tn-has-type-minus-2">Tenant (Project Identifier)</span>
        <p>Lorem ipsum</p>
    </div>
    <div class="tn-card__actions">
        <a class="tn-has-type-1 tn-has-font-family-header">GENERATE ACCESS TOKEN</a>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=custom-content-card %}
