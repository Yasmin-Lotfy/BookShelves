import React from 'react'
import BookShelf from './BookShelf'



function BooksShelves({allBooks, moveShelves}) {

  // let removeDuplicates= (allBooks)=> {
  //   return allBooks.filter((item,index) => allBooks.indexOf(item) === index);
  //   }
  let uniqueChars = [];
allBooks.forEach((element) => {
    if (!uniqueChars.includes(element)) {
        uniqueChars.push(element);
    }
});
      // allBooks = ([...new Set(allBooks)])
      console.log(uniqueChars)
      console.log(allBooks)
    const currentlyReading = (allBooks.filter((book)=>book.shelf === "currentlyReading"));
    const wantToRead =(allBooks.filter((book)=>book.shelf === "wantToRead"));
    const read = (allBooks.filter((book)=>book.shelf === "read"));
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