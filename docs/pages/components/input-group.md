---
title: Input Group
keywords: input group, input groups, input, groups
sidebar: components-sidebar
toc: false
permalink: input-group.html
folder: components
summary:
---

## Text addon

{% capture text-addon %}
<div class="tn-input-group">
    <input class="" type="text" id="" name="" value="" placeholder="Field placeholder text">
    <span class="tn-input-group__addon">
km/h
    </span>
</div>

<div class="tn-input-group">
    <input class="" type="text" id="" name="" value="19387309">
    <span class="tn-input-group__addon">
km/h
    </span>
</div>

<div class="tn-input-group">
    <input class="" type="text" id="" name="" value="19387309">
    <span class="tn-input-group__addon">
€
    </span>
</div>

<div class="tn-input-group">
    <input class="" type="text" id="" name="" value="19387309">
    <span class="tn-input-group__addon">
$
    </span>
</div>

<div class="tn-input-group">
    <span class="tn-input-group__addon">
km/h
    </span>
    <input class="" type="text" id="" name="" value="19387309">
</div>

<div class="tn-input-group">
    <span class="tn-input-group__addon">
€
    </span>
    <input class="" type="text" id="" name="" value="19387309">
</div>

<div class="tn-input-group">
    <span class="tn-input-group__addon">
$
    </span>
    <input class="" type="text" id="" name="" value="19387309">
</div>

<div class="tn-input-group">
    <input class="" type="text" id="" name="" value="19387309">
    <span class="tn-input-group__addon">
50
    </span>
</div>
{% endcapture %}

{% include display-component.html component=text-addon %}

<br>

## Special addon

{% capture special-addon %}    
<div class="tn-input-group">
    <input class="" type="number" id="spinner-1" name="" value="1000000">
    <span class="tn-input-group__addon tn-input-group__addon--button">
        <button class="tn-input-group__button tn-input-group__button--step-up" aria-label="Step up" onclick="document.getElementById('spinner-1').stepUp();"></button>
        <button class="tn-input-group__button tn-input-group__button--step-down" aria-label="Step down" onclick="document.getElementById('spinner-1').stepDown();"></button>
    </span>
</div>

<div class="tn-input-group">
    <input class="" type="search" id="search-1" name="" value="1000008980283748972894732979327592739572394752397594657843657868436029840932840927349236572635876347239875283472893742980">
    <span class="tn-input-group__addon tn-input-group__addon--button">
        <button class="tn-input-group__button tn-input-group__button--clear" aria-label="Clear" onclick="document.getElementById('search-1').value = '';"></button>
    </span>
</div>
{% endcapture %}

{% include display-component.html component=special-addon %}

<br>

## Icon addon

{% capture icon-addon %}    
<div class="tn-input-group">
    <span class="tn-input-group__addon">
      <span class="tn-icon tn-icon--foo tn-has-background-color-text" style="width: 26px; height: 26px;" aria-label=""></span>
    </span>
    <input class="" type="text" id="" name="" value="1000000">
</div>

<div class="tn-input-group">
    <input class="" type="text" id="" name="" value="1000000">
    <span class="tn-input-group__addon">
      <span class="tn-icon tn-icon--foo tn-has-background-color-text" style="width: 26px; height: 26px;" aria-label=""></span>
    </span>
</div>
{% endcapture %}

{% include display-component.html component=icon-addon %}

<br>

## Button addon

{% capture button-addon %}
<div class="tn-input-group">
    <input class="" type="text" id="" name="" value="1000000">
    <span class="tn-input-group__addon tn-input-group__addon--button">
<button class="tn-button tn-button--icon tn-button--text">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation">✕</span>
</button>
    </span>
</div>

<div class="tn-input-group">
    <input class="" type="text" id="" name="" value="1000000" readonly>
    <span class="tn-input-group__addon tn-input-group__addon--button">
<button class="tn-button tn-button--icon tn-button--text">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation">✕</span>
</button>
    </span>
</div>

<div class="tn-input-group">
    <input class="" type="text" id="" name="" value="1000000">
    <span class="tn-input-group__addon tn-input-group__addon--button">
<button class="tn-button">
    Button
</button>
    </span>
</div>

<div class="tn-input-group">
    <input class="" type="text" id="" name="" value="1000000">
    <span class="tn-input-group__addon tn-input-group__addon--button">
<button class="tn-button tn-button--icon">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation">✕</span>
</button>
    </span>
</div>
{% endcapture %}

{% include display-component.html component=button-addon %}

<br>
