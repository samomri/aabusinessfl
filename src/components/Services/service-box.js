import React, { Component } from "react";
import { Col} from "reactstrap";

const ServiceBox = (props) => {
    return (
      <React.Fragment>
        <Col lg="4" className="mt-4">
          <div className="services-box">
            <div className="d-flex">
              <i className={props.icon + " text-primary"}></i>
              <div className="ms-4">
                <h4>{props.title}</h4>
                <p className="pt-2 text-muted">{props.description}</p>
              </div>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
}

export default ServiceBox;
