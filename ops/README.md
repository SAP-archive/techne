# Process
This directory is the project control center and holds all `gulp` tasks and other scripts to build the documentation, generate icons, package the library, etc.

The project is organized around two primary outputs:
1. The Techne package available for `node` and `bower`
2. The Techne documentation website

Each output has specific needs that involve coordinating multiple tasks, e.g., optimizing SVGs, compiling SASS, copying resources, etc.

Each output has a `build` task that chains the tasks together. Individual tasks should be small and focus on a single concern. It should be very easy to look at any task and immediately understand the input and the output.

> It is VERY important that tasks be separated. Do NOT attempt to do everything in one task.

## The package
* Inputs: `src`
* Outputs: `dist` (and `tmp`)

### Generate the package
`gulp pkg-build --production` builds to `dist`

### For local development
`gulp pkg-build` builds to `tmp`

> Local development has no dependency on `dist`. It only needs to be built for releases and deployments._

### Individual tasks
* `gulp pkg-clean` removes the contents of `dist` (production mode) or `tmp`
* `gulp pkg-css` compiles SASS for the full library, prefixes and cleans (production mode), includes sourcemaps (development mode)
* `gulp pkg-css-minify` minifies compiled CSS (for production mode only)
* `gulp pkg-css-components` compiles, minifies, and prefixes individual component files (for production mode only)


## The docs
* Inputs: `src` and `docs`
* Outputs: `www`

The documentation uses HTML (Nunjucks), CSS (SASS), JS (transpiled ES6), images and SVGs. Dependencies on packaging tasks should be very clearly defined in the main build task, i.e., build the package before including it into the website. Do not mix packaging tasks into the unrelated docs tasks.

### Generate the documentation
`gulp docs-build`

### Generate the docs for production
`gulp docs-build --production`

### Individual tasks
* `gulp docs-clean` removes the contents of `www`
* `gulp docs-resources` optimizes and outputs svgs to `www/svg` (should handle images as well)
* `gulp docs-html` gathers data from various sources to compile Nunjucks templates to `www`
* `docs-css`
* `docs-styleguide`


## The dev
Local development requires a server and includes watch tasks which auto-compiles files and refreshes the browser.

### Start the server
`npm start` or `gulp`

> The default Gulp task is the "build" task for local development

### Individual tasks
* `gulp dev-serve` initializes BrowserSync and watches `www` for changes
* `gulp dev-watch` kicks off compilation tasks when `src` files change
