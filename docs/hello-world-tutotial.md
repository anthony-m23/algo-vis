# Express Hello World Project

### Prereq
* Have IDE
* Install Javascript
* Install Nodejs
* Install Expressjs

## Steps
* Use the command `npx express-generator PROJECT-NAME` to create a helloworld project
* cd into the project and run `npm install` to install all dependincies 
* Run `npm start` and go to `http://localhost:3000/` to view the application

## Options
* Instead of using jade for views you can use html
* go into the app.js file and change the following 
* add this line `app.engine('html', require('ejs').renderFile);` below `app.set('views', path.join(__dirname, 'views'))`
* and change `app.set('view engine', 'html');`
