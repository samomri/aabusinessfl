import React, { Component } from "react";
import { Col } from "reactstrap";

const TeamBox = (props) => {
    return (
      <React.Fragment>
        <Col lg="3" sm="6">
          <div className="team-box text-center">
            <div className="team-wrapper">
              <div className="team-member">
                <img
                  alt=""
                  src={props.image}
                  width="150"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <h4 className="team-name">{props.name}</h4>
            <p className="text-uppercase team-designation">{props.post}</p>
          </div>
        </Col>
      </React.Fragment>
    );
}

export default TeamBox;
