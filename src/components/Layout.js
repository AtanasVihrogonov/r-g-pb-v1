/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  // set function to change state of useState to whatever is the value set is opposite.
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* toggle prop is equal to toggle function */}
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
