import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from "./pricing-box";

const Pricing = () => {
  let state = {
    pricings: [
      {
        id: 1,
        title: "Economy",
        price: "99.90",
        duration: "MONTH",
        features: {
          bandwith: "1GB",
          onlinespace: "50MB",
          support: "No",
          domain: "1",
          hiddenFees: "No",
        },
      },
      {
        id: 2,
        title: "DELUXE",
        price: "199.90",
        duration: "MONTH",
        isRibbon: true,
        features: {
          bandwith: "10GB",
          onlinespace: "500MB",
          support: "Yes",
          domain: "10",
          hiddenFees: "No",
        },
      },
      {
        id: 3,
        title: "ULTIMATE",
        price: "299.90",
        duration: "MONTH",
        features: {
          bandwith: "100GB",
          onlinespace: "2GB",
          support: "Yes",
          domain: "Unlimited",
          hiddenFees: "No",
        },
      },
    ],
  };
    return (
      <React.Fragment>
        <section className="section bg-light" id="pricing">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Our Pricing"
              description="Call to action pricing table is really crucial to you for your business."
            />
            <Row className="mt-5">
              {/* Render Pricing Box */}
              {state.pricings.map((pricing, key) => (
                <PricingBox key={key} pricing={pricing} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
}

export default Pricing;
