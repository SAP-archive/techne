/**
	PUBLIC CSS
**/

var stylecss = document.createElement('link');
stylecss.rel = 'stylesheet';
stylecss.href = '../kss/public/style.css';


var technecss = document.createElement('link');
technecss.rel = 'stylesheet';
technecss.href = '../../dist/css/techne.min.css';


/**
	POLYMER DEFINITION
**/

var polymerjs = document.createElement('link');
polymerjs.rel = 'import';
polymerjs.href = '../../bower_components/polymer/polymer.html';





/**
	TECHNE COMPONENTS
**/

var technecomponents = document.createElement('link');
technecomponents.rel = 'import';
technecomponents.href = '../../src/components/techne_components.html';



var headTag = document.getElementsByTagName('head')[0]

var techneTag = document.getElementById('techneScript');

(function() {

	headTag.appendChild(stylecss);
	headTag.appendChild(technecss);
	headTag.appendChild(jqueryjs);
	headTag.appendChild(webcomponentsjs);
	headTag.appendChild(polymerjs);
	headTag.appendChild(jqueryjs);
	headTag.appendChild(bootstrapjs);
	headTag.appendChild(technecomponents);

	headTag.removeChild(techneTag);

})();
