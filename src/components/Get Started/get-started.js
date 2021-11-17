import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const GetStarted = () => {
        return (
            <>
                <section className="section section-lg bg-get-start">
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row>
                            <Col lg={{size :8, offset:2}} className="text-center">
                                <h1 className="get-started-title text-white">Let's Get Started</h1>
                                <div className="section-title-border mt-4 bg-white"></div>
                                <p className="section-subtitle font-secondary text-white text-center pt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                <a href="tel:+1 850-228-7171" className="btn btn-success  waves-effect mt-4">Get Started <i className="mdi mdi-phone"></i> </a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
}

export default GetStarted;