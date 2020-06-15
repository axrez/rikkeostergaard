import React, { useState } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Nav from "./nav"
import { useScrollPosition } from "../utils/useScrollPosition"
import "./style/layout.css"

const Footer = styled.footer`
  background: var(--dark);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 4rem;
  font-weight: 100;

  & div {
    width: 4.5rem;
    height: 4.5rem;
  }

  & span {
    width: 15rem;
  }

  & p {
    width: 15rem;
    text-align: end;
  }

  & span > p {
    margin: 0.2rem;
    text-align: start;
  }
`

const Layout = ({ children, frontpage = false }) => {
  const [top, setTop] = useState(true)

  const { logo } = useStaticQuery(query)

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
      <Footer>
        <span>
          <p>Rikke Østergaard</p>
          <p>Holbergsgade 16, 4200 Slagelse</p>
          <p>mail@rikkeoestergaard.dk</p>
        </span>
        <Link to="/">
          <Img fluid={logo.childImageSharp.fluid} />
        </Link>
        <p>© {new Date().getFullYear()} Rikke Østergaard</p>
      </Footer>
    </>
  )
}

const query = graphql`
  query FooterLogo {
    logo: file(relativePath: { eq: "logo-u-txt.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  frontpage: PropTypes.bool,
}

export default Layout
