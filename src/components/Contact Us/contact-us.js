import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Section Title
import SectionTitle from "../common/section-title";

const ContactUs = () => {
    return (
      <React.Fragment>
        <section className="section " id="contact">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Get In Touch"
              description="Feel free to give us a visit or a call and for your convenience fill out the form below to ask a question or submit a request."
            />

            <Row>
              <Col lg="4">
                <div className="mt-4 pt-4">
                  <p className="mt-4">
                    <span className="h5">Office Address:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      A&A Business Services Inc <br />
                      7751 Kingspointe Pkway Suite 125<br />
                      Orlando, FL 32819 <br />
                      Cell:  <a href="tel:+14073837812">(407) 383-7812</a><br />
                      Office:  <a href="tel:+14074340235">(407) 434-0235</a><br />
                      Fax:  <a href="tel:+14074423668">(407) 442-3668</a><br />
                      Email: <a href="mailto:aabusinessfl@yahoo.com">aabusinessfl@yahoo.com</a>
                    </span>
                  </p>
                  <p className="mt-4">
                    <span className="h5">Working Hours:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      9:00AM To 6:00PM
                    </span>
                  </p>
                </div>
              </Col>
              <Col lg="8">
                <div className="custom-form mt-4 pt-4">
                  <div id="message"></div>
                  <AvForm name="contact-form" id="contact-form">
                    <Row>
                      <Col lg="6">
                        <AvField
                          type="text"
                          className="form-group mt-2"
                          name="name"
                          id="name"
                          placeholder="Your name*"
                          required
                          errorMessage=""
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Please enter your name",
                            },
                          }}
                        />
                      </Col>
                      <Col lg="6">
                        <AvField
                          type="email"
                          className="form-group mt-2"
                          name="email"
                          id="email"
                          placeholder="Your email*"
                          required
                          errorMessage=""
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Please enter your email",
                            },
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <div className="form-group mt-2">
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control"
                            placeholder="Your message..."
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12" className="text-end">
                        <Button className="submitBnt btn btn-primary">
                          Send Message
                        </Button>
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </AvForm>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
}

export default ContactUs;
