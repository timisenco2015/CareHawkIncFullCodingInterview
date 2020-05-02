// model declaration
const Books = require('../model/Books');

var path = require('path')




// Entity Declaration
var Container = require('../entities/container');
var Book = require('../entities/book');


//const lineReader = require('line-reader');
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');


let booksRoute =
{
  
    /** 
       * @functionName : importBooksData
       * @functionArgument : files or file
       * @returnValue : 
       *    @Example : {status: 200,statusDesc:"succesful",data:container,message: 'Unable to populate record into the destination table'};
       * @WhatisDoes :  read in file or mutiple files, loop through each file line by line and covert each line into json object.
       *                After that, it convert the json object to entity or class book. it stores the entity into datanse by calling sequelize 
       *                model (book) 
      
   */
    importBooksData:  async function(req, res) 
    { 
        // java equivalent generic class
        var container = new Container();
       
        var extensionName = path.extname(req.files.booksFile.name);
             
        if(extensionName.toUpperCase()==".CSV" || extensionName.toUpperCase()==".JSON")
        {

            try
            {
                
                await  (async () => 
                {
                            
                    let input = req.files.booksFile.data.toString('utf-8');
                            
                    let booksArray = JSON.parse(input);
                            
                    for (object of booksArray)
                    {
                                
                        let book = new Book();

                        book.setBookId(object.bookId);

                        book.setBookAuthor(object.bookAuthor);

                        book.setBookTitle(object.bookTitle);
                                
                        await Books.create(book).then(returnedBook => 
                        {
                                    
                            let book = returnedBook["dataValues"];
                                    
                            container.setObjectType("Class Object"); 

                            let insertObjectMap = {"Insert Message": "records in file populated to destination table sucessfully"};
        
                            container.setObject(insertObjectMap);      
                    
                        })
                        .catch(reason => 
                        {
                            
                            let errorMap = {"Insert Error": "Error Thrown -> "+reason};
                  
                            container.setObjectType("Error Object"); 
        
                            container.setObject(errorMap);
                                    
                            return;

                        });
                               
                    }
                                             
                })();
                
                if (container.getObjectType()=="Error Object")
                {
                
                    return {status: 200,statusDesc:"succesful",data:container,message: 'Unable to populate record into the destination table'};
           
                }

                return {status: 200,statusDesc:"succesful",data:container,message: 'Record Populated into the table Successfully'};
            }
            catch(err)
            {
            
                return res.status(500).send({ message: err.message });
                
            }
        }
        else
        {
            return {status: 200,statusDesc:"succesful",data:"File extension not accepted. Extensions accepted are .json and .csv",message: 'Unable to populate record into the destination table'};
           
        }  
    },

 /** 
       * @functionName : getBooks
       * @functionArgument : none
       * @returnValue : 
       *    @Example : 
       *    {
                "status": 200,
                "statusDesc": "succesful",
                "data": {
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
       * @WhatisDoes :  it get all books from the database
      
   */
   getBooks: async function(req, res) 
    {
        var booksList = [];
        var container = new Container();
       
        try 
        { 
            await  Books.findAll().then(async model => 
            {
                            
              
                for(var bookItem of model) 
                {
                                  
                    let book = new Book();
                    book.setBookId(bookItem.dataValues.book_id);
                    book.setBookAuthor(bookItem.dataValues.book_title);
                    book.setBookTitle(bookItem.dataValues.book_author);
                    
                    
                    booksList.push(book);
                }

                                    
                container.setObjectType("Class Object"); 
                
                container.setObject(booksList); 
                             
            })
            .catch(err=>
            {
                let errorMap = {"Insert Error": "Error Thrown -> "+err};
                  
                container.setObjectType("Error Object"); 
        
                container.setObject(errorMap);
                                    
                return;
               
            });
                        
        } 
        catch (e) 
        {

            return res.status(500).send({ message: e.message });
        }
            
        return { status: 200,statusDesc:"succesful", data:container, message: 'Book list fetched Successfully' };
        
    }
}


module.exports = booksRoute;