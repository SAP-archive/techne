var path = require('path');
var fs = require('fs');

var through = require('through');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpless = require('gulp-less');
var kss = require('kss');
var marked = require('marked');
var handlebars = require('handlebars');
var PluginError = gutil.PluginError;
var File = gutil.File;
var _ = require('lodash');

var handlebarHelpers = require('./handlebarHelpers');

module.exports = function(opt) {
    'use strict';
    if (!opt) opt = {};
    if (!opt.templateDirectory) opt.templateDirectory = __dirname + '/node_modules/kss/lib/template';
    if (!opt.kssOpts) opt.kssOpts = {};

    var buffer = [];
    var firstFile = null;

//    / Is called for each file and writes all files to buffer /
    function bufferContents(file){
        if (file.isNull()) return; // ignore
        if (file.isStream()) return this.emit('error', new PluginError('gulp-kss',  'Streaming not supported'));

        if (!firstFile) firstFile = file;

        buffer.push(file.contents.toString('utf8'));
    }

//    / Is called when all files were added to buffer /
    function endStream(){
        var template = fs.readFileSync(path.join(opt.templateDirectory, 'index.html'), 'utf8');
        template = handlebars.compile(template);



        var self = this;

        kss.parse(buffer, opt.kssOpts, function (err, styleguide) {

            if (err) console.log('Error', error);

            var sections = styleguide.section('*.'),
                i, sectionCount = sections.length,
                sectionRoots = [], currentRoot,
                rootCount, childSections = [],
                dynamicpagelists = {};


            // get grouping of page types
            dynamicpagelists.pattern = _.filter( sections, function(o){return o.data.referenceType == 'pattern';}) ;
            dynamicpagelists.component = _.filter( sections, function(o){return o.data.referenceType == 'component';});
            dynamicpagelists.styleguide = _.filter( sections, function(o){return o.data.referenceType == 'styleguide';});


            _.forEach(dynamicpagelists, function(val, key){
                // Accumulate all of the sections' first indexes
                // in case they don't have a root element.
               
                for (i = 0; i < val.length; i += 1) {
                    console.log('inspection', val[i]);
                    currentRoot = val[i].reference().match(/[0-9]*\.?/)[0].replace('.', '');

                    console.log('cROOT', currentRoot );
                    // console.log('test', sections[i].data.referenceType);

                    if (!~sectionRoots.indexOf(currentRoot)) {
                        sectionRoots.push(currentRoot);
                    }
                }

                sectionRoots.sort();
                //console.log('sectionroots', sectionRoots);
                rootCount = sectionRoots.length;


                console.log(styleguide);
            });


            handlebarHelpers(handlebars, styleguide);

            // Generate HTML from all supplied markdown files
            if(opt.markDownDirectory)
            {

                var mdFiles = fs.readdirSync(opt.markDownDirectory);

                for( i = 0; i < mdFiles.length; i++)
                {
                    var markDownFile = opt.markDownDirectory + mdFiles[i];


                    gulp.src(markDownFile)
                        .pipe(through(function (file) {

                            var fName =  file.path.split('/').pop().split('.')[0];

                            var mdNavConfig = kss.getMarkdownNav(file);
                            mdNavConfig =  typeof mdNavConfig === 'object'? mdNavConfig: {};

                            
    

                            var content = template({
                                showLeftNav: ((mdNavConfig.hasOwnProperty('showLeftNav'))? mdNavConfig.showLeftNav: false ),
                                leftNavMobileOnly: ((mdNavConfig.hasOwnProperty('leftNavMobileOnly'))? mdNavConfig.leftNavMobileOnly: false ),
                                sectionData: ((mdNavConfig.hasOwnProperty('navigation'))? mdNavConfig.navigation: undefined),
                                pagename: fName,
                                styleguide: styleguide,
                                sectionRoots: sectionRoots,
                                sections: jsonSections(childSections),
                                rootNumber: 0,
                                argv: {},
                                overview:  marked(file.contents.toString('utf8'), 'utf8')
                            });

                            var joinedPath = path.join(firstFile.base, (fName+'.html'));


                            var file = new File({
                                cwd: firstFile.cwd,
                                base: firstFile.base,
                                path: joinedPath,
                                contents: new Buffer(content)
                            });

                            self.emit('data', file);
                        }));

                }

            }

            // Now, group all of the sections by their root
            // reference, and make a page for each.
            for (i = 0; i < rootCount; i += 1) {

                //console.log('sc', styleguide.section);
                childSections = styleguide.section(sectionRoots[i]+'.*');


                var fileRoot = parseInt(sectionRoots[i],10);



                var fileName = styleguide.data.section_refs[fileRoot].data.header.replace(/[^a-zA-Z0-9]/g,'-').replace(/-+/g,'-').replace(/\-$/, "");


                //update the childSections reference to point at the new file name links
                childSections.pageLink = fileName;

                //console.log('sections', jsonSections(childSections));

                var content = template({
                    showLeftNav: true, //show the nav bar for all sections
                    styleguide: styleguide,
                    sections: jsonSections(childSections),
                    rootNumber: sectionRoots[i],
                    sectionRoots: sectionRoots,
                    overview: false,
                    pagename: "components",
                    argv: {}
                });

                //console.log('var index' + i + ' = ', childSections);

                var joinedPath = path.join(firstFile.base,  fileName + '.html');


                var file = new File({
                    cwd: firstFile.cwd,
                    base: firstFile.base,
                    path: joinedPath,
                    contents: new Buffer(content)
                });

                self.emit('data', file);
            }

            // Copy template assets, less compilation added because default template uses it
            gulp.src(path.join(opt.templateDirectory, '/**/kss.less'))
                .pipe(gulpless())
                .pipe(through(function (file) {

                self.emit('data', file);
            }));

            gulp.src(path.join(opt.templateDirectory, '/**/*.js'))
                .pipe(through(function (file) {

                self.emit('data', file);
            }));

        });

    }

    function jsonSections(sections) {

        return sections.map(function(section) {

            //console.log('sectionref', section.reference());
            return {
                header: section.header(),
                description: section.description(),
                reference: section.reference(),
                depth: section.data.refDepth,
                deprecated: section.deprecated(),
                experimental: section.experimental(),
                modifiers: jsonModifiers(section.modifiers())
            };
        });
    }

    // Convert an array of `KssModifier` instances to a JSON object.
    function jsonModifiers (modifiers) {
        return modifiers.map(function(modifier) {
            return {
                name: modifier.name(),
                description: modifier.description(),
                className: modifier.className()
            };
        });
    }

    return through(bufferContents, endStream);
};
