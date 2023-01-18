import React, { useState } from 'react'
import SearchResult from './SearchResult'


function InputSearch({moveShelvesSearch, setShowSearchpage,showSearchPage, getSearchBook,searchBooks}) {
  return (
   <>
    <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(e)=>getSearchBook(e)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        {searchBooks? <SearchResult moveShelvesSearch={moveShelvesSearch} searchBooks={searchBooks}/> :""}
       
   </>
  )
}

export default InputSearch