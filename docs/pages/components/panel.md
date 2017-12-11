---
title: Panel
keywords: panel
sidebar: left-navigation-sidebar
toc: false
permalink: panel.html
folder: components
summary:
---
Panels are used to set apart the content or form elements on a page from the background. Place patterns and interactions within panels on your pages to achieve visual focus and separation for the tasks at-hand. Used on every page.

{% capture default %}
<div class="tn-panel">
    <div class="tn-panel__header">
        <h1 class="tn-panel__title">
            Panel Title (optional)
        </h1>
        <div class="tn-panel__actions">
            Panel buttons (optional)
        </div>
    </div>

    Panel content - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    <div class="tn-panel__footer">
        Panel Footer (optional)
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default %}
