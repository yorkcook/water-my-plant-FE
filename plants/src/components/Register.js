import React, { Component } from "react";

import axios from "axios";

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
      <div>
        <h1>Register</h1>
        <form onSubmit={this.addUser}>
          <div>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
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
        <button onClick={this.addUser}>Register</button>
      </div>
    );
  }
}

export default Register;
