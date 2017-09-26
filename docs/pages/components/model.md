---
title: Modal
keywords: modal, modals
sidebar: components-sidebar
toc: false
permalink: modal.html
folder: components
summary:
---

## Default Modal
Use to let people know there is something happening, but you can dismiss and act upon it later if needed, e.g. a service subscribed to needs updating. It’s recommended to use the dark blue treatment for Alerts. Alerts should display until they are dismissed by clicking or tapping X.

{% capture default-modal %}
<div class="tn-modal">
    <div class="tn-modal__content">
        <div class="tn-modal__header">
            <button class="tn-button tn-button--text tn-button--icon tn-button--small" aria-label="close">
                <span class="tn-icon tn-icon--close" role="presentation"></span>
            </button>
            <h4 class="tn-modal__title">Modal Header</h4>
        </div>
        <div class="tn-modal__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <footer class="tn-modal__footer-items">
            <button class="tn-modal__button-primary">Primary</button>
            <button class="tn-modal__button-secondary">Secondary</button>
        </footer>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-modal %}
