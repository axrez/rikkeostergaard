import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import HeroImage from '../components/HeroImage'

const IndexPage = ({ data }) => {
  const { childImageSharp } = data.file

  return (
    <Layout>
      <SEO title="Home" />
      <HeroImage fluid={childImageSharp.fluid} />
      <HeroContent>
        <HeroText>Nyt Perspektiv På Krop og Sjæl</HeroText>
        <HeroCTA to="/om">Læs mere</HeroCTA>
      </HeroContent>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
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
  top: 20rem;
  position: absolute;
  left: 40rem;
  width: 20rem;
  z-index: 10;
`

const HeroText = styled.h1`
  color: var(--primary);
`

const HeroCTA = styled(Link)`
  background: var(--accent);
  text-decoration: none;
  color: inherit;
  border-radius: 20px;
  padding: 1rem;
`

export default IndexPage
