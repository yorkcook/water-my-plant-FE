import React, { Component } from "react";
import { Button } from "reactstrap";

class Register extends Component {
  state = {
    useremail: "",
    password: "",
    email: "",
    phone: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>test</h1>
        <form>
          <input
            type="text"
            placeholder="useremail"
            name="useremail"
            value={this.state.useremail}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="useremail"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="phonenumber"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </form>
        <Button>Register</Button>
      </div>
    );
  }
}

export default Register;
