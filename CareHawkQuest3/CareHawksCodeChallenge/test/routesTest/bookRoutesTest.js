const app = require("express");
const booksRepo = require('../../repo/booksRepo');
const request = require('supertest');
const spy = require('spy');
const sinon = require('sinon');
var bookroutes = require('../../routes/bookRoute');

let dataValues= 
{
    booksFile: 
    {
      name: 'books.csv',
      data: '<Buffer 5b 0d 0a 09 7b 22 62 6f 6f 6b 49 64 22 3a 22 62 30 30 31 22 2c 20 22 62 6f 6f 6b 41 75 74 68 6f 72 22 3a 22 4a 6f 68 6e 20 42 75 6c 6c 22 2c 22 62 6f ... 770 more bytes>' 
    }
  };

let success =
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
};

const mockRequest = () => 
{
    
    return {
      session: { data: dataValues },
    };
  };

  
  const mockResponse = () => 
  {
    const res = {};
    res.status = sinon.stub().withArgs(success.status).returns(res);
    res.send = sinon.stub().withArgs(success).returns(res);
    return res;
  };




describe('Book Route Test', function() 
{
    let status, send, res, req;
    
    it('test for get importBookFile link', function() 
    {
        const req = mockRequest;
        const res = mockResponse;
    
        
        request(app)
        .get('/importBooksFile',req,res)
        .expect(200)
    });
});

