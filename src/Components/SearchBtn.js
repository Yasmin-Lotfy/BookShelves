import React from 'react'

function SearchBtn({setShowSearchpage, showSearchPage, setSearchBooks}) {

  setSearchBooks("")
  return (
    
    <>
      <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
    
    </>
  )
}

export default SearchBtn