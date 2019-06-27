import React, { Component } from "react";
import { Form } from "reactstrap";
import styled from "styled-components";
import axios from "axios";

const Header = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  width: 20%;
  margin-left: 500px;
  padding-bottom: 20px
  height: 100%;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;
  color: green;
  margin: 0 3em;
  margin-top: 20px;
  padding: 0.25em 1em;
`;

const Div = styled.div`
  margin-bottom: 20px;
`;

class Login extends Component {
  state = {
    username: "",
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
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("https://water-my-plant.herokuapp.com/plants/");
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

          <Form onSubmit={this.logIn}>
            <Div>
              <input
                type="text"
                placeholder="name"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Div>
            <div>
              <input
                type="text"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <Button onClick={this.logIn}>Login</Button>
          </Form>
        </div>
      </Header>
    );
  }
}

export default Login;
