<div id="visual-system" class="hyGettingStartedPage">
    <div class="container-fluid hyDownloads" >
        <div class="page-header  customFonts">
            <p class="text-center">We have a few options for you to start designing and building with hybris techné fast.</p>
        </div>
        <!--.page-header  customFonts-->
        <div class="row column definitions customFonts downloadOptions">
            <div class="col-xs-12 col-sm-4 text-center">
                <img src="images/techne_Parrot.png"></img>
                <h2 class="dosis-semibold">Bower</h2>
                <p class="dosis-book">Compiled and minified CSS, Source LESS,  JavaScript, and fonts, but no documentation.</p>
                <a class="btn btn-warning dosis-book" href="https://libraries.io/bower/hyTechne">INSTALL WITH BOWER</a>
            </div>
            <!--.col-xs-12 col-sm-4 text-center-->
            <div class="col-xs-12 col-sm-4 text-center">
                <img src="images/techne_Zip.png"></img>
                <h2 class="dosis-semibold">Pre-Bundled Download</h2>
                <p class="dosis-book">Precompiled and minified version of techné ready to grab and use.</p>
                <a class="btn btn-warning dosis-book" href="https://github.com/hybris/techne/tree/master/docs/kss/public/release-archive" target=“_new”/>DOWNLOAD.ZIP</a>
            </div>
            <!--.col-xs-12 col-sm-4 text-center-->
            <div class="col-xs-12 col-sm-4 text-center">
                <img src="images/techne_Cat.png"></img>
                <h2 class="dosis-semibold">Source Code</h2>
                <p class="dosis-book">Bundle including Default files and all the source files (LESS/JS) not yet compiled.</p>
                <a class="btn btn-warning dosis-book" href="https://github.com/hybris/techne">VIEW SOURCE AT GITHUB</a>
            </div>
            <!--.col-xs-12 col-sm-4 text-center-->
        </div>
        <!--.row column definitions customFonts downloadOptions-->
    </div>
    <!--.col-xs-12 col-sm-4 text-center-->
    <div class="hyInstall">
        <div class="row">
            <div id="hyInstallContainer" class="col-xs-12 col-md-9">
                <h2 id="installingBower" class="dosis-semibold">Installing with bower</h2>
                <p>
                    The recommended way to integrate techné into your project is by installing all resources with bower. Bower is a package manager for the web, which makes it easy for you to keep track of your project dependencies. If you have bower already installed simply run
                </p>
                <code>bower install hyTechne</code>
                <p>  
                    This will provide you source files ansd precompiled resources at the same time, fitting for each skill level.
                    If not, bower requires you first to install nodejs which includes the node package modules (NPM) package manager. After successful installation run:
                </p>
                <code>npm install -g bower</code>
                <p>and run</p>
                <code>bower install hyTechne</code> 
                <p>afterwards, to get techné.</p>
            </div>
            <!--.col-xs-12-->
        </div>
        <!--.row-->
        <div class="row">
            <div class="col-xs-12">
                <hr>
                </hr>
            </div>
            <!--.col-xs-12-->
        </div>
        <!--.row-->
        <div class="row">
            <div id="hyInstallContainer" class="col-xs-12 col-md-9">
                <h2 class="dosis-semibold">How to build techné locally</h2>
                <p>
                    techné is using Gulp as build system. 
                </p>
                <h3>INSTALLING GULP</h3>
                <p>
                    Gulp requires you first to install nodejs which includes the node package modules (NPM) package manager. Then you can simply run 
                </p>
                <code>npm install --global gulp</code>
                <p>(Note the —global, otherwise you would not be able to run gulp systemwide)</p>
                <h3>AVAILABLE COMMANDS</h3>
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <dl>
                            <dt><code>gulp</code></dt>
                            <dd>Default task that builds all resources (js/less/..) and starts a local server with running watch-task</dd>
                            <dt><code>gulp dist</code></dt>
                            <dd>Create a prebuilt bundle including zip file for distribution</dd>
                            <dt><code>gulp build</code></dt>
                            <dd>Build all resources including documentation</dd>
                            <dt><code>gulp watch</code></dt>
                            <dd>Listen for file changes in src folder for compilation</dd>
                        </dl>
                    </div>
                    <!--.col-xs-12 col-md-6-->
                    <div class="col-xs-12 col-md-6">
                        <dl>
                            <dt><code>gulp styleguide</code></dt>
                            <dd>Build docs</dd>
                            <dt><code>gulp connect</code></dt>
                            <dd>start server</dd>
                            <dt><code>gulp setpath</code></dt>
                            <dd>Generate _resource-paths.less file based on settings in config.json to handle file paths correctly.</dd>
                        </dl>
                    </div>
                    <!--.col-xs-12 col-md-6-->
                </div>
                <!--.row-->
            </div>
            <!--.col-xs-12-->
        </div>
        <!--.row-->
        <div class="row">
            <div class="col-xs-12">
                <hr>
                </hr>
            </div>
            <!--.col-xs-12-->
        </div>
        <!--.row-->
        <div class="row">
            <div id="hyInstallContainer" class="col-xs-12 col-md-9">
                <h2 class="dosis-semibold">How to contribute</h2>
                <p>So you wrote a new component or fixed a bug in techné? You want to contribute? That’s actually super easy. Just pull our repository from github, make your changes in a feature-branch, push it to origin and create a pull-request to our develop brach.
                </p>
                <a href="https://github.com/hybris/techne">techné on Github</a>
            </div>
            <!--.col-xs-12-->
        </div>
        <!--.row-->
        <div class="row">
            <div class="col-xs-12">
                <hr>
                </hr>
            </div>
            <!--.col-xs-12-->
        </div>
        <!--.row-->
        <div class="row">
            <div id="hyInstallContainer" class="col-xs-12 col-md-9">
                <h2 class="dosis-semibold">Troubleshooting</h2>
                <p>Should you encounter problems with installing dependencies or running Grunt commands, first delete the /node_modules/ directory generated by npm. Then, rerun npm install.</p>
            </div>
            <!--.col-xs-12-->
        </div>
        <!--.row-->
    </div>
    <!--.hyInstall-->
</div>
<!--.hyGettingStarted-->