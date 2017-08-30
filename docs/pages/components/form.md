---
title: Form
keywords: form
sidebar: components-sidebar
toc: false
permalink: form.html
folder: components
summary: Form Elements include the layout of a field itself, checkboxes, radio buttons and states of a field. Use these components along with inline help and error state treatements for any form design.
---

## Select

{% capture select %}
<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="select-1">Default Select</label>
        <select class="tn-form__control" id="select-1" name="">
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </select>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label is-required" for="select-2">Required Select</label>
        <select class="tn-form__control" id="select-2" name="">
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </select>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="select-2">Disabled Select</label>
        <select class="tn-form__control" id="select-2" name="" disabled>
            <option value="1">Duis malesuada odio volutpat elementum</option>
            <option value="2">Suspendisse ante ligula</option>
            <option value="3">Sed bibendum sapien at posuere interdum</option>
        </select>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=select %}

<br>

## Inputs

{% capture inputs %}
<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="input-1">Default Input</label>
        <input class="tn-form__control" type="text" id="input-1" name="" value="" placeholder="Field placeholder text">
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label is-required" for="input-2">Required Input</label>
        <input class="tn-form__control" type="text" id="input-2" name="" value="" placeholder="Field placeholder text">
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="input-3">Valid Input</label>
        <input class="tn-form__control is-valid" type="text" id="input-3" name="" value="" placeholder="Field placeholder text">
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="input-4">Invalid Input</label>
        <input class="tn-form__control is-invalid" type="text" id="input-4" name="" value="" placeholder="Field placeholder text">
        <span class="tn-form__message tn-form__message--error">
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </span>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="input-5">Warning Input</label>
        <input class="tn-form__control is-warning" type="text" id="input-5" name="" value="" placeholder="Field placeholder text">
        <span class="tn-form__message tn-form__message--warning">
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </span>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="input-6">Disabled Input</label>
        <input class="tn-form__control" type="text" id="input-6" name="" value="" placeholder="Field placeholder text" disabled>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="input-7">Read Only Input</label>
        <input class="tn-form__control" type="text" id="input-7" name="" value="" placeholder="Field placeholder text" readonly>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="input-4">Input with Help Message</label>
        <input class="tn-form__control" type="text" id="input-4" name="" value="" placeholder="Field placeholder text">
        <span class="tn-form__message tn-form__message--help">
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </span>
    </div>
</div>

<div class="tn-form__group">
    <div class="tn-form__item tn-form__item--inline">
        <label class="tn-form__label" for="input-8">Inline Input</label>
        <input class="tn-form__control" type="text" id="input-8" name="" value="" placeholder="Field placeholder text">
    </div>
    <div class="tn-form__item tn-form__item--inline">
        <label class="tn-form__label" for="input-9">Inline Input</label>
        <input class="tn-form__control" type="text" id="input-9" name="" value="" placeholder="Field placeholder text">
    </div>
    <div class="tn-form__message  tn-form__message--error">
        Error
    </div>
</div>
{% endcapture %}

{% include display-component.html component=inputs %}

<br>

## Textarea

{% capture textarea %}
<fieldset class="tn-form__group">
    <div class="tn-form__item">
        <label class="tn-form__label" for="textarea-1">Field Label</label>
        <textarea class="tn-form__control" id="textarea-1" name="" >Pellentesque metus lacus commodo eget justo ut rutrum varius nunc. Sed non rhoncus risus. Morbi sodales gravida pulvinar. Duis malesuada odio volutpat elementum vulputate massa magna scelerisque ante et accumsan tellus nunc in sem.</textarea>
    </div>
</fieldset>
{% endcapture %}

{% include display-component.html component=textarea %}

<br>

## Radio Buttons

{% capture radio-buttons%}
<fieldset class="tn-form__group">
    <legend class="tn-form__legend">Default Radio Options</legend>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-1" name="radio-name-1" value="" checked>
        <label class="tn-form__label" for="radio-1">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-2" name="radio-name-1" value="">
        <label class="tn-form__label" for="radio-2">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-3" name="radio-name-1" value="">
        <label class="tn-form__label" for="radio-3">Option Three</label>
    </div>
</fieldset>


<fieldset class="tn-form__group">
    <legend class="tn-form__legend is-required">Required Radio Options</legend>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-4" name="radio-name-2" value="">
        <label class="tn-form__label" for="radio-4">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-5" name="radio-name-2" value="" checked>
        <label class="tn-form__label" for="radio-5">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-5" name="radio-name-2" value="">
        <label class="tn-form__label" for="radio-5">Option Three</label>
    </div>
</fieldset>


<fieldset class="tn-form__group">
    <legend class="tn-form__legend">Radio Options Error</legend>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-7" name="radio-name-3" value="">
        <label class="tn-form__label" for="radio-7">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-8" name="radio-name-3" value="" checked>
        <label class="tn-form__label" for="radio-8">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-9" name="radio-name-3" value="">
        <label class="tn-form__label" for="radio-9">Option Three</label>
    </div>
    <div class="tn-form__message  tn-form__message--error">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.
    </div>
</fieldset>


<fieldset class="tn-form__group">
    <legend class="tn-form__legend">Radio Options Disabled</legend>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-10" name="radio-name-4" value="" disabled>
        <label class="tn-form__label" for="radio-10">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-11" name="radio-name-4" value="" disabled checked>
        <label class="tn-form__label" for="radio-11">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-12" name="radio-name-4" value="" disabled>
        <label class="tn-form__label" for="radio-12">Option Three</label>
    </div>
</fieldset>


<fieldset class="tn-form__group">
    <legend class="tn-form__legend">Inline Radio Option</legend>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-13" name="radio-name-5" value="" checked>
        <label class="tn-form__label" for="radio-13">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-14" name="radio-name-5" value="">
        <label class="tn-form__label" for="radio-14">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="radio" id="radio-15" name="radio-name-5" value="">
        <label class="tn-form__label" for="radio-15">Option Three</label>
    </div>
</fieldset>
{% endcapture %}

{% include display-component.html component=radio-buttons %}

<br>

## Checkbox

{% capture checkbox %}    
<fieldset class="tn-form__group">
    <legend class="tn-form__legend">Stacked (default)</legend>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-1" name="checkbox-name-1" value="" checked>
        <label class="tn-form__label" for="checkbox-1">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-2" name="checkbox-name-1" value="">
        <label class="tn-form__label" for="checkbox-2">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-3" name="checkbox-name-1" value="">
        <label class="tn-form__label" for="checkbox-3">Option Three</label>
    </div>
</fieldset>

<fieldset class="tn-form__group">
    <legend class="tn-form__legend">Inline</legend>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-4" name="checkbox-name-2" value="" disabled checked>
        <label class="tn-form__label" for="checkbox-4">Option One</label>
    </div>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-5" name="checkbox-name-2" value="" disabled>
        <label class="tn-form__label" for="checkbox-5">Option Two</label>
    </div>
    <div class="tn-form__item tn-form__item--inline tn-form__item--check">
        <input class="tn-form__control" type="checkbox" id="checkbox-6" name="checkbox-name-2" value="" disabled>
        <label class="tn-form__label" for="checkbox-6">Option Three</label>
    </div>
</fieldset>{% endcapture %}

{% include display-component.html component=checkbox %}

<br>
