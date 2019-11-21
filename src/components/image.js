import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Image = props => <Img {...props} />

const ImageContainer = styled(Image)`
  width: 100%;
  justify-self: center;
  max-height: 40vmax;
  max-width: 960px;
`

export default ImageContainer
