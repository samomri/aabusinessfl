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
        title: "Individual Tax Services",
        icon: "pe-7s-graph1",
        description:
          "Services provided for taxes levied on wages, salaries, dividends, interest, and other income earned throughout the year.",
      },
      {
        title: "Corporate Tax Services",
        icon: "pe-7s-display2",
        description:
          "Tax Strategy Consultation and Tax Preparation for corporations.",
      },
      {
        title: "Organizational Tax Structure Advice",
        icon: "pe-7s-menu",
        description:
          "We will help you choose the right structure for your business and guide you through creating or restructuring it.",
      },
      {
        title: "Bookkeeping",
        icon: "pe-7s-notebook",
        description:
          "We strive to help you run your business seamlessly, in the background, so you don’t have to worry.",
      },
      {
        title: "Payroll",
        icon: "pe-7s-news-paper",
        description:
          "After The Fact Payroll where We instruct you on how to compute a payroll check, The taxes are then calculated by us and all the monthly, quarterly, Yearly taxes are filed with the corresponding government agencies. Or we put you in contact with one of our payroll partners and they will do individuals' checks and filings.",
      },
      // {
      //   title: "Tax services",
      //   icon: "pe-7s-piggy",
      //   description:
      //     "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
      // },
      // {
      //   title: "Tax services",
      //   icon: "pe-7s-news-paper",
      //   description:
      //     "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
      // },
      // {
      //   title: "Tax services",
      //   icon: "pe-7s-tools",
      //   description:
      //     "Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
      // },
      // {
      //   title: "Tax services",
      //   icon: "pe-7s-timer",
      //   description:
      //     "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      // },
    ],
  };
    
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Our Services"
              // description="Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform."
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
