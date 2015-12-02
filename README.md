hybris techne is the design guideline and component library for modern, mobile-first, user-centric experience design on YaaS 
# hybris techne Components
See this page for a list of UI Components included in hybris techne.
https://techne.yaas.io/section-1.html

## Use techne
You can easily  install techne using [Bower](http://bower.io/):
`bower install hyTechne`

## Contribute to hybris techne

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

Remember to fix the paths for fonts by overwriting the path variables 
in a less include after the style.less include like: 

`@import "_resource-paths";`

and add in the file something like: 

```
// Use this file to point to the right folders
// for correct paths for icon-fonts etc 
// icon names much follow a UTF hex naming format

@bootstrap-path: '../../bower_components/bootstrap'; // Path to bootstrap folder
@bower-path: '../../bower_components';  // Path to bower_components folder
@hytech-path: '../../bower_components/hyTechne'; // Path to hytech folder
```

Note: In order to build the less the minimum required version of less is 2.3.0. 
