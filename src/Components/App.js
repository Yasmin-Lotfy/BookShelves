import "./../App.css";
import { useEffect, useState } from "react";
import SearchBtn from "./SearchBtn";
import InputSearch from "./InputSearch";
import Header from "./Header";
import BooksShelves from "./BooksShelves";
import * as BooksAPI from "./BooksAPI";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./MasterLayout";
import NotFound from "./NotFound";



function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [clearSearch, setClearSearch] = useState(false)

  useEffect(() => {
    // search for all types of books
  BooksAPI.getAll().then(res =>  setAllBooks(res))
  }, [])
  // console.log(allBooks)

  // function to move books between shelves
  let moveShelves = (book,shelfToMoveBookTo)=>{
    let updatedBooks = allBooks; //copy from api books

    let newbooks = updatedBooks.map((upBook)=>{
      if(upBook.id === book.id){
        upBook.shelf=shelfToMoveBookTo;
        // console.log(upBook.shelf)
        // update books from api 
      BooksAPI.update(book,shelfToMoveBookTo).then()
      }return upBook
    }  )
    setAllBooks(newbooks)
   

   
  }
 // get the searched book from api and render it to the dom 
 let getSearchBook= (e)=>{
  // console.log(e.target.value);
  setQuery(e.target.value);
}

//  to handle option of book shelves on search books 
let checkShelves = () => {
  if(searchBooks !== ""){
console.log(searchBooks[0].shelf)
    searchBooks.forEach((searchBookElement)=>{
      allBooks.forEach((allBookElement)=>{
        if(searchBookElement.id === allBookElement.id){
          searchBookElement.shelf = allBookElement.shelf
        }else{
          if(searchBookElement.shelf===undefined){
            searchBookElement.shelf="none"
          }
        }
      })
    })
    console.log(searchBooks)

  }
  
}


// calling the search api every time query updated
useEffect(() => {
  console.log("called")
  if(query){
    BooksAPI.search(query,10).then(res =>{
      if(res.error){
        console.log(res)
        setSearchError(true)
      }else{
        setSearchError(false)
        setClearSearch(false)
        setSearchBooks(res)

      }
    } )
  }else if (query===""){
    console.log("empty query")
    setClearSearch(true)
    console.log("after setting true")
  }
 
}, [query])
console.log(searchBooks);


  

   // function to move books between shelves that we searched for
   let moveShelvesSearch = (book,shelfToMoveBookTo)=>{
    console.log(book)
    let updatedBooks = searchBooks; //copy from api books
    let newbooks = updatedBooks.filter((upBook)=>{
      if(upBook.id === book.id){
        upBook.shelf=shelfToMoveBookTo;
            // update books from api 
        BooksAPI.update(book,shelfToMoveBookTo).then()
        console.log(upBook)
      }return upBook;
      
    }  )
console.log(newbooks)
    // // to remove the search book from search 
    // let filterSearch = updatedBooks.filter((bookRender)=> bookRender.id !== book.id)
    // setSearchBooks(filterSearch)
   
    // to add the searched book to book shelves 
    console.log(newbooks)
    BooksAPI.update(newbooks,shelfToMoveBookTo).then()

    setAllBooks([...allBooks , ...newbooks])
   
  }
  checkShelves()
 
  let routes = createBrowserRouter([
    {path:"/", Element:<MasterLayout/>,errorElement:<NotFound/>, children:[
      {index:true, element:<>
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
    </>},
    {path:"search",element:<InputSearch clearSearch={clearSearch} searchError={searchError} moveShelvesSearch={moveShelvesSearch} searchBooks={searchBooks} getSearchBook={getSearchBook} setShowSearchpage={setShowSearchpage} showSearchPage={showSearchPage}/>
  }
    ]}
  ])
 
  return (

    <RouterProvider router={routes}/>
  );
}

export default App;
