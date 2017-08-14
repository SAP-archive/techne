---
title: Buttons
keywords: buttons
sidebar: components-sidebar
toc: false
permalink: buttons.html
folder: components
summary: Button and Button Links are used to indicate primary, secondary and tertiary actions on a page.
---

## Default Button

{% capture default-card %}
<button class="tn-button tn-button--small">
    Small Button
</button>
   
<button class="tn-button">
    Default Button
</button>
    
<button class="tn-button tn-button--large">
    Large Button
</button>
{% endcapture %}

{% include display-component.html component=default-card %}

<br>

## Disabled Button

{% capture default-card %}    
<button class="tn-button is-disabled">
    Default Button
</button>
{% endcapture %}

{% include display-component.html component=default-card %}

<br>

## Text Button

{% capture default-card %}
<button class="tn-button tn-button--text">
    Text Label
</button>
{% endcapture %}

{% include display-component.html component=default-card %}

<br>

## Disabled Text Button

{% capture default-card %}
<button class="tn-button tn-button--text" aria-disabled="true">
    BUTTON_LABEL
</button>
{% endcapture %}

{% include display-component.html component=default-card %}

<br>

## Button with Icon

{% capture default-card %}
    
<button class="tn-button tn-button--icon">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation"></span>
    BUTTON_LABEL
</button>
    
<button class="tn-button tn-button--large tn-button--icon">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation"></span>
    BUTTON_LABEL
</button>
<br>

<button class="tn-button tn-button--small tn-button--icon tn-button--text">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation"></span>
    BUTTON_LABEL
</button>


<button class="tn-button tn-button--icon tn-button--text">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation"></span>
    BUTTON_LABEL
</button>
{% endcapture %}

{% include display-component.html component=default-card %}

<br>



