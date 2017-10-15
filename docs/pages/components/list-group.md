---
title: List Group
keywords: list group, lists group, list, lists, groups
sidebar: components-sidebar
toc: false
permalink: list-group.html
folder: components
---

## List Group

{% capture list-group-default %}
<ul class="tn-list-group">
    <li class="tn-list-group__item">
        List item 1
    </li>
    <li class="tn-list-group__item">
        List item 2
    </li>
    <li class="tn-list-group__item">
        List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
    </li>
    <li class="tn-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-default %}

<br>


## List Group with Actions on the right

{% capture list-group-action %}
<ul class="tn-list-group">
    <li class="tn-list-group__item">
        <div class="tn-list-group__action">
          List item 1
          <button class="tn-list-group__button">
           <span class="tn-icon tn-icon--remove" role="presentation"></span>
         </button>
        </div>
    </li>

    <li class="tn-list-group__item">
        <div class="tn-list-group__action">
          List item 2
          <button class="tn-list-group__button">
           <span class="tn-icon tn-icon--remove" role="presentation"></span>
         </button>
        </div>
    </li>

    <li class="tn-list-group__item">
        <div class="tn-list-group__action">
          List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
          <button class="tn-list-group__button">
           <span class="tn-icon tn-icon--remove" role="presentation"></span>
         </button>
        </div>
    </li>

    <li class="tn-list-group__item">
        <div class="tn-list-group__action">
          List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          <button class="tn-list-group__button">
           <span class="tn-icon tn-icon--remove" role="presentation"></span>
         </button>
        </div>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-action %}

<br>


## List Group with Form Actions

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
