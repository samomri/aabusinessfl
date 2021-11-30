import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const WebsiteDescription = () => {
    return (
      <React.Fragment>
        <section className="section bg-web-desc">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="text-white">Take Your Business To The Next level</h2>
                <p className="pt-3 home-desc mx-auto">
                Our job is to treat your business like it’s our business.
                </p>
                {/* <a
                  href="#pricing"
                  className="btn btn-white mt-5 waves-effect waves-light"
                >
                  View Plan & Pricing
                </a> */}
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
}

export default WebsiteDescription;
