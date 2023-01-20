import React from 'react'
import BookShelf from './BookShelf'

function removeDuplicates(allBooks) {
  return allBooks.filter((item,
    index) => allBooks.indexOf(item) === index);
  }

function BooksShelves({allBooks, moveShelves}) {




    allBooks = removeDuplicates(allBooks)

    const currentlyReading = allBooks.filter((book)=>book.shelf === "currentlyReading");
    const wantToRead = allBooks.filter((book)=>book.shelf === "wantToRead");
    const read = allBooks.filter((book)=>book.shelf === "read");
    console.log(currentlyReading);

    

  return (
    <>
           <BookShelf moveShelves={moveShelves} title="Currently Reading" books={currentlyReading} />
           <BookShelf moveShelves={moveShelves}  title="Want To Read" books={wantToRead} />
           <BookShelf moveShelves={moveShelves}  title='Read' books={read} />     
    </>
  )
}

export default BooksShelves