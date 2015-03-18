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


###Using with AngularJS

when using techne webcomponents with angalarjs it is imperive that the angular application be bootraped to an element
using the wrap() method.  Teche web components are built using polymer and thus require the use of polyfils for insertion
of elements into a browsers shadow DOM.  More indepth details about wrappers from polymer can be read here: http://www.polymer-project.org/platform/shadow-dom.html#wrappers

Example: 

<pre><code>
angular.element(document).ready(function() {
    angular.bootstrap( <b>wrap(</b> document <b>)</b>, [
        'ds.app',
        'ds.i18n']);
});
</code></pre>
