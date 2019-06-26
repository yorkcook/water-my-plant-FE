import React, { Component } from "react";

import styled from "styled-components";
import axios from "axios";

const Header = styled.div`
  background: white;
`;

class Login extends Component {
  state = {
    useremail: "",
    password: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  logIn = e => {
    e.preventDefault();
    axios
      .post("https://water-my-plant.herokuapp.com/api/login", this.state)
      .then(res => {
        console.log("response", res.data);
      })

      .catch(err => {
        console.log("error", err);
      });
  };

  render() {
    return (
      <Header>
        <div>
          <h2>Log In</h2>

          <form onSubmit={this.logIn}>
            <div>
              <input
                type="text"
                placeholder="email"
                name="useremail"
                value={this.state.useremail}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button onClick={this.logIn}>Login</button>
          </form>
        </div>
      </Header>
    );
  }
}

export default Login;
