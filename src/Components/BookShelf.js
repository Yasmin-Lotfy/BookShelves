import React from 'react'

function BookShelf(props) {
    let allBooks = props.books;
    let title = props.title;
    let moveShelves = props.moveShelves;
    
  return (
    <>
        <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                   {allBooks.map((book,index)=>{
                    return <div key={book.id}><li >
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                `url(${book.imageLinks.thumbnail}) `,
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select defaultValue={book.shelf} onChange={(e)=>moveShelves(book, e.target.value)} >
                              <option  disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
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
                    </div>
                   } )}
                  </ol>
                </div>
        </div>      
    
    </>
  )
}

export default BookShelf