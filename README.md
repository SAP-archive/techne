
# IMPORTANT

This is an in-development, experimental version of SAP Hybris Techne. It should **NOT** be used for production. Refer to the [Techne website](https://techne.yaas.io) for details about the current version.

> If you are interested in testing beta releases, please contact the [Techne team](mailto:techne@sap.com).

[![Build Status](https://travis-ci.org/SAP/techne.svg?branch=v2.0)](https://travis-ci.org/SAP/techne)

# Getting started

Install the library.

### NPM

````
npm install techne@2.0-alpha-1 --save
````

### Bower

````
bower install techne@2.0-alpha-1 --save
````

## Usage

Include the full library.

```html
<link href="node_modules/techne/dist/techne.min.css" rel="stylesheet" />
```

### Stand alone components

The components can be used without loading the whole library. Take a look at the [Available Techne Components](https://github.com/SAP/techne/wiki/Techne-Components) and the individual files at:

```
/dist
    /components/
```

For example, to use only the cards
```
<link href="node_modules/techne/components/card.min.css" rel="stylesheet" />
````

# The project

Techne 2.0 is a design system and pattern library package. This project packages the library for `npm` and `bower` and generates the documentation as a static website.

We rely on several core technologies.

* [Node](https://nodejs.org/) (minimum v6.4)
* Gulp
* Bower
* Sass
* Nunjucks

## First
In addition to Node, you must have Gulp and Bower installed globally:

`npm install -g gulp bower`


## Up and running
Install dev dependencies

`npm install`

## Serve it locally
The documentation website is served from the `www` directory.

`npm start`

## Build production

`gulp docs-build --production`

The documentation website is built to the `www` directory as above. Compiled CSS is copied to `www/public/css` to create a stand-alone static website. This also builds the full distribution package.

# Contributing

New branches should include the type (feature, release, or hotfix) and the issue number or release number.

```
git checkout -b feature/000
git checkout -b hotfix/001
git checkout -b release/2.1
```

Create a pull request against the appropriate branch and assign it for review.

When accepted, the reviewer will merge and delete the branch.
