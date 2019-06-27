import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;
  color: green;
  margin: 0 3em;
  margin-top: 20px;
  padding: 0.25em 1em;
`;

const Header = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  width: 20%;
  margin-left: 500px;
  padding-bottom: 20px
  height: 100%;
`;

const Div = styled.div`
  margin-bottom: 20px;
`;

class Register extends Component {
  state = {
    username: "",
    password: "",
    phone: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addUser = e => {
    e.preventDefault();
    axios
      .post("https://water-my-plant.herokuapp.com/api/register", this.state)
      .then(res => {
        console.log("response", res.data);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("./users");
      })

      .catch(err => {
        console.log("error", err);
      });
  };

  render() {
    return (
      <Header>
        <div>
          <h1>Register</h1>
          <form onSubmit={this.addUser}>
            <Div>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Div>
            <Div>
              <input
                type="text"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Div>
            <div>
              <input
                type="text"
                placeholder="phonenumber"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </div>
          </form>
          <Button onClick={this.addUser}>Register</Button>
        </div>
      </Header>
    );
  }
}

export default Register;
