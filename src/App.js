import React, { Component } from "react";
import './App.css';
import routes from "./routes";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

  function App() {
    return (
        <React.Fragment>      
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route path={route.path} component={route.component} key={idx} />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }

  
  export default withRouter(App);