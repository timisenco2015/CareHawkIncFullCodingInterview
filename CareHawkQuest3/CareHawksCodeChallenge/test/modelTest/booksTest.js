const { expect } = require('chai')
const BooksModel = require('../../model/Books');

const
{
    sequelize,
    dataTypes,
    checkUniqueIndex,
    checkPropertyExists 
} = require('sequelize-test-helpers')

describe('Testing sequelize model books', () => 
{
    const Books = new BooksModel(sequelize, dataTypes)
    const books = Books;
   
    it('checks if model has all properties declared', function()
    {
        context('properties', () => {
            ;['book_id', 'book_title', 'book_author'].forEach(
              checkPropertyExists(books)
            )
          })
    });
   
    
   /* 
    it('checks if any of the model properties has unique index', function()
    {
        context('indexes', () => {
            ['book_id'].forEach(checkUniqueIndex(Books))
          })
    });
*/
    
})