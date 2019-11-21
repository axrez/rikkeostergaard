import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Nav = ({ top, frontpage }) => {
  const { site, logo } = useStaticQuery(graphql`
    query NavInfo {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "logo-m-text.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <Image fluid={logo.childImageSharp.fluid} />
      </Link>
      <NavLinks>
        <Link to="/om">Om mig</Link>
        <Link to="/kropsterapi">Kropsterapi</Link>
        <Link to="/coaching">Coaching</Link>
        <Link to="/konsulent">Konsulent</Link>
        <Link to="/kontakt">Kontakt</Link>
      </NavLinks>
    </NavWrapper>
  )
}

const NavWrapper = styled.header`
  width: 100%;
  padding: 1rem;
  position: fixed;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  & a {
    display: block;
    width: 25rem;
  }
`

const NavLinks = styled.nav`
  color: #111;
  display: flex;

  & a {
    color: inherit;
    text-decoration: none;
    width: fit-content;
    padding: 0.5rem;
  }
`

Nav.propTypes = {
  top: PropTypes.bool.isRequired,
  frontpage: PropTypes.bool.isRequired,
}

export default Nav
