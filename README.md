<h1>static-sinatra</h1>
<p>A <a href="http://www.sinatrarb.com/">Sinatra</a> application with RakeFile designed for multiple static <span class="caps">HTML</span> sites</p>
<p>This project came about after a client requested multiple versions of a static site. It was agreed that these sites should use the same front-end assets and the content should be able to be entered into
files using the textile markup language. The source reflects this structure and includes a working navigation for 2 side by side dummy sites</p>
<h2>Quick start</h2>
<ul>
<li>Download the source</li>
<li>copy the downloaded dir cimex-static-sinatra-xxxxx to wherever you normally develop projects</li>
<li>in the terminal, cd to that dir and <code>ruby app.rb</code></li>
<li>in your browser, got to http://localhost:4567/ and you should see the intro page</li>
</ul>
<h2 id="table-of-contents">Table of contents</h2>
<ul>
<li><a href="#developing-and-editing">Developing and editing</a>
<ul>
<li><a href="#application-structure">Application structure</a></li>
<li><a href="#dependencies">Dependencies</a></li>
</ul></li>
<li><a href="#template-version">Template version</a></li>
<li><a href="#running-the-application">Running the application</a></li>
<li><a href="#building-the-html-templates">Building the <span class="caps">HTML</span> templates</a></li>
<li><a href="#exporting">Exporting a stand alone version</a></li>
<li><a href="#modifying-the-css">Modifying the <span class="caps">CSS</span></a></li>
<li><a href="#coding-conventions">Coding conventions</a></li>
<li><a href="#technology">About the technology</a></li>
<li><a href="#limitations">Limitations</a></li>
</ul>
<h2 id="developing-and-editing">Developing and editing</h2>
<h3 id="application-structure">Application structure</h3>
<p>+ <b>helpers</b> - small handy ruby tools<br />
+ <b>public</b> - images, javascripts, css, flash<br />
+ <b>views</b><br />
+ + <b>layouts</b> - aka default master-pages - wrap around "pages"<br />
+ + <b>pages</b> - this is where the textile content lives<br />
+ + <b>partials</b> - repeated Haml e.g footer<br />
+ + <b>sass</b> - to convert to css<br />
- <b>app.rb</b> - main application file<br />
- <b>Rakefile</b> - contains our "build" and "export" tasks used by&#8230;<br />
- <b>preview.bat</b> - our windows "preview" double-clicker<br />
- <b>build.bat</b> - our windows "build" double-clicker<br />
- <b>export.bat</b> - our windows "export" double-clicker<br />
- <b><span class="caps">README</span>.txt</b> - minimal explanation for the uninitiated</p>
<h3 id="dependencies">Dependencies</h3>
<p><a href="http://rubyforge.org/frs/?group-id=126">Rubygems</a></p>
<p>The following rubygems are 'required' in <code>app.rb</code> - you'll need these to run the application:</p>
<p><b>redcloth</b> - to let ruby interpret textile<br />
<b>compass</b> - our stylesheet authoring environment<br />
<b>sinatra</b> - the codebase that the app runs off<br />
<b>haml</b> - so we can use Haml and then textile</p>
<p><b>Note</b>: If you've already got ruby and rubygems installed correctly it should just be a case of running the following commands:<br />
<code>sudo gem install redcloth</code><br />
<code>sudo gem install compass</code><br />
<code>sudo gem install sinatra</code><br />
<code>sudo gem install haml</code></p>
<h2 id="running-the-application">Running the application</h2>
<h4>Mac <span class="caps">OSX</span></h4>
<code>ruby app.rb</code></p>
<h4>Windows</h4>
<p>Double click the <b>preview.bat</b> file</p>
<p>The browser is now "previewing" the application - the files don't actually exist yet.</p>
<p>Now you can see your local modifications at <a href="http://localhost:4567/index.html">http://localhost:4567/index.html</a></p>
<h2 id="building-the-html-templates">Building the <span class="caps">HTML</span> templates</h2>
<h3>Mac <span class="caps">OSX</span></h3>
Grab the files -<br />
<code>rake build</code></p>
<h3>Windows</h3>
<p>click the <b>build.bat</b> file in the root directory</p>
<p>This will grab all the generated <span class="caps">HTML</span> code from your local server,<br />
and write it to the static folder.</p>
<h2 id="exporting">Exporting a stand alone version of the sites</h2>
<h3>Mac <span class="caps">OSX</span></h3>
Grab the files -<br />
<code>svn export --force public ../site_`date +%d%m%Y`</code><br />
<code>svn export --force static ../site_`date +%d%m%Y`</code></p>
<h3>Windows</h3>
<p>click the <b>export.bat</b> file in the root directory</p>
<p>This will grab all the assets, and all the <span class="caps">HTML</span>, and copy it to a file called site_0000, one directory up from<br />
the root</p>
<h2 id="template-version">Template version</h2>
<p>You can now find the code snippets needed to construct most of the elements of the site at this location:<br />
<a href="http://localhost:4567/templates/index.html">http://localhost:4567/templates/index.html</a></p>
<h2 id="modifying-the-css">Modifying the <span class="caps">CSS</span></h2>
<p>The <span class="caps">CSS</span> has been written in a meta-language called <a href="http://sass-lang.com/">Sass</a>. You can go right ahead and edit the<br />
Sass files inside <code>views/sass/core.sass</code> and these will appear at <a href="http://localhost:4567/">http://localhost:4567/</a>.</p>
<p>Every time localhost is refreshed, a new generated <span class="caps">CSS</span> file is written to public/stylesheets/*.css</p>
<h2 id="coding-conventions">Coding Conventions</h2>
<h3 id="indentation">Indentation</h3>
<p>Two spaces are used for indentation (no tab characters)</p>
<h2 id="technology">About the technology</h2>
<p>Built using the ruby "micro-framework" <a href="http://sinatrarb.com/intro">Sinatra</a></p>
<h3 id="why-not-html">Why not code the whole lot in <span class="caps">HTML</span>?</h3>
<ul>
<li>We want to reuse code and seperate it into isolated components</li>
<li>We want to use helpers so that we can make our lives easier regarding things like relative paths</li>
<li>Content editors are less likely to break the code using Haml, textile, or markdown</li>
</ul>
<h3 id="why-not-staticmatic">Why not use Staticmatic?</h3>
<ul>
<li>This project is a larger than usual static <span class="caps">HTML</span> system (there are likely to be several "themes"), and<br />
the project has a longer lifespan, Sinatra is more suited to this as it is more configurable, and scalable.</li>
<li>Sinatra has good, comprehensive documentation, see:
<ul>
<li><a href="http://www.sinatrarb.com/intro">Intro</a></li>
<li><a href="http://www.sinatrarb.com/faq"><span class="caps">FAQ</span></a></li>
<li><a href="http://www.sinatrarb.com/documentation">Documentation</a></li>
<li><a href="http://railsapi.com/doc/sinatra-v1.0/"><span class="caps">API</span></a></li>
<li><a href="http://sinatra-book.gittr.com/">Book</a></li>
</ul></li>
</ul>
<ul>
<li>There are plenty of <a href="http://www.sinatrarb.com/wild.html">real world examples</a> to learn from / Active community</li>
<li>Sinatra is popular, less "bleeding edge" tool used and maintained by many developers</li>
</ul>
<h3 id="technical-diffs">Technical differences to Staticmatic</h3>
<ul>
<li>You need to set up your own routes</li>
<li>It doesn't come with its own build script</li>
</ul>
<h3 id="limitations">Current limitations</h3>
<ul>
<li>In the main primary navigation used on the main content pages (i.e. not a home-page),<br />
a primary navigation item can not link to a tertiary page, only secondary.</li>
</ul>

