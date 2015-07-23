<!--SIDENAVCONFIG
	{
		"showLeftNav": true,
		"navigation": [
			{
				"text": "Spirit & Vision", 
				"id": "#spirit-vision"
			},
      {
        "text": "Design Principles", 
        "id": "#design-principles"
      },
      {
        "text": "Navigation", 
        "id": "#navigation"
      },
      {
        "text": "Visual System", 
        "id": "#visual-system"
      },
      {
        "text": "Tone & Voice",
        "id": "#tone-voice"
      },
      {
        "text": "Accessibility",
        "id": "#accessibility"
      }
    ]
	}
-->

<div class="hyGuidelinesPage container-fluid" >
    <section id="spirit-vision" class="page">
        <h2>Spirit &amp; Vision</h2>
        <p>We like to think we know what users want, and that’s what we design to. Covering both business users and consumers,  we have controls, patterns, layouts and guidelines, but those tools need to come together to meet the Expectations, Values, Motivations and avoid the Deal Breakers so that the experience is optimized for the individual user and not the technologies used. </p>
        <img src="images/arrows-four-down.png" alt="" width="80%" class="hidden-xs"/>
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
    <section id="design-principles" class="page">
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
    <section id="navigation" class="page">
            <h2>Navigation and Parent/Child Panels</h2>
            <h3>YaaS IO uses an off-canvas navigation pattern to maximize screen real estate.</h3>
            <p>A “parent/child” relationship is used to control the views in the panels. The “parent” panel should contain all navigation items and the ‘child’ panel should contain the content or tooling meant for interaction.</p>
            <p>It is not recommended additional panels are created or nested within the existing parent/child structure as this will put the overall flow and focus of content at risk.</p>
            <h3>Mobile Navigation</h3>
            <p>At the mobile inflection point menu is closed by default.</p>
            <div class="row">
              <div class="col-md-4 col-sm-6 text-center">
                <img src="images/navigation-mobile-closed.png" alt="" class="img-responsive"> <br> Default View - Collapsed menu
              </div>
              <span class="visible-xs"><br><br></span>
              <div class="col-md-4 col-md-offset-2 col-sm-6 text-center">
                <img src="images/navigation-mobile-open.png" alt="" class="img-responsive"> <br> Menu expanded
              </div>
            </div>
            <hr>
            <h3>Tablet Navigation</h3>
            <p>At the tablet inflection point menu is closed by default. </p>
            <div class="row">
              <div class="col-md-6 text-center">
                <img src="images/navigation-tablet-closed.png" alt="" class="img-responsive"> <br> Default View - Collapsed menu
              </div>
              <span class="visible-xs"><br><br></span>
              <div class="col-md-6  text-center">
                <img src="images/navigation-tablet-open.png" alt="" class="img-responsive"> <br> Menu expanded
              </div>
            </div>
            <hr>
            <h3>Desktop Navigation</h3>
            <p>At the desktop inflection point menu is open by default with a clear indication of how to close to take full advantage of the available screen real estate. </p>
            <img src="images/navigation-desktop.png" alt="" class="img-responsive">
          </section>
        <!-- load visual system -->
    <section id="visual-system" class="page">
            <h2>Visual System</h2>
            <h3>Main Colors</h3>
            <p>The primary application colors are neutralized to allow the sparse use of the primary blue and content to take center stage.</p>
            <div class="row text-center">
              <div class="col-md-5ths col-xs-4">
                <div class="circle screen-bg"></div>
                <p class="no-bottom-margin">Screen background</p>
                <h4>#EDF1F5</h4>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle content-bg"></div>
                <p class="no-bottom-margin">Content background</p>
                <h4>#FFFFFF</h4>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle content-bg-2"></div>
                <p class="no-bottom-margin">Screen background</p>
                <h4>#29374f</h4>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle typography"></div>
                <p class="no-bottom-margin">Typography</p>
                <h4>#000000</h4>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle blue"></div>
                <p class="no-bottom-margin">Text Link</p>
                <h4>#0054Ae</h4>
              </div>
            </div>
            <div class="usage">
              <h4>Usage Guidelines</h4>
              <p><b>Screen Background:</b> use app-wide as the background color</p>
              <p><b>Content Background:</b> use app-wide as background for any content block. Provides contrast between screen background and content background.</p>
              <p><b>Menu Background:</b> use app-wide as navigation elements background</p>
              <p><b>Typography:</b> use app-wide for body copy. Provides for high-contrast on white background.</p>
              <p><b>Text Link:</b> use app-wide for links in any context.</p>
            </div>
            <hr>
            <h3>Alerts, Errors &amp; Notifications</h3>
            <p>All alerts within the application are color coded to emphasize the level of urgency.  In some cases alerts will allow for dismissal and in other cases alerts must be acted upon in order to complete a task.  The color coded system should allow at-a-glance understanding of allowable actions.</p>
            <p>These colors are desaturated to work better with the primary application colors.</p>
            <div class="row text-center">
              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info"></div>
                <p class="no-bottom-margin">Help information</p>
                <h4>#d3dbe6</h4>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle success"></div>
                <p class="no-bottom-margin">Well Done! Success!</p>
                <h4>#d3dbe6</h4>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle waring"></div>
                <p class="no-bottom-margin">Warning! Not Looking Good.</p>
                <h4>#f99b06</h4>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle try-again"></div>
                <p class="no-bottom-margin">Oh Snap! Try Again.</p>
                <h4>#ff3b30</h4>
              </div>
            </div>
            <div class="alert alert-danger alert-dismissable">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
              <strong>Error! </strong>Correct issue / Warning notification message goes here...
            </div>
            <div class="alert alert-warning alert-dismissable">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
              <strong>Warning!</strong> Proceed with caution / Notification message goes here...  (disappears in 3 seconds)
            </div>
            <div class="alert alert-success alert-dismissable">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
              <strong>Success!</strong> Text in Positive notification message goes here... (disappears in 3 seconds)
            </div>
            <div class="usage">
              <h4>Usage Guidelines</h4>
              <p><b>Helpful Information:</b> use background color app-wide for notification field-level help modals.</p>
              <p><b>Well Done! Success!:</b> use background color app-wide for success messaging only.</p>
              <p><b>Warning! Not looking good:</b> use background color app-wide for warning messaging only.</p>
              <p><b>Oh Snap! Try again:</b> use background color app-wide for error messaging only.</p>
            </div>
            <hr>
            <h3>Typography</h3>
            <p>Good typography adds personality to an application, and can help set tone in the absence of visual elements. hybris and YaaS IO uses <strong><a href="https://www.google.com/fonts/specimen/Dosis" target="_blank">Dosis</a></strong> to create a friendly and inviting environment.</p>
            <div class="row text-center type-face">
              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info">
                  <span class="circle-type dosis-light">Aa</span>
                </div>
                <p>Light</p>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info">
                  <span class="circle-type dosis-book">Aa</span>
                </div>
                <p>Book</p>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info">
                  <span class="circle-type dosis-medium">Aa</span>
                </div>
                <p>Medium</p>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info">
                  <span class="circle-type dosis-semibold">Aa</span>
                </div>
                <p>SemiBold</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 usage">
                <h4 class="dosis-semibold">Dosis Light</h4>
                <p class="dosis-light size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-light size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-light size-26">1234567890!@£$%^&*()_+</p>
              </div>
              <div class="col-md-offset-2 col-md-4 usage">
                <h4 class="dosis-semibold">Dosis Book</h4>
                <p class="dosis-book size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-book size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-book size-26">1234567890!@£$%^&*()_+</p>
              </div>
              <div class="col-md-6 usage">
                <h4 class="dosis-semibold">Dosis Medium</h4>
                <p class="dosis-medium size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-medium size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-medium size-26">1234567890!@£$%^&*()_+</p>
              </div>
              <div class="col-md-6 usage">
                <h4 class="dosis-semibold">Dosis SemiBold</h4>
                <p class="dosis-semibold size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-semibold size-26">abcdefghijklmnopqrstuvwxyz</p>
                <p class="dosis-semibold size-26">1234567890!@£$%^&*()_+</p>
              </div>
            </div>
            <hr>
            <h3>Page Header Styles</h3>
            <div class="row text-center">
              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info">
                  <span class="circle-type dosis-light">H1</span>
                </div>
                <p class="dosis-light">Dosis Light <br> 24px</p>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info">
                  <span class="circle-type dosis-semibold">H2</span>
                </div>
                <p class="dosis-semibold">Dosis SemiBold <br> 22px</p>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info">
                  <span class="circle-type dosis-semibold">H3</span>
                </div>
                <p class="dosis-semibold">Dosis SemiBold <br> 19px </p>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info">
                  <span class="circle-type dosis-medium">H4</span>
                </div>
                <p class="dosis-medium">Dosis Medium <br> 19px</p>
              </div>
              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info">
                  <span class="circle-type dosis-semibold">H5</span>
                </div>
                <p class="dosis-semibold">Dosis SemiBold <br> 16px</p>
              </div>
            </div>
            <div class="row">
            <div class="col-md-6 col-md-offset-3">
            <div id="header-example-carousel" class="carousel slide header-example-carousel" data-ride="carousel" >
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#header-example-carousel" data-slide-to="0" class="active">H1</li>
                <li data-target="#header-example-carousel" data-slide-to="1">H2</li>
                <li data-target="#header-example-carousel" data-slide-to="2">H3</li>
                <li data-target="#header-example-carousel" data-slide-to="3">H4</li>
                <li data-target="#header-example-carousel" data-slide-to="4">H5</li>
              </ol>
              <!-- Wrapper for slides -->
              <div class="carousel-inner">
                <div class="item active">
                  <img src="images/h1-example.png" alt="..." >
                  <div class="carousel-caption">
                   h1
                  </div>
                </div>
                <div class="item">
                  <img src="images/h2-example.png" alt="..." >
                  <div class="carousel-caption">
                    h2
                  </div>
                </div>
                <div class="item">
                  <img src="images/h1-example.png" alt="...">
                  <div class="carousel-caption">
                   h3
                  </div>
                </div>
                <div class="item">
                  <img src="images/h1-example.png" alt="...">
                  <div class="carousel-caption">
                    h4
                  </div>
                </div>
                <div class="item">
                  <img src="images/h1-example.png" alt="...">
                  <div class="carousel-caption">
                    h5
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            <h2>Processing Icon/Treatment</h2>
            <img src="images/visual-system-processing-position.png" alt="" class="img-responsive"> <br><br>
            <p>It’s important to notify users when the system is processing.  hybris Techne uses the above treatment to indicate the system is processing</p>
            <hr>
    </section>
    <!-- load tone/voice -->
    <section id="tone-voice" class="page">
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
              <td><ProductName> has been successfully deleted.</td>
              <td><Product Name> deleted</td>
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
        <hr>
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
              <td>Billing Method <Billing Method Method Name> added.  </td>
              <td>Billing Method added</td>
            </tr>
            <tr>
              <td>Shipping Cost <Shipping Cost> saved successfully. Shipping costs saved</td>
              <td>Package <Package Name> couldn't be saved, a Package requires min. one Service.  Save unsuccessful. Add a least 1 Service.</td>
            </tr>
            <tr>
              <td>Image upload wasn't successful. Try again</td>
              <td>Image upload unsuccessful. Try again.</td>
            </tr>
            <tr>
              <td>Package <Package Name> approved. Team <Team Name> can decide when to publish to y Market.</td>
              <td><Package Name> approved. <Team Name> can decide when to publish.</td>
            </tr>
        </table>
        <hr>
        <h3>Language and Translation</h3>
        <ul>
            <li>Initial UI messaging should be written in American English using the guidelines above.  hybris Translation Services will take care of product copy translations.</li>
        </ul>
    </section>
        <!-- load tone/voice -->
    <section id="accessibility">
            <h2>Accessibility</h2>
            <p>Being truly user-centric means supporting ALL users.  Techne is designed to be accessible to all users.   All interfaces should make every best effort to adhere to the W3C Accessibillty guideline critiera  as detailed here:</p>
            <p><strong>Web Content Accessibilty Guidelines:</strong> <br> <a href="http://www.w3.org/TR/WCAG20/" target="_blank">http://www.w3.org/TR/WCAG20/</a></p>
            <p><strong>Authoring Tools Accessibility Guidelines (candidate recommendation: </strong> <br> <a href="http://www.w3.org/TR/ATAG20/" target="_blank">http://www.w3.org/TR/ATAG20/</a>)</p>
    </section>
</div>
