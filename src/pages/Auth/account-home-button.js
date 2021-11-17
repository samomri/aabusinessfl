import React, { Component } from "react";
import { Link } from "react-router-dom";

const AccountHomeButton = () => {
  return (
    <React.Fragment>
      <div className="account-home-btn d-sm-block">
        <Link to="/" className="text-white">
          <i className="mdi mdi-home h1"></i>
        </Link>
      </div>
    </React.Fragment>
  );
}

 export default  AccountHomeButton;
