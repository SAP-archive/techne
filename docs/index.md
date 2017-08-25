---
title: Getting Started
keywords: getting started
hide_sidebar: true
toc: false
permalink: index.html
folder: getting-started
summary: This is an in-development, experimental version of SAP Hybris Techne. It should NOT be used for production. Refer to the Techne website for details about the current version.
---


## Install the library

### [](#npm)NPM

    npm install techne@2.0-alpha-1 --save

## [](#usage)Usage

Include the full library.

<div class="highlight highlight-text-html-basic">

<pre><<span class="pl-ent">link</span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>node_modules/techne/dist/techne.min.css<span class="pl-pds">"</span></span> <span class="pl-e">rel</span>=<span class="pl-s"><span class="pl-pds">"</span>stylesheet<span class="pl-pds">"</span></span> /></pre>

</div>

### [](#stand-alone-components)Stand alone components

The components can be used without loading the whole library. Take a look at the [Available Techne Components](https://github.com/SAP/techne/wiki/Techne-Components) and the individual files at:

    /dist
        /components/

For example, to use only the cards

<div class="highlight highlight-text-html-basic">

<pre><<span class="pl-ent">link</span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>node_modules/techne/components/card.min.css<span class="pl-pds">"</span></span> <span class="pl-e">rel</span>=<span class="pl-s"><span class="pl-pds">"</span>stylesheet<span class="pl-pds">"</span></span> /></pre>

</div>
