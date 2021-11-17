import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Button, Label } from "reactstrap";
import { AvForm, AvField, AvGroup } from "availity-reactstrap-validation";

//Import Home Button
import AccountHomeButton from "./account-home-button";

const PasswordForget = () => {
    return (
      <React.Fragment>
        {/* render home button */}
        <AccountHomeButton />
        <section className="vh-100 bg-account-pages">
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="5">
                    <Card className="account-card">
                      <CardBody>
                        <div className="text-center mt-3">
                          <h3 className="font-weight-bold">
                            <Link to="/" className="text-dark text-uppercase account-pages-logo">
                              <i className="mdi"></i>A & A Business Services
                            </Link>
                          </h3>
                          <p className="text-muted">Reset Password</p>
                        </div>
                        <div className="p-4">
                          <div className="alert alert-warning  text-center" role="alert">
                            Enter your email address and we'll send you an email with instructions to reset your password.
                          </div>
                          <AvForm>
                            <AvGroup className="form-group">
                              <Label for="email">Email</Label>
                              <AvField
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Enter Email"
                                required
                                errorMessage=""
                                validate={{
                                  required: {
                                    value: true,
                                    errorMessage: "Please enter your email",
                                  },
                                }}
                              />
                            </AvGroup>

                            <div className="d-grid mt-3">
                              <Button type="submit" className="btn btn-primary">
                                Reset your Password
                              </Button>
                            </div>
                          </AvForm>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}

export default PasswordForget;
