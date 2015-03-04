/**
	 CSS
**/
var css = document.createElement('link');
css.rel = 'stylesheet';
css.href = './bower_components/techne-components/dist/css/techne.css';




/**
	TECHNE COMPONENTS
**/

var html = document.createElement('link');
html.rel = 'import';
html.href = './bower_components/techne-components/html/techne.html';



var headTag = document.getElementsByTagName('head')[0]

var techneTag = document.getElementById('techneScript');

(function() {

	headTag.appendChild(css);
	headTag.appendChild(html);

})();
