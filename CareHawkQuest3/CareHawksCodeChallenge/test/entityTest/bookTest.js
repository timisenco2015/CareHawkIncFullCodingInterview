var Book = require('../../entities/book');
const assert =  require('chai').assert

describe('Book Entity',function()
{
    let book = new Book();
    book.setBookId("b001");
    book.setBookAuthor("John Boaz");
    book.setBookTitle("Beginners level of Software Development");
    it('Testing setters and getters of entity book', function()
    {
        assert.isNotNull(book, "variable must hold book object");
        assert.equal( book.getBookId(),"b001");
        assert.equal( book.getBookAuthor(),"John Boaz");
        assert.equal( book.getBookTitle(),"Beginners level of Software Development");
    });
});
