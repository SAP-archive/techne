## Icons Overview
Icons are generated using SVG files in the *raw-svg* folder and converting them into a SVG sprite found under svg/sprite.svg. Required gulp plugins are `gulp-svg-sprites` for sprite generation and `gulp-svgmin` for cleaning and optimizing SVG files. We are no longer using icon fonts. 

## Generated Files 
The generated files include `techne-icons.css`, `techne-icons.html` and `techne-icons.svg` under `src/styles/icons` folder. Please do not modify these files as any changes made here will be erased once the gulp task for generating icons is executed.

## Gulp Tasks 
There are several gulp tasks the generate the task. The tasks has been intentionally seperated to serve a single purpose and simplification of the process. 

- icons.js : builds out the svg sprite, css and html preview files from *./src/icons* to *./src/styles/icons*

- pkg-icons.js : copies files from *./src/styles/icons* to *./dist/css* for distrubtion 

- docs-icons.js : copies svg file from *./dist/css* to *./www/css* folder for the documenation site.

## Adding New Icons or regenerating  
To add a new icon, simply drop an SVG file under raw-svg folder and run the gulp task `gulp icons` and then restart local server with `npm start`. 

Requirements for new icon -

- Filename of the SVG file will be used as the CSS class name. For example icon.svg will be converted into a CSS class `hyicon-icon` 
- The canvas size for the SVG should be 132 x 132 pixel
- All the SVG artwork should fill the canves edge to edge.
- Default color for all artwork should be black. Other color or multiple color fills are possible if required.
- Pull requests will not be merged for new icons unless they meet the above criteria for consistant icon size.
