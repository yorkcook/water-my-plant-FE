import React, { Component } from "react";
import { Button, Form } from "reactstrap";
import styled from "styled-components";

class Login extends Component {
  state = {
    useremail: "",
    password: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <Form>
          <input
            type="text"
            placeholder="email"
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

          <Button>Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
