---
title: List
keywords: list group, lists group, list, lists, groups
sidebar: components-sidebar
toc: false
permalink: list-group.html
folder: components
---

The List Component can be used to display a list of items with simple information such as - scopes, names, etc.

## Simple List

You can use a link to allow the user to access more information about list item.

{% capture list-group-default %}
<ul class="tn-list-group">
    <li class="tn-list-group__item">
        <a href="">List item 1</a>
    </li>
    <li class="tn-list-group__item">
        <a href="">List item 2</a>
    </li>
    <li class="tn-list-group__item">
        <a href="">List item 3</a> - Lorem ipsum dolor sit amet, consectetur sed do
    </li>
    <li class="tn-list-group__item">
        <a href="">List item 4</a> - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-default %}

<br>

## Lists with Action

The List items can also contain quick actions, like: remove, edit, copy, etc.

{% capture list-group-action %}
<ul class="tn-list-group">
    <li class="tn-list-group__item">
        <div class="tn-list-group__action">
            List item 1
            <button class="tn-list-group__button">
                <span class="tn-icon tn-icon--close" role="presentation"></span>
            </button>
        </div>
    </li>
    <li class="tn-list-group__item">
        <div class="tn-list-group__action">
            List item 2
            <button class="tn-list-group__button">
                <span class="tn-icon tn-icon--edit" role="presentation"></span>
            </button>
        </div>
    </li>
    <li class="tn-list-group__item">
        <div class="tn-list-group__action">
            List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
            <button class="tn-list-group__button">
                <span class="tn-icon tn-icon--clone" role="presentation"></span>
            </button>
        </div>
    </li>
    <li class="tn-list-group__item">
        <div class="tn-list-group__action">
            List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            <button class="tn-list-group__button">
                <span class="tn-icon tn-icon--options" role="presentation"></span>
            </button>
        </div>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-action %}

<br>


## List with Check boxes

Checkboxes can be used on the left, that enables the user to select multiple items for bulk actions.

{% capture list-group-actions-form %}
<ul class="tn-list-group">
    <li class="tn-list-group__item">
        <div class="tn-list-group__action-form" >
            <input class="tn-list-group__control" type="checkbox" id="checkbox-1" name="checkbox-name-1">
            <label class="tn-list-group__label" for="checkbox-1">List item 1</label>
        </div>
    </li>
    <li class="tn-list-group__item">
        <div class="tn-list-group__action-form" >
            <input class="tn-list-group__control" type="checkbox" id="checkbox-2" name="checkbox-name-2">
            <label class="tn-list-group__label" for="checkbox-2">List item 2</label>
        </div>
    </li>
    <li class="tn-list-group__item">
        <div class="tn-list-group__action-form" >
            <input class="tn-list-group__control" type="checkbox" id="checkbox-3" name="checkbox-name-3">
            <label class="tn-list-group__label" for="checkbox-3">List item 3 - Lorem ipsum dolor sit amet, consectetur sed do</label>
        </div>
    </li>
    <li class="tn-list-group__item">
        <div class="tn-list-group__action-form" >
            <input class="tn-list-group__control" type="checkbox" id="checkbox-4" name="checkbox-name-4">
            <label class="tn-list-group__label" for="checkbox-4">List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</label>
        </div>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-actions-form %}


<br>
