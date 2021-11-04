import React from "react";
import { Redirect } from "react-router-dom";
import{Button} from 'react-bootstrap';
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const error = {
  color: "red"
};
export const docSel = elem => document.getElementById(elem);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedIn: false,
      Error: ""
    };
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    axios
      .get("http://localhost:5000/api/Businesses/5", {
      
      })
      .then(res => {
        console.log(res);
        this.setState({ loggedIn: true });
      })
      .catch(e => {
        console.log(e);
        alert("Email or Password wrong");
      });
  };

  onChangeEmail = e => {
    this.setState({ Error: "" });
    let emailElem = docSel("emailError");
    let newEmail = e.target.value;
    this.setState({ email: newEmail });

    if (newEmail === "") {
      emailElem.innerHTML = "Please enter your email.";
    } else {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(newEmail)) {
        emailElem.innerHTML = "Please enter valid email.";
      } else {
        emailElem.innerHTML = "";
      }
    }
  };
  onChangePassword = e => this.setState({ password: e.target.value });

  render() {
    if (this.state.loggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/Home"
          }}
        />
      );
    } else {
      return (
        
        <div className="base-conatiner">
          <div className="header">Login</div>

          <div className="content">
            <div className="frm">
              <div className="frm-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
                <p style={error} id="emailError" />
              </div>
              <div className="frm-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
            </div>
          </div>
          <div className="footer">
              <Button variant="outline-warning" onClick={this.onSubmit}>
              {" "}
              Login
            </Button>
          </div>
          <Link to="/Membership">Don't have Antsy account? click here..</Link>
        </div>
      );
    }
  }
}
