---
title: Table
keywords: table
sidebar: components-sidebar
toc: false
permalink: table.html
folder: components
summary:
---

At Desktop and Tablet inflections, it is recommended to show 25 rows of data along with the Toolbar. At the Mobile inflection, it is recommended to show 10 rows of data before pagination.

{% capture table-icon %}
<table class="tn-table">
    <thead>
        <tr>
            <th></th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png" class="tn-has-border-radius-50percent" width="32" height="32"></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><img src="http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png" class="tn-has-border-radius-50percent" width="32" height="32"></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><img src="http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png" class="tn-has-border-radius-50percent" width="32" height="32"></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}

{% include display-component.html component=table-icon %}

<br />

## Table with checkbox

{% capture table-checkbox %}
<table class="tn-table">
    <thead>
        <tr>
            <th></th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
            <th>Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr aria-selected="true">
            <td><input type="checkbox" checked></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td><a class="tn-has-font-weight-semi">user.name@email.com</a></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}

{% include display-component.html component=table-checkbox %}
