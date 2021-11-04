import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div class="headers">
          <h1>About Us</h1>
        </div>
        <div className="text">
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Text>
                  Antsy is a website dedicated to Freelancers & Service Workers.
                  Allowing them to branch out and recieve clients from the
                  surrounding area! Antsy relies on the hard working men and
                  women to provide a trustworthy experience to the many clients
                  that navigate the website. Which they are then able to rate
                  and review whoever they hire to maintain the best experience
                  all around.
                </Card.Text>
                <Card.Footer>
                  <h3>TIME</h3>
                </Card.Footer>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Text>
                  Unlike Angie's List, we provide an outlet that extends farther
                  than just landscapers, mechanics, and plumbers. In profile
                  creation, you can customize your profile in any way you please
                  that best suits your business. You a notible artist that
                  specializes in portraits? It is as simple as uploading a few
                  images to your profile and providing your basic information.
                  Once saved you'll be all set to be seen by everyone that
                  browses the website.
                </Card.Text>
                <Card.Footer>
                  <h3>WORK</h3>
                </Card.Footer>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Text>
                  Each city is different, that's we allow clients to narrow
                  their search and find businesses wherever they are located. So
                  that when they are trying to find someone to have work done
                  they do not have to scroll past thousands of profiles that are
                  not even in their area.
                </Card.Text>
                <Card.Footer>
                  <h3>MONEY</h3>
                </Card.Footer>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <button className="button3">
          <Link to="/Services"> Get started </Link>
        </button>

        <div className="cfooter">
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
                  <li>
                    <a href="tel:+12253461123">+1 (225) 346 - 1123</a>
                  </li>
                  <li>Gmail:</li>
                  <li>
                    <a href="mailto:antsyHelpline@gmail.com? subject=subject text">
                      antsyHelpline@gmail.com
                    </a>
                  </li>
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
        </div>
      </div>
    );
  }
}
