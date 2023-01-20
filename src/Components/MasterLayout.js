import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';


function MasterLayout() {
  return (

<>
<div className="app">
       (
        // start of input search to get books from api 
      {/* kckkc */}
      <Header/>
      <Outlet/>
       
      )
    </div>
</>    )
}

export default MasterLayout