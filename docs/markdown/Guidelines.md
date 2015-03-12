
<body class="techne" data-spy="scroll">

<div class="main-content">

<div class="container">

    <div class="row row-offcanvas row-offcanvas-left">


      <div class="col-sm-12 page-content">

        <!-- load navigation -->
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


<!--        <img src="images/navigation-header.png" alt="" class="img-responsive">
              <br>
            At the mobile inflection point menu is closed by default. <br><br>

             <h3>Navigation with Toolbar</h3>

            <p>Aenean ornare vitae lacus maximus imperdiet. Integer orci eros, finibus vel dapibus vitae, rhoncus ut nibh. Nulla ultrices ornare ullamcorper.  Proin sit amet elit erat. Aenean venenatis neque facilisis eros blandit</p>

            <img src="images/navigation-toolbar.png" alt="" class="img-responsive"><br>
            <p>Persistent toolbar with back link and primary button</p>

            <img src="images/navigation-secondary.png" alt="" class="img-responsive"><br>
            <p>Secondary button replaces the ‘Back’ link whenever an edit is being made. In both cases the user will be taken back to the previous instance of the page.</p>

            <h3>Project Switcher</h3>
            <img src="images/navigation-project-switcher.png" alt="" class="img-responsive"><br>
            <p>Secondary button replaces the ‘Back’ link whenever an edit is being made. In both cases the user will be taken back to the previous instance of the page.</p>

            <hr> -->

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

            <h3>Alerts, Errors & Notifications</h3>

            <p>All alerts within the application are color coded to emphasize the level of urgency.  In some cases alerts will allow for dismissal and in other cases alerts must be acted upon in order to complete a task.  The color coded system should allow at-a-glance understanding of allowable actions.</p>

            <p>These colors are desaturated to work better with the primary application colors.</p>

            <div class="row text-center">

              <div class="col-md-5ths col-xs-4">
                <div class="circle help-info"></div>
                <p class="no-bottom-margin">Help information</p>
                <h4>#d3dbe6</h4>
              </div>

              <div class="col-md-5ths col-xs-4">
                <div class="circle attention"></div>
                <p class="no-bottom-margin">Heads Up! Attention</p>
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
              <p><b>Theads Up! Attention:</b> use background color app-wide for notification messaging only.</p>
              <p><b>Well Done! Success!:</b> use background color app-wide for success messaging only.</p>
              <p><b>Warning! Not looking good:</b> use background color app-wide for warning messaging only.</p>
              <p><b>Oh Snap! Try again:</b> use background color app-wide for error messaging only.</p>
              <p>* See <a href="#"><b>"Errors and Notifications"</b></a> for treatment and messaging examples. </p>
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

              <!-- Controls -->
 <!--              <a class="left carousel-control" href="#header-example-carousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a class="right carousel-control" href="#header-example-carousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
              </a> -->
            </div>

            </div>
            </div>


            <h2>Processing Icon/Treatment</h2>

            <img src="images/visual-system-processing-position.png" alt="" class="img-responsive"> <br><br>


            <p>It’s important to notify users when the system is processing.  hybris Techne uses the above treatment to indicate the system is processing</p>


<!--             <div class="alert alert-processing alert-dismissable">
                <img class="loading-indicator" src="http://baas.test.cf.hybris.com/public/img/processing.gif"> Processing ...
            </div> -->

            <hr>

          </section>
        <!-- load iconography -->
                  <section id="iconography" class="page">

            <h2>Iconography</h2>

            <p><strong>Icons</strong> can be used to conserve space while indicating interaction availability. Particularly at the mobile inflection point, icons are often used instead of text labels to conserve space and surface most important page actions first.  An example of this is using the + icon rather than the “Add” button at the mobile inflection point.</p>

            <p>Icon visual style leverages the Bootstrap glyph icons.  Custom icons can be created as needed but it is advised to use the same visual style and make sure to follow design heuristics in creation. <br><br><a href="http://getbootstrap.com/components/#glyphicons" target="_blank">http://getbootstrap.com/components/#glyphicons</a></p>

            <p class="no-bottom-margin"><strong>Avatar</strong> usage is limited across the interfaces but used in connection with individual users or entities in order to create a more personal and personalized experience. Currently avatars are used in the following contexts: <br> <br></p>

            <ul>
              <li>My profile</li>
              <li>Team members</li>
              <li>Staff members</li>
            </ul>


<!--             <h3>Icon Sets</h3>

            <p>The primary application colors are neutralized to allow the sparse use of the primary blue and content to take center stage.</p>

            <div class="row text-center icon-row">

              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-close"></span></div>Close</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-remove"></span></div>Remove</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-more"></span></div>More</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-alert"></span></div>Alert</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-localization"></span></div>Localization</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-info-help"></span></div>Info/Help</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-drag-drop"></span></div>Drag & Drop</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-located"></span></div>Locked</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-add"></span></div>Add</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-checked"></span></div>Checked</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-unchecked"></span></div>Unchecked</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-completed"></span></div>Completed</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-search"></span></div>Search</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-inactive-search"></span></div>Inactive Search </div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-chevron"></span></div>Chevron</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-back"></span></div>Back</div>
              <div class="col-md-2 col-sm-3 col-xs-4"><div class="circle"><span class="icon icon-expand"></span></div>Expand</div>

            </div> -->

            <hr>

          </section>
        <!-- load tone/voice -->
        <section id="tone-voice" class="page">

  <h2>Tone & Voice</h2>

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

  <h3>Punctuation & Capitalization</h3>

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

  <h3>Messaging; Errors & Notifications</h3>

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
      </div><!--/.col-xs-12.col-sm-9-->



    </div><!--/row-->

  </div><!--/.container-->

  </div>

  </body>