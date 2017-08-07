var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

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
