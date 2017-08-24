## Icons Overview
Icons are generated using SVG files in the *raw-svg* folder and converting them into a SVG sprite found under scss/icons/techne-icons.svg. Required gulp plugins are `gulp-svg-sprites` for sprite generation and `gulp-svgmin` for cleaning and optimizing SVG files.

## Templates
Templates are located under icons/templates for html and css files.

## Generated Files
The generated files include `scss/icons/icons.css`, `scss/icons/icons.svg` and `test/icons/icons.svg`. Please do not modify these files as any changes made here will be erased once the gulp task for generating icons is executed.

## Gulp Tasks
There are several gulp tasks the generate the task. The tasks has been intentionally separated to serve a single purpose and simplification of the process.

- icons.js : builds out the SVG sprite, css and html preview files from *./icons/raw-svg* to *./scss/icons* and *./test/templates/icons*

- pkg-icons.js : copies files from *./scss/icons* to *./dist/css* for distribution

- docs-icons.js : copies SVG file from *./scss/icons* to *./docs/_site* folder for the documentation site.

## Adding New Icons or regenerating  
To add a new icon, simply drop an SVG file under raw-svg folder and run the gulp task `gulp icons` and then restart local server with `npm start`.

## Testing Icons
`npm test`

navigate to `http://localhost:3030/icons` in the browser

## Requirements for new icon

- Filename of the SVG file will be used as the CSS class name. For example icon.svg will be converted into a CSS class `.tn-icon-icon`
- The canvas size for the SVG should be 16 x 16 pixel, to match the base font size.
- All the SVG artwork should fill the canvas edge to edge.
- Default color for all artwork should be black. Other color or multiple color fills are possible if required.
- Pull requests will not be merged for new icons unless they meet the above criteria for consistent icon size.
