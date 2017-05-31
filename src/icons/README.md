## Icons Overview
Icons are generated using SVG files in the *raw-svg* folder and converting them into a SVG sprite found under svg/sprite.svg. Required gulp plugins are `gulp-svg-sprites` for sprite generation and `gulp-svgmin` for cleaning and optimizing SVG files. We are no longer using icon fonts. 

## Generated Files 
The generated files include `css folder` and it's content and `techne-icons.html` under `src/icons`. Please do not modify these files as any changes made here will be erased once the gulp task for generating icons is executed.

## Gulp Tasks 
There are several gulp tasks the generate the task. The tasks has been intentionally seperated to serve a single purpose and simplification of the process. 

- icons-build.js : runs icon-generate, icons-svg, icons-css and docs-icons in sequence to generate and copy the files in appropritate locations. Below is a breakdown of each task.
    - icons-generate.js : builds out the svg sprite, css and html preview files
    - icons-svg.js : copies generated svg file to *./src/styles/icons* folder
    - icons-css.js : copies generated css file to *./src/styles/icons* folder
    - docs-icons.js : copies css and svg file from *./src/styles/icons* to *./www/css* folder 
- pkg-icons.js : copies files over to the *./dist/css* folder for distribution with the techne library

## Adding New Icons or regenerating  
To add a new icon, simply drop an SVG file under raw-svg folder and run the gulp task `gulp icons-build`. All the icons will be generated and it should appear in icons.html as a preview. 

Requirements for new icon -

- Filename of the SVG file will be used as the CSS class name. For example icon.svg will be converted into a CSS class `hyicon-icon` 
- The canvas size for the SVG should be 132 x 132 pixel
- All the SVG artwork should fill the canves edge to edge.
- Default color for all artwork should be black. Other color or multiple color fills are possible if required.
- Pull requests will not be merged for new icons unless they meet the above criteria for consistant icon size.
