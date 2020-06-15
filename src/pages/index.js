import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroImage from "../components/HeroImage"
import Benefits from "../components/frontpage/benefits"

const IndexPage = ({ data }) => {
  const { childImageSharp } = data.file

  return (
    <Layout>
      <SEO title="Home" />
      <HeroImage fluid={childImageSharp.fluid} />
      <HeroContent>
        <HeroText>Nyt Perspektiv På Krop og Sind</HeroText>
        <HeroCTA to="/om">Bestil tid</HeroCTA>
      </HeroContent>
      <Benefits />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    file(relativePath: { eq: "hero-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

const HeroContent = styled.div`
  position: absolute;
  top: 30vh;
  left: 30vw;
  width: 20rem;
  z-index: 10;
`

const HeroText = styled.h1`
  color: var(--primary);
  font-weight: 400;
`

const HeroCTA = styled(Link)`
  background: var(--accent);
  text-decoration: none;
  color: inherit;
  padding: 0.8rem 2.3rem;
  position: relative;
  top: 1.5rem;
  box-shadow: var(--shadow);
`

export default IndexPage
