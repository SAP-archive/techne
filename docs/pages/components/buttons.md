---
title: Buttons
keywords: button, buttons
sidebar: components-sidebar
toc: false
permalink: buttons.html
folder: components
summary: Button and Button Links are used to indicate primary, secondary and tertiary actions on a page.
---

## Button Sizes

{% capture button-sizes %}
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

{% include display-component.html component=button-sizes %}

<br>

## Button States

{% capture button-states %}  
<button class="tn-button">
    Default Button
</button>
<button class="tn-button" aria-selected="true">
    Selected Button
</button>
<button class="tn-button" aria-disabled="true">
    Disabled Button
</button>
{% endcapture %}

{% include display-component.html component=button-states %}

<br>

## Text Button Sizes

{% capture text-button-sizes %}
<button class="tn-button tn-button--text tn-button--small">
    Small Text Button
</button>
<button class="tn-button tn-button--text">
    Default Text Button
</button>
<button class="tn-button tn-button--text tn-button--large">
    Large Text Button
</button>
{% endcapture %}

{% include display-component.html component=text-button-sizes %}

<br>

## Text Button States

{% capture text-button-states %}
<button class="tn-button tn-button--text">
    Default Text Button
</button>
<button class="tn-button tn-button--text" aria-selected="true">
    Selected Text Button
</button>
<button class="tn-button tn-button--text" aria-disabled="true">
    Disabled Text Button
</button>
{% endcapture %}

{% include display-component.html component=text-button-states %}

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
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Default Button
</button>
<button class="tn-button tn-button--text">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Link Button
</button>
{% endcapture %}

{% include display-component.html component=button-with-icon %}

<br>

## Icon Button

{% capture icon-button %}
<button class="tn-button tn-button--icon" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
</button>
<button class="tn-button tn-button--text tn-button--icon" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
</button>
{% endcapture %}

{% include display-component.html component=icon-button %}

<br>

## Action Bar Button

{% capture icon-button %}
<button class="tn-button tn-button--action-bar">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Default Button
</button>
<button class="tn-button tn-button--text tn-button--action-bar">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Link Button
</button>
{% endcapture %}

{% include display-component.html component=icon-button %}

<br>
