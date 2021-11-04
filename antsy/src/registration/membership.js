import React from "react";
import "./membership.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};
const emailRegExp = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const phoneRegExp = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
export default class Membership extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",

      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state.formErrors) && this.state.firstName !== "") {
      let UserData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        password: this.state.password
      };
      axios
        .post("https://localhost:44338/api/Businesses", UserData)
        .then(response => {
          console.log(response);
          this.setState({ submitted: true });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      alert("Error: Form is invalid");
    }
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 5 ? "minimum five character required" : "";
        break;

      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum three character required" : "";
        break;

      case "email":
        formErrors.email = emailRegExp.test(value)
          ? ""
          : "entered email address is not valid";
        break;

      case "password":
        formErrors.password =
          phoneRegExp.length < 7 ? "minimum seven character required" : "";
        break;
      case "phoneNumber":
        formErrors.phoneNumber =
          value.length < 10 || value.length > 10
            ? "phone number should be XXX-XXX-XXXX"
            : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    if (this.state.submitted) {
      return (
        <Redirect
          to={{
            pathname: "/Login"
          }}
        />
      );
    } else {
      return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1> Welcome To Antsy Family</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <lable htmlFor="firstName">First Name</lable>
                <input
                  className={formErrors.firstName.length > 0 ? "error" : null}
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  required
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="lastName">
                <lable htmlFor="lastName">Last Name</lable>
                <input
                  className={formErrors.lastName.length > 0 ? "error" : null}
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  value={this.lastName}
                  onChange={this.handleChange}
                  required
                />

                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lasttName}</span>
                )}
              </div>
              <div className="phoneNumber">
                <lable htmlFor="phoneNumber">Phone Number</lable>
                <input
                  className={formErrors.phoneNumber.length > 0 ? "error" : null}
                  placeholder="XXX-XXX-XXXX"
                  type="number"
                  name="phoneNumber"
                  noValidate
                  value={this.phoneNumber}
                  onChange={this.handleChange}
                  required
                />

                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lasttName}</span>
                )}
              </div>

              <div className="email">
                <lable htmlFor="email">Email</lable>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="example.someone@gmail.com"
                  type="email"
                  name="email"
                  noValidate
                  value={this.email}
                  onChange={this.handleChange}
                  required
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="password">
                <lable htmlFor="password">Password</lable>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  value={this.password}
                  onChange={this.handleChange}
                  required
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
                <Button variant="outline-warning" onClick={this.handleSubmit}>
                  {" "}
                  Create Account{" "}
                </Button>
                <small>
                  <Link to="/Login">
                    Already member of Antsy Family ? click here..
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}
