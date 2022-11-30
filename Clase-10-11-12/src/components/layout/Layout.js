import React from 'react'
import Navbar from '../navbar/Navbar'


const Layout = ({ children }) => {
  return (
    <> 
      <Navbar />
      <div> {children} </div>
    </>
  )
}

export default Layout