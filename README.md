Techne v2.0

Styles and Component library for modern, user-centric Experience Design

# Getting started

You can install and reference the library from 

### NPM 

````
npm install techne --save
````

### Bower

````
bower install techne --save
````

### CDN

> Coming soon.

## Usage

Reference the full library.

```html
<link href="node_modules/techne/techne.min.css" rel="stylesheet" />
```

### Stand alone components

The components can be used without loading the whole library. Take a look at the [Available Techne Components](https://github.com/SAP/techne/wiki/Techne-Components) and the individual files at:

```
/dist
    /components/
```

For example, to use only the cards
```
<link href="node_modules/techne/containers/card/card.min.css" rel="stylesheet" />
````

# Development

The project is structured as an Angular 4.0 Application. To take advantage of live development, like Webpack. The Website is built using the Angular CLI and the Library is build with Gulp.

### Main Files Structure
````
/src
    /app     <- Website
    /techne  <- Library
````

## Develop

Clone the repository from 

`git clone https://github.com/SAP/techne.git`

Install all NPM packages

`npm install`

Run the development mode server

`ng serve`

Build the Techné Website

`ng build`

Build the Techné Library 

`gulp build`