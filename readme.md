Fast start
install NodeJS
execute:
#install dependencies
npm install
#compile
./node_modules/.bin/webpack

2 ways to test
a)
# Use story book
npm run storybook
# Go to http://localhost:9001 see at once changes in filesystem

b)
run webpack
link target folder into html/scripts
run .html page from html folder

Deploy
copy .html and target/script folder to git repository https://github.com/vtol-ufo/vtol-ufo.github.io.git
go to https://vtol-ufo.github.io.git


There are a lot of proprietary systems for ?. To sell new ? in these circumstances, it must address real user problems, must be more user friendly, cheap, easy adoptable contain key differences and modern technologies.

•	Low costs achieved by:
	o	use of open source stack
	o	easy transfer from existing products
•	Easy adaptation
	o	System must not bring new way of work, but adopt existing flow and documents
	o	Must support easy transfer from existing products
•	User friendly
	o	Integration with existing authorization/authentication models (LDAP)
	o	End Users need be able to reuse their Facebook/Twitter and other accounts
•	Key differences
	o	???
•	Modern technologies
	o	Browser as universal platform which works on PCs, laptops, tablets, hand clocks, …
	o	Artificial intelligence algorithms to ???
•	Address real user problems
	o	We need reuse system for internal needs (Task: find sponsor/tester)
	o	Development must not address universal use case, but be specific. Although produced code must be easy extendable

Mid Human abilities limited to 7 things he can work simultaneously with. To overcome this, things organized in layers and hierarchy graphs, then one layer filled it is taken as language for next layer. Bottom-Up or Top-Down approach used to build or traverse layers
To keep mind from blowing up due to system complexity for each layer is good to have Isolation tests to concentrate on one item and avoiding too much things to think about. One of the technics for this is Object Oriented Programming then you concentrate on single object and it behaviour.

Top Down:
MVC – Model, View, Controller. Model is data presentation (finally it is records in Database Tables), View is set of forms (Dynamic HTML), Controller is transformation and direction logic between Model and View (Java ).
As MVC components uses different languages and platforms between M & C and V & C we can imagine OCI network stacks. Logic data transformed to raw signals and back.
Note recursion: Each from M,V,C parts can be itself alone presented as MVC design pattern, each from OCI levels can be presented as OCI design pattern itself.

Dynamic HTML View
Required knowledge & skills: Web programming, JavaScript, React JS

Written using OOP technics. Each visual, data or state is object and good to have class.
One teacher of physics said: Existing Data listing is half of task solving. Java with variable static typing is best choice for such approach and in this project some approach tried to be applied on JavaScript

•	NPM used as package manager
•	Webpack and NodeJS used as compiler and linker for classes and other source code
•	EcmaScript 6 used for OOP class syntax
•	PropTypes library used for class variable declaration and typization
•	ReactJS and JSX used to visualization and element behavior encapsulation inside class
•	I18Utils for internalization - translation 
•	SVG for resizable images and graphics and custom fonts
•	Sass used for styling
•	Redux can be used for state encapsulation inside class, but in field currently custom listeners and data classes used
•	Bootstrap used as mobile friendly visual component library
*	React-Strap used as connector between Bootstrap and ReactJS
•	Storybook used for isolated visual element testing and as element showcase tool
•	Single page strategy used instead of pages organization in dialogs and screens


Source code organization: 
As UI part uses unique tool ecosystem it is organized as separate project.
To avoid folders with a lot of files code organized by functionality nor by type globally and by type locally.
Folder structure
-> 	.config – Webpack config used to build with webpack and run tests using storybooks
-> 	.storybook – Story book config
-> 	html – folder for root pages served as result of java application request
-> 	node_modules – created by npm install command from package.json config file
-> 	target – create by webpack
-> 	src – classes, styles, test stories, translations, images, …
-> 	package.json – npm node modules imports
-> 	webpack.config.js – webpack build script, 

Each visual element can consist from multiple files
•	<Element>.js – Visual and behavior class
•	<Element>.json – Translations for strings
•	<Element>.scss – element styling
•	<Element>.story.js – Test and description for story book
•	<Element>.*.svg – images
•	<Element>.* - test data & other

React JS atom-organisms folder model is good for single static pages, but for dynamic multi functional application it is not enough and is expanded:
•	Data js - files describe data or state objects that flies between components and is DTO send to server
•	Remote js - is server api facade file, it produces and transforms dto to  java spring controllers. Mock this classes in story.js to see how elements works without server.
•	Utils is - listeners and other different utils
•	Pages.js - Main UI units 
•	Template.js – Define page structures
src folder structure
-> 	src
-> 	->  components – Elements used across multiple pages 
-> 	->  ->  atoms – Very primitive small UI elements like input or title
-> 	->  ->  molecules – combination of atoms and other molecules with some behavior addon
-> 	-> -> organisms – behavior reach UI elements
-> 	-> -> utils – different utils from listeners to transformers
-> 	-> -> data – DTO Javascript representation with typing or state objects
-> 	-> -> remote – remote facade
-> 	->  templates – page structure definition
-> 	-> -> <TemplateName> - On current moment only Flat page defined as template with logic block as Frames
-> 	-> -> -> <TemplateName>.* template defines structure of page
-> 	-> -> -> same folder structure like inside components
-> 	->  pages – User screens
-> 	-> -> <PageName>
-> 	-> -> -> <PageName>.* extends template and define page specific layouts
-> 	-> -> -> frames – Logic parts of page (modal screens)
-> 	-> -> ->  same folder structure like inside components
-> 	->  entrypoint*.* -- User/Admin/Someone else entry point for combination in single js file to avoid cross js cracking possibility


How to start
Install NodeJS set paths to execute it from command line
To install Javascript dependencies run 
-> 	npm install 
To start showcase server, it also development tool as soon as you update javascript files it compiled results seen in storybook window and browser application automatically updated.
-> 	npm run storybook
-> 	open http://localhost:9001


To write new component
-> 	<Component>.js Create empty class extending Component from React and implementing render function inside page structure (move component to common folders only you are sure it will be used on more than one page, and is quite generic. Usually this must happen only if you reuse already existing component.)
-> 	Write down <Component>.story.js – to show component inside story book
-> 	Using storybook and some javascript editor (notepad is enough, but better to use something with autocompletion and Object Javascript hierarchy support like Eclipse or IntelJ Idea ) enrich component visual and logic functionality

