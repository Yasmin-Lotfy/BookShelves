import React, { useEffect, useState } from 'react'
import BookShelf from './BookShelf'



function BooksShelves({allBooks, moveShelves}) {

  let removeDuplicates= (allBooks)=> {
    return allBooks.filter((item,index) => allBooks.indexOf(item) === index);
    }


    
  
      allBooks = removeDuplicates(allBooks)
  
      console.log(allBooks)
    

  


    const currentlyReading = removeDuplicates(allBooks.filter((book)=>book.shelf === "currentlyReading"));
    const wantToRead =removeDuplicates(allBooks.filter((book)=>book.shelf === "wantToRead"));
    const read = removeDuplicates(allBooks.filter((book)=>book.shelf === "read"));
    console.log(currentlyReading);
    console.log(wantToRead);
    console.log(read);

    

  return (
    <>
           <BookShelf moveShelves={moveShelves} title="Currently Reading" books={currentlyReading} />
           <BookShelf moveShelves={moveShelves}  title="Want To Read" books={wantToRead} />
           <BookShelf moveShelves={moveShelves}  title='Read' books={read} />     
    </>
  )
}

export default BooksShelves