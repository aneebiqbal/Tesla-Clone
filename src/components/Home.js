import React from 'react'
import styled from "styled-components"
import Section from "./Section"

export default function Home() {
    return (
        <Container>
            <Section
            title = "Model S"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-s.jpg"
            leftBtnText="Coustom-Order"
            rightBtnText="Existing Inventory"
            />
                <Section
                 title = "Model Y"
                 description = "Order Online for Touchless Delivery"
                 backgroundImg = "model-y.jpg"
                 leftBtnText="Coustom-Order"
                 rightBtnText="Existing Inventory"
                />
                <Section 
                title = "Model 3"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-3.jpg"
                leftBtnText="Coustom-Order"
                rightBtnText="Existing Inventory"
                />
                <Section 
                title = "Model X"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-x.jpg"
                leftBtnText="Coustom-Order"
                rightBtnText="Existing Inventory"
                />
                <Section 
                title = "Lowest Cost Solar Panels in X"
                description = "Money-Back gurantee"
                backgroundImg = "Solar-panel.jpg"
                leftBtnText="Coustom-Order"
                rightBtnText="ELearn more"
                />
                 <Section 
                title = "Solar for New Roofs"
                description = "Solar Roof Cost Less Then a New Roof Plus Solar panel "
                backgroundImg = "Solar-roof.jpg"
                leftBtnText="Coustom-Order"
                rightBtnText="ELearn more"
                />
                <Section 
                title = "Accessories"
                description = "Solar Roof Cost Less Then a New Roof Plus Solar panel "
                backgroundImg = "Accessories.jpg"
                leftBtnText="Shop Now"
                
                />
        </Container>
    )
}

    const Container = styled.div`
    height = 100vh;
    `