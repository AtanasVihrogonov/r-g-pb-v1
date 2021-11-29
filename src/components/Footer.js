import React from 'react'
import styled from 'styled-components'
import SocialLinks from '../constants/socialLinks'
import Categories from './Categories'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
        <Categories />
        <p>&copy; {new Date().getFullYear()} MDXBlog. All rights reserved.</p>
      </div>
    </footer>
  )
}

const footer = styled.div`
  .category {
    background-color: red;
  }
`

export default Footer
