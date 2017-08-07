var nunjucks = require('nunjucks');
var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();
var sass = require('node-sass');

var TEMPLATE_DIRECTORY = path.join(__dirname, 'templates');
var CSS_DIRECTORY = path.join(__dirname, 'public');

var SASS_DIRECTORY = "../scss/components";

var sassToCss = function(sassFile="app.scss") {
    var scss_filename = `${CSS_DIRECTORY}/${sassFile}`;
    return sass.renderSync({
        file: scss_filename
    }).css.toString();

}
console.log(sassToCss());


// looks for html in views folder relative to current working directory
var env = nunjucks.configure([TEMPLATE_DIRECTORY,CSS_DIRECTORY], {
    autoescape: true,
    cache: false,
    express: app,
    watch: true
});
env.addFilter('sassToCss', function(sassFile="app.scss") {
    var scss_filename = `${SASS_DIRECTORY}/${sassFile}`;
    return sass.renderSync({
        file: scss_filename
    }).css.toString();
});

app.set('views', TEMPLATE_DIRECTORY);
app.set('view engine', 'njk');

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));


var data = {
    css: 'app',
    name: 'foo'
} ;

router.all('/', function (req, res, next) {
  console.log('Someone made a request!');
  next();
});

router.get('/', function (req, res) {
  res.render('index', data);
});

router.get('/component/:key', (req, res) => {
    var key = req.params.key;
    console.log(key)
    res.render(key, { id: key });
});

app.listen(3030);
module.exports = app;
