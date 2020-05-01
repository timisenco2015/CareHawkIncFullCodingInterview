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
 
                                    container.setObject(book);

                                    let insertObjectMap = {"Insert Message": "records in file populated to destination table sucessfully"};
                    
                                    container.setObjectType("Class Object"); 
        
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
         
            
       
    }
}


module.exports = booksRoute;