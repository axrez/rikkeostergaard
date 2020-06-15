import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styled, { css } from "styled-components"

const Nav = ({ top, frontpage }) => {
  const { logo } = useStaticQuery(graphql`
    query NavInfo {
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
    <NavWrapper top={top}>
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
  margin: 0 auto;
  padding: 1.5rem 1rem;
  position: fixed;
  z-index: 15;
  display: grid;
  grid-template-columns:
    calc((100% - 1440px) / 2)
    1fr auto
    calc((100% - 1440px) / 2);
  grid-template-areas: "lspace logo links rspace";
  align-items: flex-start;
  transition: all 200ms ease-in-out;

  & a {
    display: block;
    width: 25rem;
    grid-area: logo;
  }

  ${props =>
    !props.top &&
    css`
      background: white;
      box-shadow: var(--shadow);
    `}
`

const NavLinks = styled.nav`
  color: #373736;
  display: flex;
  grid-area: links;

  & a {
    color: inherit;
    text-decoration: none;
    width: fit-content;
    padding: 0.5rem;
    grid-area: inherit;
  }
`

Nav.propTypes = {
  top: PropTypes.bool.isRequired,
  frontpage: PropTypes.bool.isRequired,
}

export default Nav
