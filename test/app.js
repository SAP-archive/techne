const nunjucks = require('nunjucks');
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const sass = require('node-sass');

const TEMPLATE_DIRECTORY = path.join(__dirname, 'templates');
const PUBLIC_DIRECTORY = path.join(__dirname, 'public');
const SASS_DIRECTORY = "../src/styles/components"; //this should move to /scss

// looks for html in templates folder, static resources in public
var env = nunjucks.configure([TEMPLATE_DIRECTORY,PUBLIC_DIRECTORY], {
    autoescape: true,
    cache: false,
    express: app,
    watch: true
});
// convert SASS to CSS from the lib source
env.addFilter('sassToCss', function(sassFile="app.scss") {
    try {
        var scss_filename = `${SASS_DIRECTORY}/${sassFile}`;
        return sass.renderSync({
            file: scss_filename
        }).css.toString();
    } catch(err) {
        console.warn(`sassToCss: ${err.message}`);
    }
});

app.set('views', TEMPLATE_DIRECTORY);
app.set('view engine', 'njk');

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));


const GLOBALS = {
    namespace: 'tn'
};

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
    res.render(key, Object.assign(GLOBALS, { id: key }));
});

app.listen(3030);
module.exports = app;
