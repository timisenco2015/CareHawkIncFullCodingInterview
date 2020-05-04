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
    

# API Access point
```bash
  A)  url: /importBooksFile
      input:
         @apiParamName: booksFile
        @apiParam {file} 
      output:
        @apiSuccessExample {json} Success
        {
            "status": 200,
            "statusDesc": "succesful",
            "data": 
            {
              "objectType": "Class Object",
              "object": 
              {
                "Insert Message": "records in file populated to destination table sucessfully"
              }
           },
           "message": "Record Populated into the table Successfully"
        }
        @apiErrorExample {json} Error
        {
          "status": 200,
          "statusDesc": "succesful",
          "data": 
          {
            "objectType": "Error Object",
            "object": 
            {
                "Insert Error": "Error Thrown -> SequelizeUniqueConstraintError: Validation error"
            }
          },
          "message": "Unable to populate record into the destination table"
      }
  
  B) url:  /getAllBooks
     input: 
      @apiParam none
      @apiSuccessExample {json} Success
      {
        "status": 200,
        "statusDesc": "succesful",
        "data": 
        {
          "objectType": "Class Object",
          "object": 
          [
            {
                "book_id": "b001",
                "book_author": "Javascript programing",
                "book_title": "John Bull"
            },
            {
                "book_id": "b002",
                "book_author": "NodeJS programing",
                "book_title": "John Bull"
            },
            {
                "book_id": "b003",
                "book_author": "Angular 8 Testing",
                "book_title": "Brad Glen"
            },
            {
                "book_id": "b004",
                "book_author": "Node JS Testing",
                "book_title": "Brad Glen"
            },
            {
                "book_id": "b005",
                "book_author": "How to be sucessfull in life",
                "book_title": "Bod Dad"
            },
            {
                "book_id": "b006",
                "book_author": "Living your purpose on earth",
                "book_title": "Liber John"
            },
            {
                "book_id": "b007",
                "book_author": "How I became a programmer",
                "book_title": "John Ayo"
            },
            {
                "book_id": "b008",
                "book_author": "Configureing Apache",
                "book_title": "Ken Firhser"
            },
            {
                "book_id": "b009",
                "book_author": "Knowing Regex",
                "book_title": "Bod Dad"
            },
            {
                "book_id": "b010",
                "book_author": "Profession Java Programming",
                "book_title": "Bod Dad"
            }
          ]
        },
        "message": "Book list fetched Successfully"
      }
```
## Further help
To get more help, please contact me at aayobami.o.idowu@gmail.com

    
    
