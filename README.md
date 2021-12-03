Sprint 2 Heroku Link: http://fathomless-ravine-12501.herokuapp.com/

# Darceus's headless E-Commerce

## Goal Statement:
Nowadays, marketplace website often overloaded with thousands of distractions and information that sometime confuse you. Hence, you end up buying something you not really need.Therefore, we create a seamless and straight-forward web application that has no ads, no distraction, and one click button for your convenience.

## Project Tools:
* PostgresQL - Database - https://www.postgresql.org/
* Flask - Server/API side - https://flask.palletsprojects.com/en/2.0.x/
* ReactJS - Client side - https://reactjs.org/
* Heroku - Deployment - https://www.heroku.com/

## Tools and Frameworks Details
* Visual Studio Code will be used for the IDE to code and test our app.
  * Required:
    * python3
    * Flask
    * ReactJS

* Git and GitHub will be used for the version control and adding commits to your project.
  * Required:
    * .env
    * .gitignore

* Heroku will be used for the app deployment system to launch the app.
  * Required:
    * Procfile
    * requirement.txt



### Install Requirements:
* pip install flask
* pip install Flask-login
* pip install python-dotenv
* pip install Flask-sqlalchemy
* pip install requests
* pip install -U Flask-WTF
* pip install Flask-Bcrypt
* pip install urllib3
* pip install psycopg2-binary
* npm install
* npm i bcrypt


## React Build
* To build your react app, use ```npm run build```
* ```npm run build``` command will create ```node_modules``` folder.
* Put your modules in ```.gitignore``` file.
* To start and create server connection: ```npm start```

## Stripe API
### Purpose/Background
The client will send a fetch API that contain the cart item with the subtotal values.
The server will take care of it to create a new product and the price item with Stripe APIs.
It also use the APIs stripe provided to make a checkout session object. The checkout session comes with a link.
The server return that specific link to the client and redirect user to that link.

### Steps
* First, create a development account from https://dashboard.stripe.com/
* Next, save your secret key as ```CLIENT_SECRET_KEY``` in your ```.env``` file

## Postgres Database
* Create a new Heroku app: ```heroku create```.
* Create a new remote DB on your new Heroku app: ```heroku addons:create heroku-postgresql:hobby-dev -a {your app name}``` (app name without brackets).
* Obtain the app configuration variables: ```heroku config```.
* In your ```.env``` file, create a new entry: ```export SQLALCHEMY_DATABASE_URI = {your app config}``` (config without brackets). In the URL, change ```postgres``` to ```postgresql```.
* Next, initialize the database User, BuyerItems, SellerItems, Items Tables in your ```app.py```.
* Create database with: ```db.create_all()```.
* To check if your database is created: ```heroku pg:psql -a {app name}``` (app name without brackets). Use ```\d``` to list all your tables.


## Deployment
### Heroku Configurations 
* Create a Procfile and enter ```web: python app.py```. This is to tell Heroku what buildpack to use.
* Create a requirements.txt and put all frameworks listed in 'Install Requirements'.
* When ready to deploy the app, log into heroku with the command ```heroku login -i```.
* Next, make sure that you are in your main branch.
* Create an app with command ```heroku create``` then ```git push heroku main```
* Go to the heroku dashboard and find your app settings
* In your app settings, locate "Config Vars" and enter all your API Keys
* Back in VS Code terminal run app with command ```heroku open```
* NOTE: Be sure to enter your secret keys and api keys in your heroku app config var section.



## Getting started
```
git clone https://github.com/kashmafia/project2-darceus.git
cd project2-darceus/
pip install requirements.txt
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.






