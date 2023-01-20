import React from 'react'

function SearchResult({clearSearch, searchError,searchBooks, moveShelvesSearch}) {
    console.log(searchBooks[0].imageLinks.thumbnail)
  return (
   
     <>
     {searchError?<p className='error'>there is such error</p>:
        clearSearch? "":<div className="bookshelf">
        <h2 className="bookshelf-title">Search Result</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           {searchBooks.map((book,index)=> <>
            <li key={index}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage:
                        `url(${book.imageLinks?book.imageLinks.thumbnail:`http://books.google.com/books/content?id=7BFaAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api`})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select defaultValue={book.shelf} onChange={(e)=>moveShelvesSearch(book, e.target.value)} >
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option  value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
           
           </>)}
          </ol>
        </div>
        </div> 
     }
          
    
    </>
    
 
  )
}

export default SearchResult