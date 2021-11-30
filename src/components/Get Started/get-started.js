import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const GetStarted = () => {
        return (
            <>
                <section className="section section-lg bg-get-start" id="pricing">
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row>
                            <Col lg={{size :8, offset:2}} className="text-center">
                                <h1 className="get-started-title text-white">Pricing</h1>
                                <div className="section-title-border mt-4 bg-white"></div>
                                <p className="section-subtitle font-secondary text-white text-center pt-4">We offer a variety of Accounting Packages and competetive rates, so feel free to contact us so we can assess your financial needs and give you a reasonable quote. </p>
                                <a href="tel:+1 850-228-7171" className="btn btn-success  waves-effect mt-4">Call Us <i className="mdi mdi-phone"></i> </a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
}

export default GetStarted;