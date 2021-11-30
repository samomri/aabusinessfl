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
        image: "assets/images/team/2.svg",
        name: "Sam Omri",
        cmpName: "quantaDevs - CEO",
        message:
          "“When it comes to accounting, I don't have to worry because A&A got my back.”",
      },
      {
        id: 2,
        image: "assets/images/team/2.svg",
        name: "Samir Najahi",
        cmpName: "Shourouq Inc. - President",
        message:
        "“For more than 10 years A&A helped me and still help me on every aspect of my financial needs.”",
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
              description="Here is some feedback we recieved from our beloved clients."
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
