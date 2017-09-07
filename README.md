# Javascript-E6-Test

#Transpiling ES6 using Babel

#--out-file  = So -out-file just means that this is the file where our new ES5 code is going to be deposited. 
<br>
<br>http://www.javascripttutorial.net/es6/setting-es6-project-using-babel/
<br>ES6 usage with Babel
<br>
<br>1) First, you create a directory to store the project files: npm init
<br>2) Install Babel: sudo npm install --save-dev babel-cli
<br>3) For organizing JavaScript files, you create two new folders src and dist. The src folder contains the JavaScript code in the latest version. Babel CLI will take the code from the src folder, convert it to the older version, and save the code files in the dist folder.
<br>4) Instead of running Babel from the command line directly, you can place commands in the scripts of the package.json section as follows:
<br>"scripts": {
<br>"build": "babel src -d dist"
<br>}
<br>
<br>
<br>5) Now, you can create a JavaScript file
<br>6) To Run issue the following command in the command line: npm run build. Javascript code is now in the src and dist folder. Html should point to dist folder
<br>
<br>7) To transform the JavaScript code to ES5, you need to instruct Babel to do it: sudo npm install babel-preset-latest --save-dev
<br> To use a preset, you create a new file named .babelrc in the projects folder with the following content:
<br>{
<br>"presets": ["latest"]
<br>}
<br>
<br>
<br>8) Now, you can run the build command again:  npm run build
