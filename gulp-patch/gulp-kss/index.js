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

    // Is called when all files were added to buffer /
    function endStream(){



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
                sectionRoots = [];
            
                // Accumulate all of the sections' first indexes
                // in case they don't have a root element.
               
                for (i = 0; i < val.length; i += 1) {
                    currentRoot = val[i].reference().match(/[0-9]*\.?/)[0].replace('.', '');

                    if (!~sectionRoots.indexOf(currentRoot)) {
                        sectionRoots.push(currentRoot);
                    }
                }
                
                //set the page type of each section so we have access to it in the sections #eachSection handlebar exception
                _.forEach(dynamicpagelists[key], function(val){
                    val.data.pagetype = key;
                });

                sectionRoots.sort();

                rootCount = sectionRoots.length;

                handlebarHelpers(handlebars, styleguide);


                var template = fs.readFileSync(path.join(opt.templateDirectory, 'elements.html'), 'utf8');
                template = handlebars.compile(template);
                // Now, group all of the sections by their root
                // reference, and make a page for each.

                var mainFiles = styleguide.section('x', dynamicpagelists[key]);
                for (i = 0; i < mainFiles.length; i += 1) {

                    
                    childSections = styleguide.section(((i+1)+'.*'), dynamicpagelists[key]);

                    var fileRoot = parseInt(sectionRoots[i],10);
                    var fileName = mainFiles[i].data.header.replace(/[^a-zA-Z0-9]/g,'-').replace(/-+/g,'-').replace(/\-$/, "");


                    //update the childSections reference to point at the new file name links
                    childSections.pageLink = fileName;

                    var content = template({
                        showLeftNav:true,
                        styleguide: styleguide,
                        childSections: jsonSections(childSections),
                        sections: (dynamicpagelists[key]),
                        rootNumber: (i + 1),
                        sectionRoots: sectionRoots,
                        overview: false,
                        pagename: "components",
                        pagetype: key,
                        argv: {}
                    });

                    var joinedPath = path.join(firstFile.base + '/' + key + 's' ,  fileName + '.html');

                    var file = new File({
                        cwd: firstFile.cwd,
                        base: firstFile.base,
                        path: joinedPath,
                        contents: new Buffer(content)
                    });

                    self.emit('data', file);
                }

            });



            // Generate HTML from all supplied markdown files
            if(opt.markDownDirectory)
            {

                var template = fs.readFileSync(path.join(opt.templateDirectory , 'index.html'), 'utf8');
                template = handlebars.compile(template);
                var mdFiles = fs.readdirSync(opt.markDownDirectory+ '/main/');
                
                // Accumulate all of the sections' first indexes
                // in case they don't have a root element.
                for (i = 0; i < sectionCount; i += 1) {
                    currentRoot = sections[i].reference().match(/[0-9]*\.?/)[0].replace('.', '');

                    if (!~sectionRoots.indexOf(currentRoot)) {
                        sectionRoots.push(currentRoot);
                    }
                }

                sectionRoots.sort();
                childSections = [];

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



                var template = fs.readFileSync(path.join(opt.templateDirectory , 'starterpages.html'), 'utf8');
                template = handlebars.compile(template);
                var mdFiles = fs.readdirSync(opt.markDownDirectory+ '/starterpages/');

                console.log(mdFiles);
                
                // Accumulate all of the sections' first indexes
                // in case they don't have a root element.
                for (i = 0; i < sectionCount; i += 1) {
                    currentRoot = sections[i].reference().match(/[0-9]*\.?/)[0].replace('.', '');

                    if (!~sectionRoots.indexOf(currentRoot)) {
                        sectionRoots.push(currentRoot);
                    }
                }

                sectionRoots.sort();
                childSections = [];

                for( i = 0; i < mdFiles.length; i++)
                {
                    var markDownFile = (opt.markDownDirectory +'/starterpages/') + mdFiles[i];

                    console.log('markdownfile', markDownFile);


                    gulp.src(markDownFile)
                        .pipe(through(function (file) {

                            var fName =  file.path.split('/').pop().split('.')[0];

                            console.log(fName);

                            var mdNavConfig = kss.getMarkdownNav(file);
                            mdNavConfig =  typeof mdNavConfig === 'object'? mdNavConfig: {};


                            var content = template({
                                showLeftNav: ((mdNavConfig.hasOwnProperty('showLeftNav'))? mdNavConfig.showLeftNav: false ),
                                leftNavMobileOnly: ((mdNavConfig.hasOwnProperty('leftNavMobileOnly'))? mdNavConfig.leftNavMobileOnly: false ),
                                starterpagenav: ((mdNavConfig.hasOwnProperty('navigation'))? mdNavConfig.navigation: undefined),
                                pagename: fName,
                                pagetype: 'starterpages',
                                styleguide: styleguide,
                                sectionRoots: sectionRoots,
                                sections: jsonSections(childSections),
                                rootNumber: 1,
                                argv: {},
                                overview:  marked(file.contents.toString('utf8'), 'utf8')
                            });

                            var joinedPath = path.join(firstFile.base + "/starterpages/", (fName+'.html'));


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
