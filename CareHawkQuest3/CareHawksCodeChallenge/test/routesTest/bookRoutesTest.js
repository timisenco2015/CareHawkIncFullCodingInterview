const app = require("express");
const booksRepo = require('../../repo/booksRepo');
const request = require('supertest');
const spy = require('spy');
const sinon = require('sinon');
var bookroutes = require('../../routes/bookRoute');

describe('Book Route Test', function() 
{
  
  it('test for get importBookFile link', function() 
  {
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
      
      return 
      {
        session: { data: dataValues }
      };
    };
  
    
    const mockResponse = () => 
    {
      const res = {};
      
      res.status = sinon.stub().withArgs(success.status).returns(res);
      
      res.send = sinon.stub().withArgs(success).returns(res);
      
      return res;
    };
  

    const req = mockRequest;
    const res = mockResponse;    
    
    request(app)
        .get('/importBooksFile',req,res)
        .expect(200)
  });

  it('test for get getAllBooks link', function() 
  {
    
  
    let success =
    {
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
  
  
    const mockResponse = () => 
    {
      const res = {};
      
      res.status = sinon.stub().withArgs(success.status).returns(res);
      
      res.send = sinon.stub().withArgs(success).returns(res);
      
      return res;
    };

    const mockRequest = () => 
    {
      
      return 
      {
        
      };
    };
  

    const req = mockRequest;
    const res = mockResponse;    
    
    request(app)
        .get('/importBooksFile',req,res)
        .expect(200)
    });





});

