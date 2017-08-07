const express = require('express');
const expressNunjucks = require('express-nunjucks');
const app = express();
const isDev = app.get('env') === 'development';

app.set('views', __dirname + '/templates');
console.log(__dirname + '/templates')
const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});
var data = {
    username: 'Andy',
    lastName: 'Neale'
} ;

app.get('/', (req, res) => {
    res.render('index',data);
});
app.get('/component/:key', (req, res) => {
    var key = req.params.key;
    console.log(key)
    res.render('index',data);
});

app.listen(3000);
