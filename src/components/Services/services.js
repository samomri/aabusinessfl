import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

const Services = () => {
  let state = {
    services: [
      {
        title: "Tax services",
        icon: "pe-7s-diamond",
        description:
          "Some other quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
      },
      {
        title: "Business Advice",
        icon: "pe-7s-display2",
        description:
          "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet Ipsum passage.",
      },
      {
        title: "Tax services",
        icon: "pe-7s-piggy",
        description:
          "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.",
      },
      {
        title: "Tax services",
        icon: "pe-7s-news-paper",
        description:
          "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
      },
      {
        title: "Tax services",
        icon: "pe-7s-news-paper",
        description:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      },
      {
        title: "Tax services",
        icon: "pe-7s-piggy",
        description:
          "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
      },
      {
        title: "Tax services",
        icon: "pe-7s-news-paper",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
      },
      {
        title: "Tax services",
        icon: "pe-7s-tools",
        description:
          "Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
      },
      {
        title: "Tax services",
        icon: "pe-7s-timer",
        description:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
    ],
  };
    
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Our Services"
              description="Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform."
            />

            <Row className="mt-5">
              {/* render service box */}
              {state.services.map((service, key) => (
                <ServiceBox
                  key={key}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
}

export default Services;
