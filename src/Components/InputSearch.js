import React from 'react'
import SearchResult from './SearchResult'


function InputSearch({clearSearch,searchError,moveShelvesSearch, setShowSearchpage,showSearchPage, getSearchBook,searchBooks}) {
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
        {searchBooks? <SearchResult clearSearch={clearSearch} searchError={searchError} moveShelvesSearch={moveShelvesSearch} searchBooks={searchBooks}/> :""}
       
   </>
  )
}

export default InputSearch