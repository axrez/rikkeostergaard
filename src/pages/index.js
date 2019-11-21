import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageContainer from '../components/image'

const IndexPage = ({ data }) => {
  const { childImageSharp } = data.file

  return (
    <Layout>
      <SEO title="Home" />
      <ImageContainer fluid={childImageSharp.fluid} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
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

export default IndexPage
