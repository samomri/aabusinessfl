import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Testimonial Box
import TestimonialBox from "./testimonial-box";

const  Testimonials = () => {
  let state = {
    testimonials: [
      {
        id: 1,
        image: "assets/images/team/1.svg",
        name: "Jane Dow",
        cmpName: "Company Name",
        message:
          "“Quote.”",
      },
      {
        id: 2,
        image: "assets/images/team/2.svg",
        name: "John Dow",
        cmpName: "Company Name",
        message:
        "“Quote.”",
      },
      {
        id: 3,
        image: "assets/images/team/1.svg",
        name: "John Dow",
        cmpName: "Company Name",
        message:
        "“Quote.”",
      },
    ],
  };

  return (
      <React.Fragment>
        <section className="section" id="testi">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="What they've said"
              description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli."
            />

            <Row className="mt-5">
              {/* render testimonials box */}
              {state.testimonials.map((testimonial, key) => (
                <TestimonialBox key={key} testimonial={testimonial} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
}

export default Testimonials;
