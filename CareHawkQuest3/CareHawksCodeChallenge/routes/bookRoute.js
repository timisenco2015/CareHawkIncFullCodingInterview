var express = require('express');
var router = express.Router();
const booksRepo = require('../repo/booksRepo');

// importing session files by file location name

/**
 * @api {post} /importBooksfile
 * @apiVersion 1.0.0
 * @apiParamName: 
 * @apiParam {file} booksFile or multiple files with file names
 * @apiSuccessExample {json} Success
    *{
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
 
  * @apiErrorExample {json} Error
    *{
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

*/
router.post("/importBooksFile", async (req, res) => 
{
    try 
    {
       
        const success = await booksRepo.importBooksData(req, res);
      
        res.status(success.status).send(success);
    } 
    catch (error) 
    {
        console.log(error);
        
        res.status(500).send(error);
    }
});


/**
 * @api {post} /getAllBooks
 * @apiVersion 1.0.0
 * @apiParam none
 * @apiSuccessExample {json} Success
    *{
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
 
  * @apiErrorExample {json} Error
    *{
    "status": 200,
    "statusDesc": "succesful",
    "data": {
        "objectType": "Class Object",
        "object": [
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
*/
router.post("/getAllBooks", async (req, res) => 
{
    try 
    {
       
        const success = await booksRepo.getBooks(req, res);
      
        res.status(success.status).send(success);
    } 
    catch (error) 
    {
        console.log(error);
        
        res.status(500).send(error);
    }
});

module.exports = router;
