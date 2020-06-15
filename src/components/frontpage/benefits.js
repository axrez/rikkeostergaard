import React from "react"
import styled from "styled-components"

import CoachingIcon from "../../svg/coaching"
import KropsterapiIcon from "../../svg/kropsterapi"
import KonsulentIcon from "../../svg/konsulent"

const benefitsList = [
  {
    icon: <CoachingIcon />,
    title: "Coaching",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost",
  },
  {
    icon: <KropsterapiIcon />,
    title: "Kropsterapi",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost",
  },
  {
    icon: <KonsulentIcon />,
    title: "Konsulent",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost",
  },
]

const Benefits = () => {
  return (
    <BenefitsWrapper>
      {benefitsList.map(x => (
        <Benefit key={x.title}>
          {x.icon}
          <h2>{x.title}</h2>
          <p>{x.body}</p>
        </Benefit>
      ))}
    </BenefitsWrapper>
  )
}

const BenefitsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 5rem;
`

const Benefit = styled.div`
  padding: 1rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & :after {
    content: "";
    background: black;
    position: absolute;
    bottom: 15%;
    left: 0;
    height: 70%;
    width: 1px;
  }

  :first-child {
    & :after {
      height: 0;
    }
  }

  & svg {
    fill: var(--primary);
    width: 5rem;
  }

  & h2 {
    font-weight: 400;
    font-size: 1.3rem;
    margin-bottom: 0;
  }

  & p {
    text-align: center;
  }
`

export default Benefits
