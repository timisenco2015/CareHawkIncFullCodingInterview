class Book
{
    constructor()
    {

    }

    getBookId() 
	{
		return this.book_id;
	}

	
	setBookId(bookId) 
	{
		this.book_id = bookId;
	}
	
	


    setBookAuthor(bookAuthor) 
    {
		this.book_author = bookAuthor;
	}


	getBookAuthor() 
	{
		return this.book_author;
	}


    setBookTitle(bookTitle) 
	{
		this.book_title = bookTitle;
	}


	getBookTitle() 
	{
		return this.book_title;
	}


	
}

module.exports  =Book;