import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Nav from './nav'
import { useScrollPosition } from '../utils/useScrollPosition'
import './style/layout.css'

const Layout = ({ children, frontpage = false }) => {
  const [top, setTop] = useState(true)
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y === 0 && !top) {
        setTop(true)
      }
      if (currPos.y !== 0 && top) {
        setTop(false)
      }
    },
    [top],
    null,
    false,
    50
  )

  return (
    <>
      <Nav top={top} frontpage={frontpage} />
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
