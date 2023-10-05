import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section 
            title="Model S"
            discription="Order Online for Touchless Dilivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Model X"
            discription="Order Online for Touchless Dilivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Model Y"
            discription="Order Online for Touchless Dilivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Lowest Cost Solar Panels in India"
            discription="Money-back duarentee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Solar for New Roofs"
            discription="Solar Roofs Cost Less Than a New Roofs"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Accessories"
            discription=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
`