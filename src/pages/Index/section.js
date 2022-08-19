import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal

const Section = () => {
    return (
      <>
        <section className="section bg-home home-half" id="home">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col
                lg={{ size: 8, offset: 2 }}
                className="text-white text-center"
              >
                <h4 className="home-small-title">You don't have to be a tax expert</h4>
                <h4 className="home-small-title">That's Our Job</h4>
                <h1 className="home-title">A&A Business Services</h1>
                <p className="pt-3 home-desc mx-auto">
                Accounting, taxes and bookkeeping Company.
                </p>
                <p className=" mt-4 mb-4">
                  <a
                    href="#contact"
                    className="btn btn-success waves-effect mt-4"
                  >
                    Contact Us
                  </a>
                </p>
              </Col>
              {/* Render ModalSection Component for Modal */}
            </Row>
          </Container>
          <div className="wave-effect wave-anim">
            <div className="waves-shape shape-one">
              <div
                className="wave wave-one"
                style={{
                  backgroundImage: `url(assets/images/wave-shape/wave1.png)`,
                }}
              ></div>
            </div>
            <div className="waves-shape shape-two">
              <div
                className="wave wave-two"
                style={{
                  backgroundImage: `url(assets/images/wave-shape/wave2.png)`,
                }}
              ></div>
            </div>
            <div className="waves-shape shape-three">
              <div
                className="wave wave-three"
                style={{
                  backgroundImage: `url(assets/images/wave-shape/wave3.png)`,
                }}
              ></div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Section;
