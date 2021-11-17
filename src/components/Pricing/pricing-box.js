import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

const PricingBox = (props) => {
    return (
      <>
        <Col lg="4">
          <div className="text-center pricing-box bg-white price-active">
            {props.pricing.isRibbon ? (
              <div className="ribbon-box">
                <span>Popular</span>
              </div>
            ) : null}
            <h4 className="text-uppercase">{props.pricing.title}</h4>
            <h1>${props.pricing.price}</h1>
            <div className="plan-features mt-5">
              <p>
                Benefit 1:{" "}
                <b className="text-primary">
                  Option 1
                </b>
              </p>
              <p>
                Benefit 2:{" "}
                <b className="text-primary">
                  Option 2
                </b>
              </p>
              <p>
                Benefit 3:{" "}
                <b className="text-primary">
                  Option 3
                </b>
              </p>
              <p>
                <b className="text-primary">
                  Option 4
                </b>{" "}
                Benefit 4
              </p>
            </div>
          </div>
        </Col>
      </>
    );
}

export default PricingBox;
