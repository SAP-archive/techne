# Process
This directory is the project control center and holds all `gulp` tasks and other scripts to build the documentation, generate icons, package the library, etc.

The project is organized around two primary outputs:
1. The Techne package available for `node` and `bower`
2. The Techne documentation website

Each output has specific needs that involve coordinating multiple tasks, e.g., optimizing SVGs, compiling SASS, copying resources, etc.

Each output has a `build` task that chains the tasks together. Individual tasks should be small and focus on a single concern. It should be very easy to look at any task and immediately understand the input and the output.

**It is VERY important that tasks be separated. Do NOT attempt to do everything in one task.**


## Overview



## The package
Inputs: `src`
Outputs: `dist`



## The docs
Inputs: `src` and `docs`
Outputs: `www` (and `dev`)

The documentation uses HTML (Nunjucks), CSS (SASS), JS (transpiled ES6), images and SVGs. Dependencies on packaging tasks should be very clearly defined in the main build task, i.e., build the package before including it into the website. Do not mix packaging tasks into the unrelated docs tasks.

Generate the documentation
`gulp docs-build`

Individual tasks
* `gulp docs-clean` removes the contents of `www`
* `gulp docs-resources` optimizes and outputs svgs to `www/svg` (should handle images as well)
* `gulp docs-html` gathers data from various sources to compile Nunjucks templates to `www`
* `docs-css`
* `docs-styleguide`


## The rest
