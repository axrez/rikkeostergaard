import React from 'react'
import styled from 'styled-components'

const StatementsPlaceholder = styled.div`
  display: flex;
  height: 20rem;
  justify-content: center;
  align-items: center;
  background: var(--secondary);
`

const Statements = () => (
  <StatementsPlaceholder>
    <p>this be statements</p>
  </StatementsPlaceholder>
)

export default Statements
