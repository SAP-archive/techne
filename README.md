# Techne Components

List of Components

## Quick start

Four quick step to get started:

- Clone the repo.
- Run [npm](https://www.npmjs.org): `npm install`.
- Run [npm](https://www.npmjs.org): `npm start` or run [gulp](http://gulpjs.com/): `gulp`
- If you have a differnt folder setup than the default bower, you can modify the config.json
and run `git update-index --skip-worktree config.json && git update-index --skip-worktree src/less/globals/_paths.less`


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
│   └── templates
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

@bootstrap-path: '../../bower_components/bootstrap'; // Path to bootstrap folder
@bower-path: '../../bower_components';  // Path to bower_components folder
@hytech-path: '../../bower_components/hyTechne'; // Path to hytech folder
```