var Container = require('../../entities/container');
var Book = require('../../entities/book');
const assert =  require('chai').assert

describe('ontainer Entity',function()
{
    let container = new Container();

    // create book object
    let book = new Book();
    book.setBookId("b001");
    book.setBookAuthor("John Boaz");
    book.setBookTitle("Beginners level of Software Development");

    // create container object (similar to generic object in java)

    container.setObject(book)
    container.setObjectType("Class Object");

    it('Testing setters and getters of entity book', function()
    {
        assert.isNotNull(container, "variable must hold an object of any type but in this book");
        assert.deepEqual(container.getObject(), book)
        assert.equal( container.getObject().getBookId(),"b001");
        assert.equal( container.getObject().getBookAuthor(),"John Boaz");
        assert.equal( container.getObject().getBookTitle(),"Beginners level of Software Development");
    });
});
