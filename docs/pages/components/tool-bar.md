---
title: Toolbar
keywords: toolbar
sidebar: components-sidebar
toc: false
permalink: toolbar.html
folder: components
---

The Toolbar component is used always along a collection of items, like cards or a table. The main use of it is to manipulate the collection. We provide elements and interaction patters for **filtering**, **sorting**, **pagination** and **view changes**.

<br/>

## Filtering

All the filtering options will be under the filtering icon (<span class="tn-icon tn-icon--filter tn-icon--medium" style="font-size: 1em; vertical-align: middle;"></span>) located on the right of the toolbar. When pressed it will display a second row on the toolbar, from this second row will show all available filtering options for the user to select.

{% capture toolbar %}
<div class="tn-toolbar">
    <div class="tn-toolbar__group tn-toolbar__group--filter">
        <button class="tn-button tn-button--text tn-button--icon tn-toolbar__button" aria-label="BUTTON_LABEL" aria-expanded="false" aria-controls="gfAMe850" aria-haspopup="true">
            <span class="tn-icon tn-icon--filter tn-icon--medium" role="presentation"></span>
        </button>
    </div>
    <!-- FILTER OPTIONS ROW -->
    <div class="tn-toolbar__group tn-toolbar__group--filter-options" id="gfAMe850" aria-hidden="true">
        <div class="tn-dropdown">
            <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="I5fPJ494" aria-expanded="false" aria-haspopup="true">
                Color
            </button>
            <ul class="tn-dropdown__menu" aria-hidden="true" id="I5fPJ494">
                <li><a href="#" class="tn-dropdown__item">Blue</a></li>
                <li><a href="#" class="tn-dropdown__item">Red</a></li>
                <li><a href="#" class="tn-dropdown__item">Green</a></li>
            </ul>
        </div>
        <span role="separator"></span>
        <div class="tn-dropdown">
            <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="EewD5366" aria-expanded="false" aria-haspopup="true">
                Size
            </button>
            <ul class="tn-dropdown__menu" aria-hidden="true" id="EewD5366">
                <li><a href="#" class="tn-dropdown__item">S</a></li>
                <li><a href="#" class="tn-dropdown__item">M</a></li>
                <li><a href="#" class="tn-dropdown__item">L</a></li>
                <li><a href="#" class="tn-dropdown__item">XL</a></li>
            </ul>
        </div>
        <span role="separator"></span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar %}

<br />

The selected filters will be displayed on a new row bellow. Every filter will include an remove icon (<span class="tn-icon tn-icon--filterremove" style="font-size: 1em; vertical-align: middle"></span>) to deselect it. Also a "Clear all" button that will deselect all filters.

{% capture toolbar-with-filters %}
<div class="tn-toolbar">
    <div class="tn-toolbar__group tn-toolbar__group--filter">
        <button class="tn-button tn-button--text tn-button--icon tn-toolbar__button" aria-label="BUTTON_LABEL" aria-expanded="false" aria-controls="gfAMe851" aria-haspopup="true">
            <span class="tn-icon tn-icon--filter tn-icon--medium" role="presentation"></span>
        </button>
    </div>
    <!-- FILTER OPTIONS ROW -->
    <div class="tn-toolbar__group tn-toolbar__group--filter-options" id="gfAMe851" aria-hidden="true">
        <div class="tn-dropdown">
            <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="I5fPJ494" aria-expanded="false" aria-haspopup="true">
                Color
            </button>
            <ul class="tn-dropdown__menu" aria-hidden="true" id="I5fPJ494">
                <li><a href="#" class="tn-dropdown__item">Blue</a></li>
                <li><a href="#" class="tn-dropdown__item">Red</a></li>
                <li><a href="#" class="tn-dropdown__item">Green</a></li>
            </ul>
        </div>
        <span role="separator"></span>
        <div class="tn-dropdown">
            <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="EewD5366" aria-expanded="false" aria-haspopup="true">
                Size
            </button>
            <ul class="tn-dropdown__menu" aria-hidden="true" id="EewD5366">
                <li><a href="#" class="tn-dropdown__item">S</a></li>
                <li><a href="#" class="tn-dropdown__item">M</a></li>
                <li><a href="#" class="tn-dropdown__item">L</a></li>
                <li><a href="#" class="tn-dropdown__item">XL</a></li>
            </ul>
        </div>
        <span role="separator"></span>
    </div>
    <div class="tn-toolbar__group tn-toolbar__group--applied-filters">
        <ul class="tn-toolbar__applied-filter-list">
            <li class="tn-toolbar__applied-filter-item">
                <span>Color: <strong>Red</strong></span>
                <button class="tn-button tn-button--text tn-button--small tn-button--icon" aria-label="Clear">
                    <span class="tn-icon tn-icon--filterremove" role="presentation"></span>
                </button>
            </li>
            <li class="tn-toolbar__applied-filter-item">
                <span>Size: <strong>Small</strong></span>
                <button class="tn-button tn-button--text tn-button--small tn-button--icon" aria-label="Clear">
                    <span class="tn-icon tn-icon--filterremove" role="presentation"></span>
                </button>
            </li>
            <li class="tn-toolbar__applied-filter-item">
                <a href="#" class="tn-toolbar__applied-filter-clear">Clear All</a>
            </li>
        </ul>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar-with-filters %}

<br/>

## Sorting

The Toolbar sorting elements modify the order of the items in the collection depending on the user selection. It is located right besides the filter icon.

{% capture toolbar-sorting %}
<div class="tn-toolbar">
    <div class="tn-toolbar__group tn-toolbar__group--filter">
        <button class="tn-button tn-button--text tn-button--icon tn-toolbar__button" aria-label="BUTTON_LABEL" disabled aria-disabled="true">
            <span class="tn-icon tn-icon--filter tn-icon--medium" role="presentation"></span>
        </button>
        <span role="separator"></span>
        <div class="tn-dropdown">
            <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="oEeRk206" aria-expanded="false" aria-haspopup="true">
                <span class="tn-icon tn-icon--sort tn-dropdown__icon" role="presentation"></span>
                Newest
            </button>
            <ul class="tn-dropdown__menu" aria-hidden="true" id="oEeRk206">
                <li><a href="#" class="tn-dropdown__item">Oldest</a></li>
                <li><a href="#" class="tn-dropdown__item">Price Ascending</a></li>
                <li><a href="#" class="tn-dropdown__item">Price Descending</a></li>
            </ul>
        </div>
        <span role="separator"></span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar-sorting %}

<br />

## Paination

The Toolbar is also used to support [pagination elements](pagination.html). They are displayed at the main toolbar and also bellow the collection. 

{% capture toolbar-pagination %}
<div class="tn-toolbar">
    <div class="tn-toolbar__group tn-toolbar__group--filter">
        <button class="tn-button tn-button--text tn-button--icon tn-toolbar__button" aria-label="BUTTON_LABEL" disabled aria-disabled="true">
            <span class="tn-icon tn-icon--filter tn-icon--medium" role="presentation"></span>
        </button>
        <span role="separator"></span>
        <div class="tn-dropdown">
            <button class="tn-dropdown__control tn-dropdown__control--no-border" disabled aria-disabled="true">
                <span class="tn-icon tn-icon--sort tn-dropdown__icon" role="presentation"></span>
                Newest
            </button>
        </div>
        <span role="separator"></span>
    </div>
    <div class="tn-toolbar__group tn-toolbar__group--view">
        <div class="tn-toolbar__pagination">
                <ul class="tn-pagination">
                    <span class="tn-pagination__total">30 items</span>
                    <li class="tn-pagination__item">
                            <a href="#" class="tn-pagination__link" aria-label="Previous">
                            <span aria-hidden="true"><</span>
                        </a>
                    </li>
                    <li class="tn-pagination__item">
                            <a href="#" class="tn-pagination__link">1</a>
                    </li>
                    <li class="tn-pagination__item">
                            <a href="#" class="tn-pagination__link" aria-selected="true">2</a>
                    </li>
                    <li class="tn-pagination__item">
                            <a href="#" class="tn-pagination__link">3</a>
                    </li>
                    <li class="tn-pagination__item">
                            <a href="#" class="tn-pagination__link" aria-label="Next">
                            <span aria-hidden="true">></span>
                        </a>
                    </li>
                </ul>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar-pagination %}

## Toolbar with pagination

{% capture toolbar-pagination %}
<div class="tn-toolbar">
    <div class="tn-toolbar__group tn-toolbar__group--view">
        <div class="tn-toolbar__pagination">
            <ul class="tn-pagination">
                <span class="tn-pagination__total">30 items</span>
                <li class="tn-pagination__item">
                        <a href="#" class="tn-pagination__link" aria-label="Previous">
                        <span aria-hidden="true"><</span>
                    </a>
                </li>
                    <li class="tn-pagination__item">
                            <a href="#" class="tn-pagination__link">1</a>
                    </li>
                    <li class="tn-pagination__item">
                            <a href="#" class="tn-pagination__link" aria-selected="true">2</a>
                    </li>
                    <li class="tn-pagination__item">
                            <a href="#" class="tn-pagination__link">3</a>
                    </li>
                <li class="tn-pagination__item">
                        <a href="#" class="tn-pagination__link" aria-label="Next">
                        <span aria-hidden="true">></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar-pagination %}
