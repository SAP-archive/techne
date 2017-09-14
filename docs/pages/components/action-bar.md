---
title: Action Bar
keywords: action bar, action, bar
sidebar: components-sidebar
toc: false
permalink: action-bar.html
folder: components
summary:
---
The Action Bar sits at the top of an object detail page and allows for saving, cancelling, going back, and other actions upon the object. General guidelines for this pattern are as follows:

* The Action Bar sits at the top of the page
* When users come to a new/create object, the Cancel and Save are both visible and enabled.
* When there is a primary button other than Save, the Primary button should always be active. There is no Cancel link in this case.
* On an object page in edit mode, before any edits have been made Cancel and Save are not visible or enabled.
* A user must click or tap inside a field to make visible and enable the Save and Cancel actions.
* In the new or edit scenario if a user clicks on Cancel, the form is cleared and the user is taken back to the page they came from.
* If the user leaves a page in the middle of create or edit, they should receive a confirmation dialogue asking them to confirm whether they want to leave the page without saving (see screenshot)

## Default Action Bar

{% capture default-action-bar %}
<header class="tn-action-bar">
    <h1 class="tn-action-bar__title">
        Page Title
    </h1>
</header>
{% endcapture %}

{% include display-component.html component=default-action-bar %}

<br>

## Action Bar with Back Button

{% capture default-action-bar-back %}
<header class="tn-action-bar">
    <div class="tn-action-bar__navigation">
        <button class="tn-button tn-button--text tn-button--icon tn-button--large" aria-label="Back">
            <span class="tn-icon tn-icon--backarrow tn-icon--large" role="presentation"></span>
        </button>

    </div>
    <h1 class="tn-action-bar__title">
        Page Title
    </h1>
</header>
{% endcapture %}

{% include display-component.html component=default-action-bar-back %}

<br>

## Action Bar with Multiple Action Buttons

{% capture default-action-bar-multi %}
<header class="tn-action-bar">
    <h1 class="tn-action-bar__title">
        Page Title
    </h1>
    <div class="tn-action-bar__actions">
        <div class="tn-action-bar__action-item">
            <button class="tn-button tn-button--text tn-button--action-bar">
                <span class="tn-icon tn-icon--remove tn-icon--medium" role="presentation"></span>
                Cancel
            </button>

        </div>
        <div class="tn-action-bar__action-item">
            <button class="tn-button tn-button--text tn-button--action-bar">
                <span class="tn-icon tn-icon--remove tn-icon--medium" role="presentation"></span>
                Cancel
            </button>

        </div>
        <div class="tn-action-bar__action-item">
            <button class="tn-button tn-button--text tn-button--action-bar">
                <span class="tn-icon tn-icon--remove tn-icon--medium" role="presentation"></span>
                Cancel
            </button>

        </div>
        <div class="tn-action-bar__action-item">
            <button class="tn-button tn-button--action-bar">
                <span class="tn-icon tn-icon--checkedlg tn-icon--medium" role="presentation"></span>
                Save
            </button>

        </div>
    </div>
</header>
{% endcapture %}

{% include display-component.html component=default-action-bar-multi %}

<br>

## Action Bar with Contextual Menu

{% capture default-action-bar-menu %}
<header class="tn-action-bar">
    <h1 class="tn-action-bar__title">
        Page Title
    </h1>
    <div class="tn-action-bar__actions">
        <div class="tn-action-bar__action-item">


            <div class="tn-dropdown">
                <button class="tn-button tn-button--text tn-button--action-bar" aria-controls="3ewpS611" aria-haspopup="true" aria-expanded="false" aria-label="More">
                    <span class="tn-icon tn-icon--more tn-icon--medium" role="presentation"></span>
                    More
                </button>

                <ul class="tn-dropdown__menu tn-contextual-menu" aria-hidden="true" id="3ewpS611">
                    <li><a href="#" class="tn-dropdown__item">Edit</a></li>
                    <li><a href="#" class="tn-dropdown__item">Delete</a></li>
                    <li><a href="#" class="tn-dropdown__item">Assign</a></li>
                    <li><a href="#" class="tn-dropdown__item">Expire</a></li>
                    <li><a href="#" class="tn-dropdown__item">Archive</a></li>
                </ul>

            </div>

        </div>
    </div>
</header>
{% endcapture %}

{% include display-component.html component=default-action-bar-menu %}

<script type="text/javascript">
//dropdown
var els = document.querySelectorAll("[aria-controls]");
for (var i = 0; i < els.length; i++) {
    var el = els[i];
    el.addEventListener('click', function(e) {
        var targetId = this.getAttribute("aria-controls");
        var target = document.getElementById(targetId);
        //alert
        var isAlert = this.parentElement.getAttribute("role") === "alert";
        if (isAlert) {
            //remove or hide if we want some animation
            // target.setAttribute("aria-hidden", true);
            target.remove();
            return;
        }
        //dropdown
        var isDropdown = this.getAttribute("aria-haspopup") === "true";
        if (isDropdown) {
            //trigger
            var isExpanded = this.getAttribute("aria-expanded") === "true";
            this.setAttribute("aria-expanded", !isExpanded);
            //target
            var targetIsHidden = target.getAttribute("aria-hidden") == "true";
            target.setAttribute("aria-hidden", isExpanded);
            return;
        }
    })
}  
</script>
