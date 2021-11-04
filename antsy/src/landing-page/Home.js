import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
export default class Home extends React.Component {
  render() {
    return (
      <div className="bg">
        {" "}
         
        <div className="quote">
          <Jumbotron>
            <h1>Make your life easy!!</h1>
            <p>
              If you want to get cheque with your own time and skill then join
              with us. Because this is a medium for freelance/service workers to
              have alternative ways to find work in an already saturated market.
            </p>

            <Button variant="outline-warning">
              <Link to="/membership"> Join with us </Link>
            </Button>
            <Button variant="outline-warning">
              <Link to="/Services">Check services</Link>
            </Button>
          </Jumbotron>
        </div>
        <footer className="main-footer">
          <div className="containers">
            <div className="row">
              {/*column 1*/}
              <div className="col-md-3 col-sm-6">
                <h4>Company</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/About">About</a>
                  </li>
                  <li>
                    <a href="/Services">Services</a>
                  </li>
                  <li>
                    <a href="/Membership">Membership</a>
                  </li>
                </ul>
              </div>
              {/*column 2*/}
              <div className="col-md-3 col-sm-6">
                <h4>what we offer</h4>
                <ul className="list-unstyled">
                  <li>Plumbing</li>
                  <li>Moving</li>

                  <li>Photography</li>
                  <li>LandScaping</li>
                  <li>House-Remodeling</li>
                </ul>
              </div>
              {/*column 3*/}
              <div className="col-md-3 col-sm-6">
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li></li>
                  <li>Phone: </li>
                  <li>+1 (225) 346 - 1123</li>
                  <li>Gmail:</li>
                  <li>antsyHelpline@gmail.com</li>
                </ul>
              </div>
            </div>
            {/*Footer Bottom*/}
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()}Antsy App -All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
