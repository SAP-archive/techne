const path = require('path');
const requireDir = require('require-dir')

// HELPERS
// get key from file name, e.g. index.html returns index
var getPageKey = (file) => {
  var filePath = path.basename(file.path);
  return filePath.replace(/\.[^/.]+$/, "");
}

var setDocsAppData = () => {
  try {
    let app = require('../../docs/data/app.json');
    //return { app: app };
    return app;
  } catch(err) {
    console.log(err.message);
  }
  return {};
}


let app = setDocsAppData();

/*
reads and outputs the app.json file
    if called from a gulp task, will use the HTML file name as a key
    to set a selected property for each nav item
*/
exports.getDocsAppData = (file) => {
    if (!file) {
        return app;
    }
    try {
        //modifies app data to set menu states for each item
        var selectedId = getPageKey(file);
        app.nav.menu.forEach(function (obj) {
            obj.selected = obj.id === selectedId || selectedId.indexOf(obj.id) !== -1;
        });
    } catch(err) {
        console.log(err.message);
    }
    return app;
}

// reads and outputs the appropriate json file based on file name, e.g., index uses index.json
exports.getDocsPageData = (file) => {
    try {
        var key = getPageKey(file);
        let page = require(`../../docs/data/${key}.json`);
        page.id = key;
        return page;
    } catch(err) {
        console.log(err.message);
    }
    return {};
};

// reads and assembled all JSON files in src/data/*
exports.getDocsComponentData = () => {
    try {
        let components = requireDir(`../../src/data/`);
        return components;
    } catch(err) {
        console.log(err.message);
    }
    return {};
};




/// WIP for individial code snippets
exports.getSrcComponentData = function(file) {
    try {
        var key = getPageKey(file);
        return { components: {} };
    } catch(err) {
        console.log(err.message);
    }
    return { components: {} };
};
