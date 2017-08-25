---
title: Buttons
keywords: button, buttons
sidebar: components-sidebar
toc: false
permalink: buttons.html
folder: components
summary: Button and Button Links are used to indicate primary, secondary and tertiary actions on a page.
---

## Default Button

{% capture default-button %}
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

{% include display-component.html component=default-button %}

<br>

## Selected Button

{% capture selected-button %}    
<button class="tn-button" aria-selected="true">
    Default Button
</button>
{% endcapture %}

{% include display-component.html component=selected-button %}

<br>

## Disabled Button

{% capture disabled-button %}    
<button class="tn-button" aria-disabled="true">
    Default Button
</button>
{% endcapture %}

{% include display-component.html component=disabled-button %}

<br>

## Text Button

{% capture text-button %}
<button class="tn-button tn-button--text">
    Button Text
</button>
{% endcapture %}

{% include display-component.html component=text-button %}

<br>

## Selected Text Button

{% capture selected-text-button %}
<button class="tn-button tn-button--text" aria-selected="true">
    Button Text
</button>
{% endcapture %}

{% include display-component.html component=selected-text-button %}

<br>

## Disabled Text Button

{% capture disabled-text-button %}
<button class="tn-button tn-button--text" aria-disabled="true">
    Button Text
</button>
{% endcapture %}

{% include display-component.html component=disabled-text-button %}

<br>

## Link Button

{% capture link-button %}
<button class="tn-button tn-button--link">
    Button Text
</button>
{% endcapture %}

{% include display-component.html component=link-button %}

<br>

## Button with Icon

{% capture button-with-icon %}
<button class="tn-button">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation">✕</span>
    Button Text
</button>
<button class="tn-button tn-button--text">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation">✕</span>
    Button Text
</button>
{% endcapture %}

{% include display-component.html component=button-with-icon %}

<br>

## Icon Button

{% capture icon-button %}
<button class="tn-button tn-button--icon" aria-label="BUTTON_LABEL">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation">✕</span>
</button>
<button class="tn-button tn-button--text tn-button--icon" aria-label="BUTTON_LABEL">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation">✕</span>
</button>
{% endcapture %}

{% include display-component.html component=icon-button %}

<br>

## Action Bar Button

{% capture icon-button %}
<button class="tn-button tn-button--action-bar">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation">✕</span>
    Button Action
</button>
<button class="tn-button tn-button--text tn-button--action-bar">
    <span class="tn-button__icon tn-icon tn-icon--foo" role="presentation">✕</span>
    Button Action
</button>
{% endcapture %}

{% include display-component.html component=icon-button %}

<br>
