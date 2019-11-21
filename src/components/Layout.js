import React from 'react'
import PropTypes from 'prop-types'

import Nav from './nav'
import './style/layout.css'

const Layout = ({ children, frontpage = false }) => {
  console.log('hi')

  return (
    <>
      <Nav top frontpage={frontpage} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  frontpage: PropTypes.bool,
}

export default Layout
