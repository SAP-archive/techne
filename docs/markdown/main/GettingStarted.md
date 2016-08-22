<!--SIDENAVCONFIG
    {
        "showLeftNav": true,
        "navigation": [
            {
                "text": "Getting Started",
                "id": "#getting-started"
            },
             {
               "text": "Starter Pages",
               "id": "#starter-pages"
             },
             {
               "text": "Design Resources",
               "id": "#design-resources"
             },
             {
               "text": "Contribute",
               "id": "#contribute"
             },
             {
               "text": "Troubleshooting",
               "id": "#troubleshooting"
             }
        ]
    }
-->
<div class="hyDownloadPage">
    <section id="getting-started">
        <div class="row">
            <div class="col-xs-12 col-md-9">
                <h2>Get Started</h2>
                <p>We have a few options for you to start designing and building with SAP Hybris Techné fast.</p>
                <h3 id="installingBower" class="dosis-semibold">Install with Bower</h3>
                <p>Compiled and minified CSS, Source LESS, JavaScript, and fonts, but no documentation.</p>
                <p>
                    <strong>
                        <a href="https://libraries.io/bower/hyTechne" target="_blank">INSTALL TECHNE WITH BOWER</a>
                    </strong>
                </p>
                <p>
                    The recommended way to integrate Techné into your project is by installing all resources with bower. Bower is a package manager for the web, which makes it easy for you to keep track of your project dependencies. If you have bower already installed simply run <code>bower install hyTechne</code>
                </p>
                <p>  
                    This will provide you source files ansd precompiled resources at the same time, fitting for each skill level. If not, bower requires you first to install nodejs which includes the node package modules (NPM) package manager. After successful installation run:
                </p>
                <p>
                    <code>npm install -g bower</code> and run <code>bower install hyTechne</code> afterwards, to get Techné.
                </p>
                <hr>
                <h3>We’re on GitHub <img src="/images/git-icon.png" alt="GitHub"></h3>
                <p>Bundle including Default files and all the source files (LESS/JS) not yet compiled.</p>
                <p>
                    <strong>
                        <a href="https://github.com/SAP/techne" target="_blank">VIEW SOURCE ON GITHUB</a>
                    </strong>
                </p>
                <hr>
                <h3>Download Pre-Bundled Zip</h3>
                <p>Precompiled and minified version of Techné ready to grab and use.</p>
                <p>
                    <strong>
                        <a href="https://github.com/SAP/techne/releases" target="_blank">DOWNLOAD THE .ZIP</a>
                    </strong>
                </p>
                <hr>
                <h3>NPM Install</h3>
                <p>We don't currently support a NPM install.</p>
            </div>
        </div>
    </section>
    <hr class="section-seperator">
    <section id="starter-pages">
        <div class="row">
            <div class="col-xs-12 col-md-9">
                <h2>Starter Pages</h2>
                <p>
                    In order to make your UI design and development work even faster and have better consistency across Builder UI Modules we’ve introduced some generic page layout starters you can use and customize as needed. <a href="http://localhost:8080/starterpages/index.html">Preview examples of the Starter Pages.</a>
                </p>
                <p>
                    <strong>
                        <a href="https://github.com/SAP/techne/tree/develop/docs/kss/starterpages" target="_blank">STARTER PAGES ON GITHUB</a>
                    </strong>
                </p>
            </div>
        </div>
    </section>
    <hr class="section-seperator">
    <section id="design-resources">
        <div class="row">
            <div class="col-xs-12 col-md-9">
                <h2>Design Resources</h2>
                <h3>Axure Libraries and Masters</h3>
                <p>Download our Axure RP library and hit the ground running... The library offers page layouts and specifications</p>
                <div class="row">
                    <div class="col-md-4">
                        <p>
                            <strong>
                                <a href="public/downloads/Techne_AxureLibrary_v1_3_1.rplib-1.zip" >AXURE RP LIBRARY</a>
                            </strong>
                        </p>
                    </div>
                </div>
                <!---<h3>Icons</h3>
                <p>
                    Download the full icon set. Each icon is available as SVG.
                </p>
                <p>
                    <strong>
                        <a href="#" >DOWNLOAD .SVG</a>
                    </strong>
                </p>--->
                <h3>Color Swatches</h3>
                <p>
                    Download the full set of application color swatches - primary colors as well as secondary colors
                </p>
                <p>
                    <strong>
                        <a href="public/downloads/teche_colors.aco">DOWNLOAD COLOR SWATCHES</a>
                    </strong>
                </p>
                <h3>Fonts</h3>
                <p>
                    Download Dosis and Open Sans font families from the link below or find it included in our GitHub project.
                </p>
                <div class="row">
                    <div class="col-md-4">
                        <p>
                            <strong>
                                <a href="https://fonts.google.com/specimen/Dosis?query=dosis" target="_blank">DOWNLOAD DOSIS FONT</a>
                            </strong>
                        </p>
                    </div>
                    <div class="col-md-6">
                        <p>
                            <strong>
                                <a href="https://fonts.google.com/specimen/Open+Sans?query=open+sans" target="_blank">DOWNLOAD OPEN SANS FONT</a>
                            </strong>
                        </p>                        
                    </div>
                </div>
            </div>  
        </div>
    </section>
    <hr class="section-seperator">
    <section id="contribute">
        <div class="row">
            <div class="col-xs-12 col-md-9">
                <h2>Contribute back to Techné</h2>
                <p>
                    So you wrote a new component or fixed a bug in Techné? You want to contribute? That’s actually super easy. Just pull our repository from <a href="https://github.com/SAP/techne" target="_blank">github</a>, make your changes in a feature-branch, push it to origin and create a pull-request to our develop brach.
                </p>
                <p>
                    <strong>
                        <a href="https://github.com/SAP/techne" target="_blank">FIND US ON GITHUB</a>
                    </strong>
                </p>
                <hr>
                <h3 class="dosis-semibold">How to build Techné Documentation locally</h3>
                <p>
                    Techné is using Gulp as build system.
                </p>
                <h3>Installing Gulp</h3>
                <p>
                    Gulp requires you first to install nodejs which includes the node package modules (NPM) package manager. Then you can simply run npm install <code>--global gulp</code> <br>
                    (Note the —global, otherwise you would not be able to run gulp systemwide)
                </p>
                <div class="alert alert-getting-started"><strong>IMPORTANT:</strong> The variable <code>@bower-path</code> is not defined per default. It is required that you define this variable in your own stylesheet and point to your bower_components folder. (No trailing slash).<br/><br/>Example:<code>@bower-path: '../../bower_components'; </code></div>
                <h3>Available Commands</h3>
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
                </div>
            </div>
        </div>
    </section>
    <hr class="section-seperator">
    <section id="troubleshooting">
        <div class="row">
            <div class="col-xs-12 col-md-9">
                <h2 class="dosis-semibold">Troubleshooting</h2>
                <p>Should you encounter problems with installing dependencies or running Grunt commands, first delete the /node_modules/ directory generated by npm. Then, rerun npm install.</p>
                <p>Still having problems or have questions about Techné? <a href="https://experts.hybris.com/topics/techne.html" target="_blank">Ask Hybris Experts</a></p>
            </div>
        </div>
    </section>
</div>
