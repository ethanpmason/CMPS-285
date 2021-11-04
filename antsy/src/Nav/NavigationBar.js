import React from "react";
import { Nav, Navbar, ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className="NavigationBar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <div className="lg">
              <span>Antsy</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="/"> Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/About"> About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Services"> Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Membership"> Membership</Nav.Link>
              </Nav.Item>
            </Nav>

            <Nav pullright>
              <ButtonToolbar>
                <Button variant="outline-warning">
                  <Nav.Item>
                    <Nav.Link href="/Login"> Login</Nav.Link>
                  </Nav.Item>
                </Button>
              </ButtonToolbar>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
