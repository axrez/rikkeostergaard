import React from 'react'
import styled from 'styled-components'

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
`
const CallToActionButton = styled.button`
  border: none;
  background: var(--primary);
  padding: 0.5rem 2.5rem;
  text-transform: uppercase;
  color: white;
`

const CallToAction = () => (
  <CTAContainer>
    <CallToActionButton>
      <p>Bestil tid</p>
    </CallToActionButton>
  </CTAContainer>
)

export default CallToAction
