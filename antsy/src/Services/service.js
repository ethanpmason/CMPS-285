import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../Services/service.css";

export default class services extends React.Component {
  viewService() {
    window.location.href = "./Login";
  }
  constructor(props) {
    super(props);

    const services = [
      {
        id: 0,
        Mover_src: require("../assets/plumber.jpg"),
        title: "Plumbing Services",
        overview:
          "Plumbers have the ability to repair and replace piping. Whether you need a leak fixed or pipes unclogged."
      },
      {
        id: 1,
        Mover_src: require("../assets/Mover.jpg"),
        title: "Moving Services",
        overview:
          "After a thorough estimate of your moving needs, your professional movers will arrive with boxes, tape, and everything you need to move your belongings safely and securely.Our movers serve a wide area,and can get you across the state."
      },
      {
        id: 2,
        Mover_src: require("../assets/kitchenc.jpg"),
        title: "Electrician",
        overview:
          "Electricians generally focus on either construction or maintenance, although many do both.Electricians specializing in construction primarily install wiring systems into factories, businesses, and new homes."
      },

      {
        id: 3,
        Mover_src: require("../assets/grass.jpg"),
        title: "Landscaping",
        overview:
          "Landscapers take care of a variety of different tasks such as edging, gardening, raking, mowing, trimming, planting, digging, and mulching.  "
      },
      {
        id: 4,
        Mover_src: require("../assets/paints.jpg"),
        title: "House Remodeling",
        overview:
          "Kitchen Remodel, Major Home Repairs,  Bathroom Remodel, Major Renovation - Multiple Rooms And also painting"
      },
      {
        id: 5,
        Mover_src: require("../assets/Artist.jpg"),
        title: "Artist",
        overview:
          "Artists provide a wide range of different services depending on what you may need done: digital artwork, canvas.  "
      },
      {
        id: 6,
        Mover_src: require("../assets/Animators.jpg"),
        title: "Animators",
        overview:
          "Struggle to explain your product? Have a complex software you need to demo? Want your target audience to retain information about your brand?Everyone has a story to tell. Yours is much more powerful than you know.We bring your brand to life and make the intangible tangible.  "
      },
      {
        id: 7,
        Mover_src: require("../assets/photography.jpg"),
        title: "Photography",
        overview:
          "Our team of professional photographers has years of experience shoots people and products that capture our clients’ unique personality, show customer engagement and highlight product details. Since you can’t meet each potential new online lead in person, professional, high-resolution photos are absolutely essential to making a positive first impression.     "
      },
      {
        id: 8,
        Mover_src: require("../assets/logo.jpg"),
        title: "Logo Design & Branding",
        overview:
          "Take into account every detail of your business. Creating a brand that completely encompasses what you want your business to represent. "
      }
    ];

    var serviceRows = [];
    services.forEach(service => {
      console.log(service.title);
      const serviceRow = (
        <table key={service.id}>
          <tbody>
            <tr>
              <td>
                <div className="box">
                  <img alt="Mover" width="220" src={service.Mover_src} />
                </div>
              </td>
              <td>
                <div className="box1">
                  <h3>{service.title}</h3>
                  <p>{service.overview}</p>
                  <Button className="outline">
                    <Link to="/Login"> Get started </Link>
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      );
      serviceRows.push(serviceRow);
    });
    this.state = { rows: serviceRows };
  }

  render() {
    return (
      <div className="br">
        <div className="container">
          <section>
            <h1 className="text-center text-info w-responsive mx-auto mb-5">
              Quick available services:-
            </h1>

            <div className="row">
              <div className="col-2">
                <button className="pb" onClick={this.viewService} />

                <p className="text-uppercase text-center">Plumbing Service</p>
              </div>

              <div className="col-3">
                <button className="mov" onClick={this.viewService} />

                <p className="text-uppercase text-center">Moving Service</p>
              </div>

              <div className="col-2">
                <button className="bth" onClick={this.viewService} />

                <p className="text-uppercase text-center ">Photography</p>
              </div>

              <div className="col-2">
                <button className="gra" onClick={this.viewService} />
                <p className="text-uppercase text-center">LandScaping</p>
              </div>

              <div className="col-1">
                <button className="pnt" onClick={this.viewService} />
                <p className="text-uppercase text-center ">
                  House-Remodeling Service
                </p>
              </div>
            </div>
          </section>
          <div>
            <h3>Detail information about offered services:</h3>
            {this.state.rows}
          </div>
        </div>
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
