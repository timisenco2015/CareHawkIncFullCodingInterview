var express = require('express');
var router = express.Router();
const booksRepo = require('../repo/booksRepo');

// importing session files by file location name

/**
 * @api {post} /importBooksfile
 * @apiVersion 1.0.0
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

module.exports = router;
