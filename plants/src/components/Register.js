import React, { Component } from "react";

import axios from "axios";

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

  addUser = e => {
    e.preventDefault();
    axios
      .post("https://water-my-plant.herokuapp.com/api/register", this.state)
      .then(res => {
        console.log("response", res.data);
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
              placeholder="useremail"
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
          <div>
            <input
              type="text"
              placeholder="useremail"
              name="email"
              value={this.state.email}
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
        <button>Register</button>
      </div>
    );
  }
}

export default Register;
