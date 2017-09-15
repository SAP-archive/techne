---
title: Toolbar
keywords: toolbar
sidebar: components-sidebar
toc: false
permalink: toolbar.html
folder: components
summary:
---

The Toolbar should be used at the top of different listing pages (e.g. Cards and Tables) to allow for sorting, filtering, pagination, and display view toggles. The Toolbar is likely to include other components over time. If a particular Toolbar component is not applicable to the dataset displayed it should be removed from that toolbar.

The Toolbar should display on any type of listing page once a record is added. If there is only an "Add" action and no records yet the Toolbar should not display.

## Default Toolbar

When no filters have been applied or selected the display should not render the filter list.

{% capture toolbar %}
<div class="tn-toolbar">
    <div class="tn-toolbar__group tn-toolbar__group--filter">

            <button class="tn-button tn-button--text tn-button--icon tn-toolbar__button" aria-label="BUTTON_LABEL" aria-expanded="false" aria-controls="gfAMe850" aria-haspopup="true">
                <span class="tn-icon tn-icon--filter tn-icon--medium" role="presentation"></span>
            </button>

        <span role="separator"></span>

            <div class="tn-dropdown">
                <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="oEeRk206" aria-expanded="false" aria-haspopup="true">
                    <span class="tn-icon tn-icon--sort tn-dropdown__icon" role="presentation"></span>
                    Newest
                </button>
                <ul class="tn-dropdown__menu" aria-hidden="true" id="oEeRk206">
                    <li><a href="#" class="tn-dropdown__item">Option 1</a></li>
                    <li><a href="#" class="tn-dropdown__item">Option 2</a></li>
                    <li><a href="#" class="tn-dropdown__item">Option 3</a></li>
                </ul>

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
<br>

        </div>
        <div class="tn-toolbar__view-as">
            <button class="tn-button tn-button--text tn-button--icon" aria-label="View as grid" aria-pressed="true">
    <span class="tn-icon tn-icon--grid tn-icon--medium" role="presentation"></span>
</button>
            <button class="tn-button tn-button--text tn-button--icon" aria-label="View as list" aria-pressed="false">
    <span class="tn-icon tn-icon--list tn-icon--medium" role="presentation"></span>
</button>
        </div>
    </div>
    <!-- FILTER OPTIONS ROW -->
    <div class="tn-toolbar__group tn-toolbar__group--filter-options" id="gfAMe850" aria-hidden="true">

        <div class="tn-dropdown">
            <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="I5fPJ494" aria-expanded="false" aria-haspopup="true">
                Color
            </button>
            <ul class="tn-dropdown__menu" aria-hidden="true" id="I5fPJ494">
                <li><a href="#" class="tn-dropdown__item">Option 1</a></li>
                <li><a href="#" class="tn-dropdown__item">Option 2</a></li>
                <li><a href="#" class="tn-dropdown__item">Option 3</a></li>
            </ul>

        </div>

        <span role="separator"></span>

        <div class="tn-dropdown">
            <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="EewD5366" aria-expanded="false" aria-haspopup="true">
                Size
            </button>
            <ul class="tn-dropdown__menu" aria-hidden="true" id="EewD5366">
                <li><a href="#" class="tn-dropdown__item">Option 1</a></li>
                <li><a href="#" class="tn-dropdown__item">Option 2</a></li>
                <li><a href="#" class="tn-dropdown__item">Option 3</a></li>
            </ul>

        </div>

        <span role="separator"></span>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=toolbar %}

<br>

## Toolbar with filters applied

When filters have been applied or selected the display should render the filter list. It is important to note that <th></th>e filter list should display BELOW the collapsable container.

{% capture toolbar-filter %}
<div class="tn-toolbar">
    <div class="tn-toolbar__group tn-toolbar__group--filter">

            <button class="tn-button tn-button--text tn-button--icon tn-toolbar__button" aria-label="BUTTON_LABEL" aria-expanded="false" aria-controls="gfAMe850" aria-haspopup="true">
                <span class="tn-icon tn-icon--filter tn-icon--medium" role="presentation"></span>
            </button>

        <span role="separator"></span>

            <div class="tn-dropdown">
                <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="oEeRk206" aria-expanded="false" aria-haspopup="true">
                    <span class="tn-icon tn-icon--sort tn-dropdown__icon" role="presentation"></span>
                    Newest
                </button>
                <ul class="tn-dropdown__menu" aria-hidden="true" id="oEeRk206">
                    <li><a href="#" class="tn-dropdown__item">Option 1</a></li>
                    <li><a href="#" class="tn-dropdown__item">Option 2</a></li>
                    <li><a href="#" class="tn-dropdown__item">Option 3</a></li>
                </ul>

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
<br>

        </div>
        <div class="tn-toolbar__view-as">
            <button class="tn-button tn-button--text tn-button--icon" aria-label="View as grid" aria-pressed="true">
    <span class="tn-icon tn-icon--grid tn-icon--medium" role="presentation"></span>
</button>
            <button class="tn-button tn-button--text tn-button--icon" aria-label="View as list" aria-pressed="false">
    <span class="tn-icon tn-icon--list tn-icon--medium" role="presentation"></span>
</button>
        </div>
    </div>
    <!-- FILTER OPTIONS ROW -->
    <div class="tn-toolbar__group tn-toolbar__group--filter-options" id="gfAMe850" aria-hidden="true">

        <div class="tn-dropdown">
            <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="I5fPJ494" aria-expanded="false" aria-haspopup="true">
                Color
            </button>
            <ul class="tn-dropdown__menu" aria-hidden="true" id="I5fPJ494">
                <li><a href="#" class="tn-dropdown__item">Option 1</a></li>
                <li><a href="#" class="tn-dropdown__item">Option 2</a></li>
                <li><a href="#" class="tn-dropdown__item">Option 3</a></li>
            </ul>

        </div>

        <span role="separator"></span>

        <div class="tn-dropdown">
            <button class="tn-dropdown__control tn-dropdown__control--no-border" aria-controls="EewD5366" aria-expanded="false" aria-haspopup="true">
                Size
            </button>
            <ul class="tn-dropdown__menu" aria-hidden="true" id="EewD5366">
                <li><a href="#" class="tn-dropdown__item">Option 1</a></li>
                <li><a href="#" class="tn-dropdown__item">Option 2</a></li>
                <li><a href="#" class="tn-dropdown__item">Option 3</a></li>
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

{% include display-component.html component=toolbar-filter %}

<br>

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
