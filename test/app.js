const nunjucks = require('nunjucks');
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const sass = require('node-sass');

const TEMPLATE_DIRECTORY = path.join(__dirname, 'templates');
const PUBLIC_DIRECTORY = path.join(__dirname, 'public');
const SASS_DIRECTORY = path.join(__dirname, '..', 'src/styles'); //this should move to /scss

const GLOBALS = {
    namespace: 'tn'
};

// looks for html in templates folder, static resources in public
var env = nunjucks.configure([TEMPLATE_DIRECTORY,PUBLIC_DIRECTORY], {
    autoescape: false,
    cache: false,
    express: app,
    watch: true
});
// convert SASS to CSS from the lib source
env.addFilter('sass_to_css', function(sassFile="app.scss") {
    try {
        var scss_filename = `${SASS_DIRECTORY}/${sassFile}`;
        return sass.renderSync({
            file: scss_filename
        }).css.toString();
    } catch(err) {
        console.warn(`sassToCss: ${err.message}`);
    }
});
// convert an array to classes
// returns [ tn-element--mod ]
env.addFilter('modifier', function(array=[],element="") {
    //is string
    if (typeof array === "string") {
        return ` ${GLOBALS.namespace}-${element}--${array}`;
    }
    var mods = array.map((mod) => {
         return ` ${GLOBALS.namespace}-${element}--${mod}`;
    })
    //console.log(mods.join());
    return mods.join('') ;
});
// convert an array to classes
// returns [ tn-cls ]
env.addFilter('classes', function(array=[]) {
    //is string
    if (typeof array === "string") {
        return ` ${GLOBALS.namespace}-${array}`;
    }
    var classes = array.map((cls, index) => {
         return ` ${GLOBALS.namespace}-${cls}`;
    })
    //console.log(mods.join());
    return classes.join('') ;
});

app.set('views', TEMPLATE_DIRECTORY);
app.set('view engine', 'njk');

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));



router.all('/', function (req, res, next) {
  //console.log('request initiated!');
  next();
});

router.get('/', function (req, res) {
  res.render('index', GLOBALS);
});

router.get('/:key', (req, res) => {
    var key = req.params.key;
    //console.log(key)
    res.render(`${key}/index`, Object.assign(GLOBALS, { id: key }));
});

app.listen(3030);
console.log('listening at http://localhost:3030')
module.exports = app;
