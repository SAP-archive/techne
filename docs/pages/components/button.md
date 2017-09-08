---
title: Buttons
keywords: button, buttons
sidebar: components-sidebar
toc: false
permalink: button.html
folder: components
---

The Buttons are components that let the user perform an actions. For example: saving a form, submitting data to the server, adding one element to a list, etc.

<br/>

# Standard button
Uses the main action color and perform the most important or primary actions on screen. It also support icons along with the caption text, or the icon alone.

{% capture button-standard %}
<button class="tn-button">
    Button
</button>
<button class="tn-button">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Button
</button>
<button class="tn-button tn-button--icon" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
</button>
{% endcapture %}
{% include display-component.html component=button-standard %}

<br/>

## Standard button sizes
The buttons can be set to three sizes: **small**, **default** and **large**.

{% capture button-standard-sizes %}
<button class="tn-button tn-button--small">
    Small Button
</button>
<button class="tn-button tn-button--small">
    <span class="tn-icon tn-icon--checkedlg tn-icon--small" role="presentation"></span>
    Small Button
</button>
<button class="tn-button tn-button--icon tn-button--small" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--small" role="presentation"></span>
</button>

<button class="tn-button">
    Default Button
</button>
<button class="tn-button">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Default Button
</button>
<button class="tn-button tn-button--icon" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
</button>

<button class="tn-button tn-button--large">
    Large Button
</button>
<button class="tn-button tn-button--large">
    <span class="tn-icon tn-icon--checkedlg tn-icon--large" role="presentation"></span>
    Large Button
</button>
<button class="tn-button tn-button--icon tn-button--large" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--large" role="presentation"></span>
</button>
{% endcapture %}
{% include display-component.html component=button-standard-sizes %}

## Standard button state
The buttons can also be set to a state.

| State | Description |
|---|---|
| Normal | The default state of the button. It can be clicked/tapped to perform the corresponding action. |
| Selected | Used to signal this button is selected among other buttons. |
| Disabled | It cannot be clicked/tapped. One use of this state is to disable the "Save" button on a form, until all the data is entered correctly and the form can be saved. |

{% capture button-standard-state %}
<button class="tn-button">
    Button
</button>
<button class="tn-button">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Button
</button>
<button class="tn-button tn-button--icon" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
</button>

<button class="tn-button" aria-selected="true">
    Button
</button>
<button class="tn-button" aria-selected="true">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Button
</button>
<button class="tn-button tn-button--icon" aria-selected="true" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
</button>

<button class="tn-button" aria-disabled="true" disabled>
    Button
</button>
<button class="tn-button" aria-disabled="true" disabled>
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Button
</button>
<button class="tn-button tn-button--icon" aria-disabled="true" disabled aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
</button>
{% endcapture %}
{% include display-component.html component=button-standard-state %}

<br>

# Text Button 
The text button is used to let the user perform other actions that are less important that the primary actions; secondary actions.

{% capture text-buttons %}
<button class="tn-button tn-button--text">
    Text Button
</button>
<button class="tn-button tn-button--text">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Text Button
</button>
<button class="tn-button tn-button--text tn-button--icon">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
</button>
{% endcapture %}

{% include display-component.html component=text-buttons %}

<br>

## Text Button Sizes
The text button support the same sizes as the Standard button.

{% capture text-button-states %}
<button class="tn-button tn-button--text tn-button--small">
    Small Text Button
</button>
<button class="tn-button tn-button--text tn-button--small">
    <span class="tn-icon tn-icon--checkedlg tn-icon--small" role="presentation"></span>
    Small Text Button
</button>
<button class="tn-button tn-button--text tn-button--icon tn-button--small" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--small" role="presentation"></span>
</button>

<button class="tn-button tn-button--text">
    Default Text Button
</button>
<button class="tn-button tn-button--text">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
    Default Text Button
</button>
<button class="tn-button tn-button--text tn-button--icon" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
</button>

<button class="tn-button tn-button--text tn-button--large">
    Large Text Button
</button>
<button class="tn-button tn-button--text tn-button--large">
    <span class="tn-icon tn-icon--checkedlg tn-icon--large" role="presentation"></span>
    Large Text Button
</button>
<button class="tn-button tn-button--text tn-button--icon tn-button--large" aria-label="BUTTON_LABEL">
    <span class="tn-icon tn-icon--checkedlg tn-icon--large" role="presentation"></span>
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
