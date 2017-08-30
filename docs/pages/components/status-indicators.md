---
title: Status Indicators
keywords: status indicators, status, indicators, badge, label
sidebar: components-sidebar
toc: false
permalink: status-indicators.html
folder: components
summary:
---

<style>
.tn-badge, .tn-label {
    margin-right: 20px;
}
</style>


## Badge

{% capture badge %}
<span class="tn-badge">
    Default
</span>
<span class="tn-badge tn-badge--success">
    Default
</span>
<span class="tn-badge tn-badge--warning">
    Default
</span>
<span class="tn-badge tn-badge--error">
    Default
</span>
{% endcapture %}

{% include display-component.html component=badge %}

<br>

## Badge Pill

{% capture badge-pill %}
<span class="tn-badge tn-badge--pill">
    Default
</span>
<span class="tn-badge tn-badge--success tn-badge--pill">
    Default
</span>
<span class="tn-badge tn-badge--warning tn-badge--pill">
    Default
</span>
<span class="tn-badge tn-badge--error tn-badge--pill">
    Default
</span>
{% endcapture %}

{% include display-component.html component=badge-pill %}

<br>


## Label

{% capture label %}
<span class="tn-label">
    Default
</span>
<span class="tn-label tn-label--success">
    Success
</span>
<span class="tn-label tn-label--warning">
    Warning
</span>
<span class="tn-label tn-label--error">
    Error
</span>
{% endcapture %}

{% include display-component.html component=label %}

<br>
