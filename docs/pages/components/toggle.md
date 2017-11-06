---
title: Toggle
keywords: toggle`
sidebar: components-sidebar
toc: false
permalink: toggle.html
folder: components
summary:
---

## Default Toggle
Use the Large Toggle component when the toggle action is a primary action on a page or to turn on/off secondary actions on the page

{% capture default %}
<span class="tn-toggle tn-toggle--small">
    <input type="checkbox" name="" value="" id="9c0JI577">
    <span class="tn-toggle__switch" role="presentation"></span>
</span>

<span class="tn-toggle">
    <input type="checkbox" name="" value="" id="DhMDF142">
    <span class="tn-toggle__switch" role="presentation"></span>
</span>

<span class="tn-toggle tn-toggle--large">
    <input type="checkbox" name="" value="" id="iPFtH652">
    <span class="tn-toggle__switch" role="presentation"></span>
</span>
{% endcapture %}

{% include display-component.html component=default %}

## Toggle Checked

Add the attribute  `checked` for 'on' state

{% capture checked %}
<span class="tn-toggle tn-toggle--small">
    <input type="checkbox" name="" value="" id="DNhXZ663" checked>
    <span class="tn-toggle__switch" role="presentation"></span>
</span>

<span class="tn-toggle">
    <input type="checkbox" name="" value="" id="4XbeP846" checked>
    <span class="tn-toggle__switch" role="presentation"></span>
</span>

<span class="tn-toggle tn-toggle--large">
    <input type="checkbox" name="" value="" id="VyOyD837" checked>
    <span class="tn-toggle__switch" role="presentation"></span>
</span>
{% endcapture %}

{% include display-component.html component=checked %}

## Disabled Toggle

Add the attribute  `disabled` for 'disabled' state

{% capture disabled %}
<span class="tn-toggle tn-toggle--small">
    <input type="checkbox" name="" value="" id="8ANI6288" disabled>
    <span class="tn-toggle__switch" role="presentation"></span>
</span>

<span class="tn-toggle">
    <input type="checkbox" name="" value="" id="BjPKt701" disabled checked>
    <span class="tn-toggle__switch" role="presentation"></span>
</span>

<span class="tn-toggle tn-toggle--large">
    <input type="checkbox" name="" value="" id="UTZjI977" disabled>
    <span class="tn-toggle__switch" role="presentation"></span>
</span>
{% endcapture %}

{% include display-component.html component=disabled %}

## Use with form

Replace the normal checkbox with the `.tn-toggle component`. Apply the `.tn-form__control` class to the `.tn-toggle` component instead of to the input element. Everything else works the same.

{% capture form %}
<div class="tn-form__item tn-form__item--check">
    <label class="tn-form__label" for="Yj07w605">
        <span class="tn-toggle tn-toggle--small tn-form__control">
            <input type="checkbox" name="" value="" id="Yj07w605">
            <span class="tn-toggle__switch" role="presentation"></span>
        </span>

        Field label
    </label>
</div>

<div class="tn-form__item tn-form__item--check">
    <label class="tn-form__label" for="0xXU6385">
        <span class="tn-toggle tn-form__control">
            <input type="checkbox" name="" value="" id="0xXU6385">
            <span class="tn-toggle__switch" role="presentation"></span>
        </span>

        Field label
    </label>
</div>

<div class="tn-form__item tn-form__item--check">
    <label class="tn-form__label" for="0VRNl813">
        <span class="tn-toggle tn-toggle--large tn-form__control">
            <input type="checkbox" name="" value="" id="0VRNl813">
            <span class="tn-toggle__switch" role="presentation"></span>
        </span>

        Field label
    </label>
</div>
{% endcapture %}

{% include display-component.html component=form %}
