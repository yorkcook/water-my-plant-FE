import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("https://water-my-plant.herokuapp.com/api/users")
      .then(res => {
        console.log("users", res.data);
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  updateUser = e => {
    e.preventDefault();
    axios
      .put("https://water-my-plant.herokuapp.com/api/login", this.state)
      .then(res => {
        console.log("response", res.data);
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  deleteUser = e => {
    e.preventDefault();
    axios
      .delete("https://water-my-plant.herokuapp.com/api/login", this.state)
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
        <h1>Users</h1>
        <div />
      </div>
    );
  }
}

export default Users;
