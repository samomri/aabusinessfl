import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";

const Footer = () => {

    let state = {
      footerItems: [
        {
          title: "A & A Business Services",
          links: [
            { linkTitle: "Home", link: "#home" },
          ],
        },
        {
          title: "Information",
          links: [
            { linkTitle: "About us", link: "#about" }
          ],
        },
        {
          title: "Support",
          links: [
            { linkTitle: "Contact", link: "#contact" }
          ],
        },
      ],
      isSwitchToggle: false,
    };


  
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row>
              {state.footerItems.map((item, key) => (
                <Col lg="3" className="mt-4" key={key}>
                  <h4>{item.title}</h4>
                  <div className="text-muted mt-4">
                    <ul className="list-unstyled footer-list">
                      {item.links.map((link, key) => (
                        <li key={key}>
                          <a href={link.link}>{link.linkTitle}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </footer>
        <FooterLinks />
      </React.Fragment>
    );
}

export default Footer;
