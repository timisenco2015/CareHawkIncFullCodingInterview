# CareHawkIncFullCodingInterview

This coding challenge question is divided into three parts:

  - First part: is the solution to the first questions and can be found in CareHawkQuest1/CarwHawkQ1.js. Please do not run this file. This     file can viewed using notepad++
  
  - Second Part: is the solution to question 2 and can be found in CareHawkQuest2. Please note that this is a node js applicaiton. 
       
       - Before starting this project, ensure that all needed dependencies are installed by runnung "npm install"
       - To start this project, open two terminals and cd to project directories on both terminals. This prokect uses local server. To     
         start the local server you need to enter "ws" and press enter in one of the terminal opened. On the second terminal enter 
          "Node CarwHawkQuest2  urllink cssname". Note: this "Node CarwHawkQuest2  urllink cssname" accept two command line argument      
           which 
          urllink (web page url) and css name e.g. node CarwHawkQuest2 http://locahost:3200/index.html fpar. This will return through   
          console.log tag name that has the css name specified.
   
  - Third Part: is the solution to question 3 and can be found in CareHawkQuest3. This coding solution is full node js application. well   
    tested application. It uses sqlite file system for databse and sequelize model. Project structure below:
    
      ## Description

    - A restful api built with NodeJS. 
    - End point for CareHawksCodeChallenge. 
    - Access and process data from https://swapi.co/. Access data by calling urls from swapi.co
    - A well tested application.

     ## Development server

     Run `node server` for a dev server. To able to use this applications, users will have to set environment variables.The environment     file is also upload under this repository on github.


     ## Running unit tests

  Run `npm test` to execute the unit tests via [Mocha](https://github.com/mochajs/mocha).
    
    
  ## Build Code Structure
  ```bash
    |-----------
    
    | - databaseConfig
    
    |
    
    | |
    
    | | - database.js
    
    | |
    
    | - entities
    
    ||
    
    || - book.js
    
    ||
    
    || - cotainer.js
    
    ||
    
    | - model
    
    ||
    
    || - Books.js
    
    ||
    
    |- Repo
    
    ||
    
    |-sample
    
    || - books.csv
    ||
    || - books.json
    
    ||
    
    || - booksRepo.js
    
    ||
    
    | - Routes
    
    ||
    
    || - bookRoute
    
    ||
    
    | - sqlDatabase
    
    ||
    
    || - databse.sqlite
    
    ||
    
    || - test
    
    ||
    
    || - entityTest
    
    |||
    
    |||- booTest.js
    
    |||
    
    ||| - containerTest.js
    
    |||
    
    || - mdoelTest
    
    |||
    
    ||| - booksTest.js
    
    |||
    
    ||-bookRoutesTest
    
    


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

    
    
    
    
    
    
    
    
    
    
 
