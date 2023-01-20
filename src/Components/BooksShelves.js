import React from 'react'
import BookShelf from './BookShelf'

function BooksShelves({allBooks, moveShelves}) {
    const currentlyReading = allBooks.filter((book)=>book.shelf === "currentlyReading")
    const wantToRead = allBooks.filter((book)=>book.shelf === "wantToRead")
    const read = allBooks.filter((book)=>book.shelf === "read")

    

  return (
    <>
           <BookShelf moveShelves={moveShelves} title="Currently Reading" books={currentlyReading} />
           <BookShelf moveShelves={moveShelves}  title="Want To Read" books={wantToRead} />
           <BookShelf moveShelves={moveShelves}  title='Read' books={read} />     
    </>
  )
}

export default BooksShelves