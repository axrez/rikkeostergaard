import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const HeroImage = props => (
  <ImageWrapper>
    <ImageOverlay />
    <Img {...props} />
  </ImageWrapper>
)
const ImageOverlay = styled.div`
  position: absolute;
  z-index: 1;
  background: var(--secondary);
  opacity: 0.5;
`

const ImageWrapper = styled.div`
  justify-self: center;
  clip-path: ellipse(100% 82% at 50% 17%);
  div {
    clip-path: ellipse(100% 55% at 50% 37%);
    width: 100%;
    max-height: 85vh;
    height: 85vh;
    box-shadow: var(--shadow);
  }
`

export default HeroImage
