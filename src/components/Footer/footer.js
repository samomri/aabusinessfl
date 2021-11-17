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
            { linkTitle: "About us", link: "#about" },
          ],
        },
        {
          title: "Information",
          links: [
            { linkTitle: "Terms & Condition", link: "#" },
            { linkTitle: "About us", link: "#" },
            { linkTitle: "Jobs", link: "#" },
            { linkTitle: "Bookmarks", link: "#" },
          ],
        },
        {
          title: "Support",
          links: [
            { linkTitle: "FAQ", link: "#" },
            { linkTitle: "Contact", link: "#" },
            { linkTitle: "Disscusion", link: "#" },
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
                          <Link to={link.link}>{link.linkTitle}</Link>
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
