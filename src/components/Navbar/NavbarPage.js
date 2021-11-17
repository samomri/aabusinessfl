import React, {useState} from 'react';
import { Navbar, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, Container, Collapse, Button } from "reactstrap";
import ScrollspyNav from "./scrollSpy";

//Import Stickey Header
import StickyHeader from "react-sticky-header";
import "../../../node_modules/react-sticky-header/styles.css";

const Navbar_Page = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  let navItems = [
    { id: 1, idnm: "home", navheading: "Home" },
    { id: 2, idnm: "features", navheading: "Features" },
    { id: 3, idnm: "services", navheading: "Services" },
    { id: 3, idnm: "about", navheading: "About" },
    { id: 4, idnm: "pricing", navheading: "Pricing" },
    { id: 5, idnm: "contact", navheading: "Contact" },
  ]

  const toggle = () => {
    setIsOpenMenu(!isOpenMenu)
  };

    let TargetId = navItems.map((item) => {
      return item.idnm;
    });

    return (
      <React.Fragment>
        <StickyHeader
          header={
            <Navbar expand="lg" fixed="top" className={props.navClass + " navbar-custom sticky sticky-dark centerElement"}>
              <Container>
                <NavbarBrand className="logo" href="/">
                  <i className="mdi"></i>A&A
                </NavbarBrand>

                <NavbarToggler className="p-0" onClick={() => toggle()}>
                  <i className="mdi mdi-menu"></i>
                </NavbarToggler>

                <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
                  <ScrollspyNav scrollTargetIds={TargetId} activeNavClass="active" scrollDuration="800" headerBackground="true">
                    <Nav className="navbar-nav navbar-center" id="mySidenav">
                      {navItems.map((item, key) => (
                        <NavItem key={key} className={item.navheading === "Home" ? "active" : ""}>
                          <NavLink onClick={() => toggle()} href={"#" + item.idnm}> {item.navheading}</NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </ScrollspyNav>
                  <div className="nav-button ms-auto">
                    <Nav className="navbar-right" navbar>
                      <NavItem>
                        
                          <NavLink href={"/login"}> <Button type="button" className="btn btn-primary navbar-btn btn-rounded waves-effect waves-light">
                          Login
                        </Button></NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Collapse>
              </Container>
            </Navbar>
          }
          stickyOffset={-100}
        ></StickyHeader>
      </React.Fragment>
    );
}

export default Navbar_Page;
