<!--SIDENAVCONFIG
    {
    	"showLeftNav": true,
    	"navigation": [
    		{
    			"text": "Spirit & Vision",
    			"id": "#guidelines-spirit-vision"
    		},
         {
           "text": "Design Principles",
           "id": "#guidelines-design-principles"
         },
         {
           "text": "Navigation",
           "id": "#guidelines-navigation"
         },
         {
           "text": "Visual System",
           "id": "#guidelines-visual-system"
         },
         {
           "text": "Tone & Voice",
           "id": "#guidelines-tone-voice"
         },
	 {
	   "text": "Errors & Notifications",
	   "id": "#guidelines-errors"
	 },
	 {
	   "text": "System Errors",
	   "id": "#guidelines-system-errors"
	 },
         {
           "text": "Accessibility",
           "id": "#guidelines-accessibility"
         }
       ]
    }
    -->
<div class="hyGuidelinesPage container-fluid" >
    <section id="guidelines-spirit-vision" class="page">
        <h2>Spirit &amp; Vision</h2>
        <p>We like to think we know what users want, and that’s what we design to. Covering both business users and consumers,  we have controls, patterns, layouts and guidelines, but those tools need to come together to meet the Expectations, Values, Motivations and avoid the Deal Breakers so that the experience is optimized for the individual user and not the technologies used. </p>
        <div class="hybris-guy-bg">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <h3>Expectations</h3>
                    <ul>
                        <li>Convenience</li>
                        <li>Consistency</li>
                        <li>Predictive</li>
                        <li>Customizable</li>
                        <li>Security</li>
                        <li>Ease of Use</li>
                        <li>Error avoidance</li>
                        <li>Device-optimized</li>
                        <li>SoLoMo</li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <h3>Motivations</h3>
                    <ul>
                        <li>Fun/Entertainment</li>
                        <li>Self Expression</li>
                        <li>Discovery</li>
                        <li>Preparation</li>
                        <li>Productivity</li>
                        <li>Shopping</li>
                        <li>Socializing</li>
                        <li>Context</li>
                    </ul>
                    <span class="visible-xs"><br><br></span>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <h3>Values</h3>
                    <ul>
                        <li>Comfort</li>
                        <li>Freedom of movement</li>
                        <li>Flexibility</li>
                        <li>Collaboration</li>
                        <li>Error Recovery</li>
                        <li>Efficiency</li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <h3>Deal Breakers</h3>
                    <ul>
                        <li>Confusion</li>
                        <li>Slowness</li>
                        <li>Errors</li>
                        <li>Insecurity</li>
                        <li>Complexity</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="guidelines-design-principles" class="page">
        <h2>Design Principles</h2>
        <div class="row text-left">
            <div class="col-md-6">
                <p><strong>Mobile First:</strong>  allows people to complete a task when they want, where they want, how they want; surfacing the most important actions, tasks, and information first. It also can mean an adaptive experience based on the persona an task at-hand.  It’s important to remember that ‘mobile first’ as a design principle doesn’t automatically mean responsive, but in most cases for web applications a responsive approach is recommended.</p>
                <p><strong>Personalized:</strong> allows people to configure and personalize the experience in relevant way, intuitive to them.  They are given a house and the means to furnish it as they like rather than a ‘furnished apartment’ they were handed without any say or opportunity to make it their own.</p>
                <p><strong>Flexible:</strong> allow people to work within the system they way they want.  Allow for frequent and infrequent task completion paths; linear and nonlinear ways of working.</p>
            </div>
            <div class="col-md-6">
                <p><strong>Predictive &amp; Automated:</strong>  as people spend more time in the system, the system should respond by surfacing frequent tasks, workspaces and information most used without explicit ask or action.  As many tasks should be automated as reasonably possible to make people’s working lives easier.</p>
                <p><strong>Simple:</strong> A single piece of information or task should be no more than three clicks away from any other piece of information or task. Period.  If a flow isn’t allowing for this criteria, the flow needs re-designing.</p>
                <p><strong>Fun:</strong> “Wow that was easy.”  “I may not like the task but I love this interface”</p>
                <p><strong>Above All, User-Centric:</strong> follow user-centered design processes. Demand design principles are in place as part of any MVP criteria.</p>
            </div>
        </div>
    </section>
    <section id="guidelines-navigation" class="page">
        <h2>Navigation and Parent/Child Panels</h2>
        <h3>YaaS IO uses an off-canvas navigation pattern to maximize screen real estate.</h3>
        <p>A “parent/child” relationship is used to control the views in the panels. The “parent” panel should contain all navigation items and the ‘child’ panel should contain the content or tooling meant for interaction.</p>
        <p>It is not recommended additional panels are created or nested within the existing parent/child structure as this will put the overall flow and focus of content at risk.</p>
        <h3>Mobile Navigation</h3>
        <p>At the mobile inflection point menu is closed by default.</p>
        <div class="row">
            <div class="col-md-4 hidden-sm hidden-xs text-center">
                <img src="images/navigation-mobile-closed.png" alt="" class="img-responsive"> <br> Default View - Collapsed menu
            </div>
            <span class="visible-xs"><br><br></span>
            <div class="col-md-4 col-sm-6 text-center">
                <img src="images/navigation-mobile-open.png" alt="" class="img-responsive"> <br> Menu expanded
            </div>
	     <span class="visible-xs"><br><br><br><br></span>
            <div class="col-md-4 col-sm-6 text-center">
                <img src="images/navigation-mobile-open-2.png" alt="" class="img-responsive"> <br>Yaas Menu expanded
            </div>
        </div>
        <hr>
        <h3>Tablet Navigation</h3>
        <p>At the tablet inflection point menu is closed by default. </p>
        <div class="row">
            <div class="col-md-4 hidden-sm hidden-xs text-center">
                <img src="images/navigation-tablet-closed.png" alt="" class="img-responsive"> <br> Default View - Collapsed menu
            </div>
            <span class="visible-xs"><br><br></span>
            <div class="col-md-4 col-sm-6 text-center">
                <img src="images/navigation-tablet-open.png" alt="" class="img-responsive"> <br> Menu expanded
            </div>
	    <span class="visible-xs"><br><br></span>
            <div class="col-md-4 col-sm-6 text-center">
                <img src="images/navigation-tablet-OPEN-2.png" alt="" class="img-responsive"> <br>Yaas Menu expanded
            </div>
        </div>
        <hr>
        <h3>Desktop Navigation</h3>
        <p>At the desktop inflection point menu is open by default with a clear indication of how to close to take full advantage of the available screen real estate. </p>
        <img src="images/navigation-desktop.png" alt="" class="img-responsive">
    </section>
    <!-- load visual system -->
    <section id="guidelines-visual-system" class="page">
        <h2>Visual System</h2>
        <h3>Main Colors</h3>
        <p>The primary application colors are neutralized to allow the sparse use of the primary blue and content to take center stage.</p>
        <div class="row">
            <div class="row text-center">
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #E0E9F0;">&#x2B22;</span>
                    </div>
                    <p class="no-bottom-margin">Screen Background</p>
                    <h4>#E0E9F0</h4>
                </div>
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #FFFFFF;">&#x2B22;</span>
                    </div>
                    <p class="no-bottom-margin">Content Background</p>
                    <h4>#FFFFFF</h4>
                </div>
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                         <span style="color: #313440;">&#x2B22;</span>
                    </div>
                    <p class="no-bottom-margin">Typography (Main)</p>
                    <h4>#313440</h4>
                </div>
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #8A8FA1;">&#x2B22;</span>
                    </div>
                    <p class="no-bottom-margin">Typography (Secondary)</p>
                    <h4>#8A8FA1</h4>
                </div>
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #0486E0;">&#x2B22;</span>
                    </div>
                    <p class="no-bottom-margin">Text Link Color</p>
                    <h4>#0486E0</h4>
                </div>
            </div>
        </div>
        <div class="usage visualSystemSpacing">
            <h4>Usage Guidelines</h4>
            <p><b>Screen Background:</b> use app-wide as the background color</p>
            <p><b>Content Background:</b> use app-wide as background for any content block. Provides contrast between screen background and content background.</p>
            <p><b>Typography (Main):</b> use app-wide for body copy. Provides for high-contrast on white background.</p>
            <p><b>Typography (Secondary):</b> use app-wide for Primary headings/values.</p>
            <p><b>Text Link Color:</b> use app-wide for links in any context.</p>
        </div>
        <h3 class="visualSystemSpacing">Alerts, Errors &amp; Notifications</h3>
        <p>All alerts within the application are color coded to emphasize the level of urgency.  In some cases alerts will allow for dismissal and in other cases alerts must be acted upon in order to complete a task.  The color coded system should allow at-a-glance understanding of allowable actions.</p>
        <p>These colors are desaturated to work better with the primary application colors.</p>
        <div class="row text-center">
            <div class="col-md-5ths col-xs-6">
                <div class="hexagonVector">
                    <span style="color: #d3dbe6;">&#x2B22;</span>
                </div>
                <p class="no-bottom-margin">Help Information</p>
                <h4>#D3DBE6</h4>
            </div>
            <div class="col-md-5ths col-xs-6">
                <div class="hexagonVector">
                    <span style="color: #233243;">&#x2B22;</span>
                </div>
                <p class="no-bottom-margin">Well Done! Success!</p>
                <h4>#233243</h4>
            </div>
            <div class="col-md-5ths col-xs-6">
                <div class="hexagonVector">
                    <span style="color: #ff3b30;">&#x2B22;</span>
                </div>
                <p class="no-bottom-margin">Oh Snap! Try Again.</p>
                <h4>#FF3B30</h4>
            </div>
        </div>
        <div class="row visualSystemSpacing">
            <div class="col-md-9 alertSpacing">
                <div class="alert alert-success alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    Status notification can go here and look like this...
                </div>
                <div class="alert alert-danger">
                    Error notification can go here and look like this...
                </div>
            </div>
        </div>
        <div class="row visualSystemSpacing typographyAlignment">
            <hr />
        </div>
        <div class="row visualSystemSpacing">
            <div class="col-xs-12 col-md-12">
                <h3>Typography</h3>
                <p>Good typography adds personality to an application, and can help set tone in the absence of visual elements. hybris and YaaS IO uses <strong><a href="https://www.google.com/fonts/specimen/Dosis" target="_blank">Dosis</a></strong> to create a friendly and inviting environment.</p>
            </div>
        </div>
        <div class="row">
            <div class="row text-center type-face">
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #FFFFFF;">&#x2B22;</span>
                        <p class="dosis-light">Aa</p>
                    </div>
                    <p>Light</p>
                </div>
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #FFFFFF;">&#x2B22;</span>
                        <p class="dosis-book">Aa</p>
                    </div>
                    <p>Book</p>
                </div>
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #FFFFFF;">&#x2B22;</span>
                        <p class="dosis-medium">Aa</p>
                    </div>
                    <p>Medium</p>
                </div>
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #FFFFFF;">&#x2B22;</span>
                        <p class="dosis-semibold">Aa</p>
                    </div>
                    <p>SemiBold</p>
                </div>
            </div>
        </div>
        <div class="row visualSystemSpacing typographyAlignment">
            <div class="usage">
                <h4 class="dosis-semibold">Usage Guidelines</h4>
                <p><b>Light:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p><b>Book:</b> Use 'Dosis Book' app-wide for body copy. The font size for body copy is 14pt, app-wide.</p>
                <p><b>Medium:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p><b>Semibold:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
        </div>
        <div class="row exampleSpacing">
            <div class="col-md-4 usage visualSystemSpacing">
                <h4 class="dosis-semibold">Dosis Light</h4>
                <p class="dosis-light size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-light size-26">ABCDEFGHIJKLMNOPQURSTUVWXYZ</p>
                <p class="dosis-light size-26">1234567890!@£$%^&amp;&lowast;()&#95;&#43;</p>
            </div>
            <div class="col-md-offset-3 col-md-4 usage visualSystemSpacing">
                <h4 class="dosis-semibold">Dosis Book</h4>
                <p class="dosis-book size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-book size-26">ABCDEFGHIJKLMNOPQURSTUVWXYZ</p>
                <p class="dosis-book size-26">1234567890!@£$%^&amp;&lowast;()&#95;&#43;</p>
            </div>
        </div>
        <div class="row exampleSpacing">
            <div class="col-md-4 usage visualSystemSpacing">
                <h4 class="dosis-semibold">Dosis Medium</h4>
                <p class="dosis-medium size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-medium size-26">ABCDEFGHIJKLMNOPQURSTUVWXYZ</p>
                <p class="dosis-medium size-26">1234567890!@£$%^&amp;&lowast;()&#95;&#43;</p>
            </div>
            <div class="col-md-offset-3 col-md-4 usage visualSystemSpacing">
                <h4 class="dosis-semibold">Dosis SemiBold</h4>
                <p class="dosis-semibold size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-semibold size-26">ABCDEFGHIJKLMNOPQURSTUVWXYZ</p>
                <p class="dosis-semibold size-26">1234567890!@£$%^&amp;&lowast;()&#95;&#43;</p>
            </div>
        </div>
        <div class="row visualSystemSpacing typographyAlignment">
            <hr />
            <div class="imageCenter">
                <a href="https://www.google.com/fonts/specimen/Dosis" target="_blank">
                    <img src="images/ico_type.png" alt="Download Typeface" id="downloadTypeface"/>
                </a>
                <h5>DOWNLOAD TYPEFACE</h5>
            </div>
        </div>
        <div class="row visualSystemSpacing">
            <div class="col-xs-12 col-md-12">
                <h3>Header Styles</h3>
            </div>
        </div>
        <div class="row">
            <div class="row text-center">
                <div class="col-md-5ths col-xs-6">
                   <div class="hexagonVector">
                        <span style="color: #FFFFFF;">&#x2B22;</span>
                        <p class="dosis-light">H1</p>
                    </div>
                    <p class="dosis-light">Dosis Light <br> 30pt</p>
                </div>
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #FFFFFF;">&#x2B22;</span>
                        <p class="dosis-semibold">H2</p>
                    </div>
                    <p class="dosis-semibold">Dosis SemiBold <br> 22pt</p>
                </div>
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #FFFFFF;">&#x2B22;</span>
                        <p class="dosis-semibold">H3</p>
                    </div>
                    <p class="dosis-semibold">Dosis SemiBold <br> 19pt </p>
                </div>
                <div class="col-md-5ths col-xs-6">
                   <div class="hexagonVector">
                        <span style="color: #FFFFFF;">&#x2B22;</span>
                        <p class="dosis-medium">H4</p>
                    </div>
                    <p class="dosis-medium">Dosis Medium <br> 19pt</p>
                </div>
                <div class="col-md-5ths col-xs-6">
                    <div class="hexagonVector">
                        <span style="color: #FFFFFF;">&#x2B22;</span>
                        <p class="dosis-semibold">H5</p>
                    </div>
                    <p class="dosis-semibold">Dosis SemiBold <br> 14pt</p>
                </div>
            </div>
        </div>
        <div class="row visualSystemSpacing">
            <div class="col-lg-8 col-md-8 col-xs-12 col-lg-offset-2 col-md-offset-2">
                <div id="header-example-carousel" class="carousel slide header-example-carousel">
                    <!-- Indicators -->
                    <div class="carousel-inner">
                    <ol class="carousel-indicators">
                        <li data-target="#header-example-carousel" data-slide-to="0" class="active">H1</li>
                        <li data-target="#header-example-carousel" data-slide-to="1">H2</li>
                        <li data-target="#header-example-carousel" data-slide-to="2">H3</li>
                    </ol>
                    <!-- Wrapper for slides -->
                        <div class="item active">
                            <img src="images/H1.png" alt="..." >
                            <!-- Hidden For Now
                            <div class="carousel-caption">
                                <h2>H1 Example</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            -->
                        </div>
                        <div class="item">
                            <img src="images/H2.png" alt="..." >
                            <!-- Hidden For Now
                            <div class="carousel-caption">
                                <h2>H2 Example</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            -->
                        </div>
                        <div class="item">
                            <img src="images/H3.png" alt="...">
                            <!-- Hidden For Now
                            <div class="carousel-caption">
                                <h2>H3 Example</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="seperator">
            <pre class="code-snippet">
                <!-- snippet start -->
&lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col-lg-8 col-md-8 col-xs-12 col-lg-offset-2 col-md-offset-2&quot;&gt;
        &lt;div id=&quot;header-example-carousel&quot; class=&quot;carousel slide header-example-carousel&quot; data-ride=&quot;carousel&quot;&gt;
        &lt;!-- Indicators --&gt;
            &lt;ol class=&quot;carousel-indicators&quot;&gt;
                &lt;li data-target=&quot;#header-example-carousel&quot; data-slide-to=&quot;0&quot; class=&quot;active&quot;&gt;H1&lt;/li&gt;
                &lt;li data-target=&quot;#header-example-carousel&quot; data-slide-to=&quot;1&quot;&gt;H2&lt;/li&gt;
                &lt;li data-target=&quot;#header-example-carousel&quot; data-slide-to=&quot;2&quot;&gt;H3&lt;/li&gt;
            &lt;/ol&gt;
         &lt;!-- Wrapper for slides --&gt;
            &lt;div class=&quot;carousel-inner carouselSpacing&quot;&gt;
                &lt;div class=&quot;item active&quot;&gt;
                    &lt;img src=&quot;images/h1-example.png&quot; alt=&quot;...&quot; &gt;
                    &lt;div class=&quot;carousel-caption&quot;&gt;
                        &lt;h2&gt;H1 Example&lt;/h2&gt;
                        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;item&quot;&gt;
                    &lt;img src=&quot;images/h2-example.png&quot; alt=&quot;...&quot; &gt;
                    &lt;div class=&quot;carousel-caption&quot;&gt;
                        &lt;h2&gt;H2 Example&lt;/h2&gt;
                        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;item&quot;&gt;
                    &lt;img src=&quot;images/h1-example.png&quot; alt=&quot;...&quot;&gt;
                    &lt;div class=&quot;carousel-caption&quot;&gt;
                        &lt;h2&gt;H3 Example&lt;/h2&gt;
                        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;    
                <!-- snippet end -->
            </pre>
        </div>
        <h2>Processing Icon/Treatment</h2>
        <img src="images/visual-system-processing-position.png" alt="" class="img-responsive"> <br><br>
        <p>It’s important to notify users when the system is processing.  hybris techné uses the above treatment to indicate the system is processing</p>
        <hr>
    </section>
    <!-- load tone/voice -->
    <section id="guidelines-tone-voice" class="page">
        <h2>Tone &amp; Voice</h2>
        <h3>Guiding Principles for Tone and Voice</h3>
        <ul>
            <li>Mobile first</li>
            <li>Consider 3Cs (context): user context (likes/hates/habits/state-of-mind, device posture), environmental context (time, day, location, place), world context (what is happening around the user we can leverage or use to inform the UI) </li>
        </ul>
        <h3>Overall Tone and Voice</h3>
        <ul>
            <li>Friendly</li>
            <li>Concise</li>
            <li>NO PASSIVE VOICE.  Only active voice.</li>
            <li>Present tense</li>
            <li>Avoid redundant words; redundant to themselves and to the context.</li>
            <li>Avoid including information the user doesn't need to know or care about</li>
            <li>Lead with the most important information and focus on the user's task</li>
            <li>Use contractions</li>
            <li>Don't 'second guess' the user's intentions. Only ask for confirmation of action if action will cause root-level or irretrievable changes.</li>
        </ul>
        <!-- Table -->
        <table class="table techne-table">
            <tr>
                <th>Is Not</th>
                <th>Is</th>
            </tr>
            <tr>
                <td>This is a large file and may take time to download. Please wait until all files have been download.</td>
                <td>Large files may take additional time to download</td>
            </tr>
            <tr>
                <td>
                    <ProductName>
                    has been successfully deleted.
                </td>
                <td>
                    <Product Name>
                    deleted
                </td>
            </tr>
            <tr>
                <td>To add a product, upload an image.</td>
                <td>Upload an image to add a product</td>
            </tr>
            <tr>
                <td>You are. Is not. Will not. Did not.</td>
                <td>You're. Isn't. Won't. Didn't.</td>
            </tr>
            <tr>
                <td>Do you really want to delete this file? Warning!</td>
                <td>Warning! File will be permanently deleted.</td>
            </tr>
        </table>
        <hr>
        <h3>Punctuation &amp; Capitalization</h3>
        <ul>
            <li>Do not use a period for single sentences</li>
            <li>Use periods for messaging with multiple sentences, or when the sentence has other punctuation. Like this one.</li>
            <li>Use initial caps</li>
            <li>Capitalize proper nouns only. Do not capitalize random words in a sentence. It IS difficult to Read.</li>
            <li>Use an ellipsis...  to indicate lag or that an additional action will be required after making the selection.</li>
        </ul>
        <table class="table techne-table">
            <tr>
                <th>Don't</th>
                <th>Do</th>
            </tr>
            <tr>
                <td>Spell out numbers <br> i.e. five, ten, fourty-two</td>
                <td>Use numeric characters <br> i.e. 5, 10, 42</td>
            </tr>
            <tr>
                <td>Use lower cases for labels <br> i.e. save</td>
                <td>Use initial caps for labels <br> i.e. Save </td>
            </tr>
            <tr>
                <td>Spell out words with common abbreviations <br> i.e. application</td>
                <td>Use common abbreviations <br> i.e. app</td>
            </tr>
            <tr>
                <td>Use words like 'please' or 'sorry' <br> i.e. "Sorry, that file cannot be deleted." <br> i.e. "Please contact your administrator if you forgot your password"</td>
                <td>Be concise and friendly. Stick to the important content and lead based on the task. <br> i.e. "File can't be deleted." <br> i.e. "Forgot your password? Contact your admin."</td>
            </tr>
        </table>
      </section>
      <section id="guidelines-errors" class="page">
        <!-- <hr id="guidelines-errors"> -->
        <h3>Messaging; Errors &amp; Notifications</h3>
        <ul>
            <li>For confirmation/success messages, use the action as the key word i.e. 'saved,' 'added,' 'sent,' etc.  If not direct action is available, use 'successful' as the key word. </li>
            <li>For errors, use 'unsuccessful' as the key word. </li>
            <li>For errors that allow specific direction for correction, end the message at that specific direction.  For errors where the reason and/or correction steps cannot be specified, it is appropriate to add "Try Again." to the message so as not to leave the user at a dead end. </li>
            <li>Keep messaging as generic as possible to allow for product branding/labeling name changes in the future. </li>
        </ul>
        <table class="table techne-table">
            <tr>
                <th>Is Not</th>
                <th>Is</th>
            </tr>
            <tr>
                <td>
                    Billing Method
                    <Billing Method Method Name>
                    added.  
                </td>
                <td>Billing Method added</td>
            </tr>
            <tr>
                <td>
                    Shipping Cost
                    <Shipping Cost>
                    saved successfully. Shipping costs saved
                </td>
                <td>
                    Package
                    <Package Name>
                    couldn't be saved, a Package requires min. one Service.  Save unsuccessful. Add a least 1 Service.
                </td>
            </tr>
            <tr>
                <td>Image upload wasn't successful. Try again</td>
                <td>Image upload unsuccessful. Try again.</td>
            </tr>
            <tr>
                <td>
                    Package
                    <Package Name>
                    approved. Team
                    <Team Name>
                    can decide when to publish to y Market.
                </td>
                <td>
                    <Package Name>
                    approved.
                    <Team Name>
                    can decide when to publish.
                </td>
            </tr>
        </table>
        </section>

        <section id="guidelines-system-errors" class="page">

            <h3>System Errors</h3>
            <p>Every service in YaaS uses the common error message schema for error response payloads. However, these messages are typically not human-friendly. We recommend using the error code mapping below to help people recover quickly when an error occurs. For more information consult the <a href="https://devportal.yaas.io/tools/apibestpractices/index.html#Errors" target="_blank">API Best Practices</a> page in the Dev Portal.</p>
            
            <table class="table teche-table error-message-table">
                <tr>
                    <th>HTTP Code</th>   
                    <th class="narrow-col">Top-Level Error Type</th>   
                    <th class="narrow-col">Sub-Level Error Type</th>   
                    <th class="wide-col">Error Description</th>   
                    <th class="wide-col">Recommended Error Message</th>   
                </tr>
                <tr>
                    <td>400</td>
                    <td>bad_payload_syntax</td>
                    <td></td>
                    <td>The request payload has incorrect syntax according to the sent Content-Type. Check the payload content for syntax errors, such as missing commas or quotation marks that are not closed.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>400</td>
                    <td>validation_violation</td>
                    <td>missing_field</td>
                    <td>The requested body payload for a POST or PUT operation is missing, which violates the defined validation constraints. This denotes a missing field when a value is expected.</td>
                    <td>We need all required fields complete to keep you moving.</td>
                </tr>
                <tr>
                    <td>400</td>
                    <td></td>
                    <td>invalid_field</td>
                    <td>The requested body payload for the POST or PUT operation violates the validation constraints. This denotes specifically that there is:A type format incompatibility, such as specifying a pattern, but the given value does not match the pattern.A type incompatibility, such as a field modeled to be an integer, but a non-numeric expression was found instead.A range under or over flow validation violation cause.</td>
                    <td>We need all your entries to be correct to keep you moving</td>
                </tr>
                <tr>
                    <td>400</td>
                    <td></td>
                    <td>missing_header</td>
                    <td>Any of the required headers is missing. Check the request to see if it contains the required header, or refer to the error details response to identify the missing header.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>400</td>
                    <td></td>
                    <td>invalid_header</td>
                    <td>One or more sent headers has an invalid format. This denotes specifically that there is:A type format incompatibility, such as specifying a pattern, but the given value does not match the pattern.A type incompatibility, such as a field modeled to be an integer, but a non-numeric expression was found instead.A range under or over flow validation violation cause.A value is longer than the maximum length.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>400</td>
                    <td></td>
                    <td>missing_query_parameter</td>
                    <td>A required query parameter is missing. Check your request to ensure that it contains the required query parameters.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>400</td>
                    <td></td>
                    <td>invalid_query_parameter</td>
                    <td>One or more sent query parameters has an invalid format. This denotes specifically that there is:
                        <ul>
                            <li>A type format incompatibility, such as specifying a pattern, but the given value does not match the pattern.</li>
                            <li>A type incompatibility, such as a field modeled to be an integer, but a non numeric expression was found instead.</li>
                            <li>A value is longer than the maximum length."</li>
                        </ul>
                    </td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>400</td>
                    <td></td>
                    <td>out_of_range_parameter</td>
                    <td>A query parameter has an invalid format. This could be due to a range under or over flow validation violation cause. Check your request to ensure it contains valid query parameters.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>400</td>
                    <td>business_error</td>
                    <td>imaginary_product_unavailable</td>
                    <td>A business error indicating that a product with an imaginary description is not in the inventory.</td>
                    <td>Whoops!  We can't find what you're looking for.  Try again</td>
                </tr>
                <tr>
                    <td>400</td>
                    <td></td>
                    <td>your_api's_specific_type</td>
                    <td>depends on specific API</td>
                    <td>Whoops!  Something went wrong. Make sure all fields are complete and try again</td>
                </tr>
                <tr>
                    <td>401</td>
                    <td>insufficient_credentials</td>
                    <td></td>
                    <td>No credentials are provided, or the provided credentials are refused.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>403</td>
                    <td>insufficient_permissions</td>
                    <td></td>
                    <td>The credentials indicate a system-known user, but the user is not allowed to perform the requested operation.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>404</td>
                    <td>collection_resource_non_existing</td>
                    <td></td>
                    <td>The requested URI for a collection resource is not accessible. Check the syntax, and verify that the requested service is available.</td>
                    <td>Whoops! That doesn't exist. Try again</td>
                </tr>
                <tr>
                    <td>404</td>
                    <td>element_resource_non_existing</td>
                    <td></td>
                    <td>The requested URI does not map to a single element resource.</td>
                    <td>Whoops!  That doesn't exist.  Try again</td>
                </tr>
                <tr>
                    <td>405</td>
                    <td>unsupported_method</td>
                    <td></td>
                    <td>The requested resource does not support the specified HTTP action. Verify that you are calling an action supported by the requested endpoint.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>406</td>
                    <td>unsupported_response_content_type</td>
                    <td></td>
                    <td>The client requested a response type which cannot be obtained from the requested resource. Check the requested endpoint response capabilities and compare them with your client Accept header.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>409</td>
                    <td>conflict_resource</td>
                    <td></td>
                    <td>The requested resource could not be created, updated, or deleted due to server-side validation. This could be caused either by a temporary issue, such as an optimistic lock or persistent data constraint. Refer to the error details response to identify conflict details.</td>
                    <td>That's so great it already exists! Try something different</td>
                </tr>
                <tr>
                    <td>413</td>
                    <td>bad_payload_size</td>
                    <td></td>
                    <td>The request payload is larger than the server can process.</td>
                    <td>There's a ghost in the machine.  Sorry about that. Please try again</td>
                </tr>
                <tr>
                    <td>414</td>
                    <td>uri_too_long</td>
                    <td></td>
                    <td>The Request-URI is longer than allowed. This can occur when a client has improperly converted a POST request to a GET request with long query information, or when the client has descended into a URI endless redirection, such as a redirected URI prefix that points to a suffix of itself. Also, it can occur when the server is under attack by a client attempting to exploit security holes present in some servers using fixed-length buffers for reading or manipulating the Request-URI.</td>
                    <td>There's a ghost in the machine.  Sorry about that. Please try again</td>
                </tr>
                <tr>
                    <td>415</td>
                    <td>unsupported_request_content_type</td>
                    <td></td>
                    <td>The client sent a type of request which is not supported by the requested endpoint. Verify that your request's Content-Type matches the requested endpoint accepted content.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>500</td>
                    <td>internal_service_error</td>
                    <td></td>
                    <td>A server-side exception occurred which prevented the system from correctly returning the result. Refer to the error details response to identify exception details.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>500</td>
                    <td>backing_service_unavailable</td>
                    <td></td>
                    <td>Some backing service is not available. Refer to the error details response to identify the origin of the problem.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>
                <tr>
                    <td>503</td>
                    <td>service_temporarily_unavailable</td>
                    <td></td>
                    <td>A temporary service unavailability was detected. Refer to the error details response for a reattempt strategy.</td>
                    <td>Something went very wrong. Please try again.</td>
                </tr>

            </table>

            <h3>Language and Translation</h3>
            <ul>
                <li>Initial UI messaging should be written in American English using the guidelines above.  hybris Translation Services will take care of product copy translations.</li>
            </ul>
        </section>

        <!-- load tone/voice -->
        <section id="guidelines-accessibility" class="page">
            <h2>Accessibility</h2>
            <p>Being truly user-centric means supporting ALL users.  techné is designed to be accessible to all users.   All interfaces should make every best effort to adhere to the W3C Accessibillty guideline critiera  as detailed here:</p>
            <p><strong>Web Content Accessibilty Guidelines:</strong> <br> <a href="http://www.w3.org/TR/WCAG20/" target="_blank">http://www.w3.org/TR/WCAG20/</a></p>
            <p><strong>Authoring Tools Accessibility Guidelines (candidate recommendation: </strong> <br> <a href="http://www.w3.org/TR/ATAG20/" target="_blank">http://www.w3.org/TR/ATAG20/</a>)</p>
        </section>

</div>
