import React from 'react'
import { Link } from 'react-router-dom'

function SearchBtn({setSearchBooks}) {

 
  return (
    
    <>
      <div className="open-search">
            <Link onClick={()=>setSearchBooks("")} to="/search">Add a book</Link>
          </div>
    
    </>
  )
}

export default SearchBtn