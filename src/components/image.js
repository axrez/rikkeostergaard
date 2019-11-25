import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Image = props => (
  <>
    <Img {...props} />
    <svg width="0" height="0">
      <defs>
        <clipPath id="my-shape">
          <path d="M0 0H1440V702.522C1440 702.522 1010.3 852.608 722.469 852.999C432.765 853.393 0 702.522 0 702.522V0Z" />
        </clipPath>
      </defs>
    </svg>
  </>
)
const ImageContainer = styled(Image)`
  width: 100%;
  max-height: 90vh;
  clip-path: url(#my-shape);
  justify-self: center;
`

export default ImageContainer
