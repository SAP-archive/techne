Hybris Techne is the design guideline and component library for modern, mobile-first, user-centric experience design on YaaS.

# Components
See this page for a list of UI Components included in Hybris Techne.
https://techne.yaas.io/components/Alerts-Errors-Notifications.html


# Installation 

### Install using bower 
You can install Techne using [Bower](http://bower.io/) by with the following command in terminal or command prompt:
`bower install hyTechne`

### Install using NPM 
Techne is also avialable as a NPM package. You can install with the following command in terminal or command prompt:
`npm install techne`


## Getting started

Four quick steps to get started:

- Clone the repo.
- Run [npm](https://www.npmjs.org): `npm install`.
- Run [npm](https://www.npmjs.org): `npm start` or run [gulp](http://gulpjs.com/): `gulp`
- If you have a different folder setup than the default bower, you should modify the config.json to fit your needs.


### What's the structure?

Within the repo you'll find the following directories and files:

```
├── src/
│   ├── less
│   ├── icons
│   ├── js
│   └── templates
├── dist/
│   ├── css
│   ├── js
│   ├── fonts
├── docs
```

### So you want to build the less on your own?

Nothing easier than that! Simply include our styes.less files like:
`@import "bower_components/hyTechne/src/less/styles";`.

IMPORTANT: There is no default value for @bower-path set. It is required
that you define this variable in your own stylesheet and point to your
bower_components folder. (No trailing slash).

 `@bower-path: '../../bower_components'; `

Reason: In order to be able to overwrite a variable in a import path,
the variable can not yet be defined. Otherwise the LESS compiler picks
the first definition and that's it.

Also remember to fix the paths for fonts by overwriting the path variables
in a less include after the style.less include like:

`@import "_resource-paths";`

and add in the file something like:

```
// Use this file to point to the right folders
// for correct paths for icon-fonts etc
// icon names much follow a UTF hex naming format

@bootstrap-path: '../../bower_components/bootstrap'; // Path to bootstrap folder
@hytech-path: '../../bower_components/hyTechne'; // Path to hytech folder
```

Note: In order to build the less the minimum required version of less is 2.3.0.
