const path = require('path');

// HELPERS
// get key from file name, e.g. index.html returns index
var getPageKey = (file) => {
  var filePath = path.basename(file.path);
  return filePath.replace(/\.[^/.]+$/, "");
}



// reads and outputs the app.json file
exports.getDocsAppData = () => {
  try {
    let app = require('../../../docs/data/app.json');
    return { app: app };
  } catch(err) {
    console.log(err.message);
  }
  return { app: {} };
}

// reads and outputs the nav.json file
// adds 'selected' property based on page id, e.g., if 'styles.html' is being generated then 'selected' is set to true for styles.html nav.menu object
exports.getDocsNavData = (file) => {
  try {
    let nav = require('../../../docs/data/nav.json');
    //set menu states
    var selectedId = getPageKey(file);
    nav.menu.forEach(function (obj) {
      obj.selected = obj.id === selectedId || selectedId.indexOf(obj.id) !== -1;
    });
    return { nav: nav };
  } catch(err) {
    console.log(err.message);
  }
  return { nav: {} };
};

// reads and outputs the appropriate json file based on file name, e.g., index uses index.json
exports.getDocsPageData = (file) => {
  try {
    var key = getPageKey(file);
    let page = require(`../../../docs/data/${key}.json`);
    page.id = key;
    return { page: page };
  } catch(err) {
    console.log(err.message);
  }
  return { page: {} };
};





exports.getSrcComponentData = function(file) {
  try {
	var key = getPageKey(file);
    return { components: {} };
  } catch(err) {
    console.log(err.message);
  }
  return { components: {} };
  
};



