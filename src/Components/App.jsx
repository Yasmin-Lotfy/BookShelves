import "./../App.css";
import { useEffect, useState } from "react";
import SearchBtn from "./SearchBtn";
import InputSearch from "./InputSearch";
import Header from "./Header";
import BooksShelves from "./BooksShelves";
import * as BooksAPI from "./BooksAPI";



function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState("")

  useEffect(() => {
    // search for all types of books
  BooksAPI.getAll().then(res =>  setAllBooks(res))
  }, [])
  // console.log(allBooks)

  // function to move books between shelves
  let moveShelves = (book,shelfToMoveBookTo)=>{
    // console.log("kih")
    let updatedBooks = allBooks; //copy from api books

    let newbooks = updatedBooks.map((upBook)=>{
      if(upBook.id === book.id){
        upBook.shelf=shelfToMoveBookTo;
        // console.log(upBook.shelf)
      }return upBook
    }  )
    setAllBooks(newbooks)
  //  console.log(newbook)
   
  }

   // function to move books between shelves that we searched for
   let moveShelvesSearch = (book,shelfToMoveBookTo)=>{
    console.log("kih")
    let updatedBooks = searchBooks; //copy from api books
    let newbooks = updatedBooks.filter((upBook)=>{
      if(upBook.id === book.id){
        upBook.shelf=shelfToMoveBookTo;
        console.log(upBook)
      }return upBook
    }  )

    // to remove the search book from search 
    let filterSearch = updatedBooks.filter((bookRender)=> bookRender.id != book.id)
    setSearchBooks(filterSearch)
   
    // to add the searched book to book shelves 
    setAllBooks([...allBooks , ...newbooks])
  }

  console.log(allBooks)

  // get the searched book from api and render it to the dom 
  let getSearchBook= (e)=>{
    // console.log(e.target.value);
    setQuery(e.target.value);
  }
  // calling the search api every time query updated
  useEffect(() => {
    console.log("called")
    BooksAPI.search(query,10).then(res => setSearchBooks(res))
   
  }, [query])
  console.log(searchBooks)
  
 
  return (
    <div className="app">
      {showSearchPage ? (
        // start of input search to get books from api 
       <InputSearch moveShelvesSearch={moveShelvesSearch} searchBooks={searchBooks} getSearchBook={getSearchBook} setShowSearchpage={setShowSearchpage} showSearchPage={showSearchPage}/>
      ) : (
        <div className="list-books">
          {/* header of the app */}
        <Header/>
          <div className="list-books-content">
            <div>
            {/* start of Books shelves list */}
            <BooksShelves  moveShelves={moveShelves} allBooks={allBooks} />
            </div>
          </div>

          {/* search Button to open the input field to get books from api */}
        <SearchBtn setSearchBooks={setSearchBooks} setShowSearchpage={setShowSearchpage} showSearchPage={showSearchPage}/>
        
        </div>
      )}
    </div>
  );
}

export default App;
