import React, { Component } from "react";
import axios from "axios";

class Plants extends Component {
  state = {
    name: "",
    description: "",
    schedule: []
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addPlant = e => {
    e.preventDefault();
    axios
      .post("https://water-my-plant.herokuapp.com/plants", this.state)
      .then(res => {
        console.log("response", res.data);
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  render() {
    return <div />;
  }
}

export default Plants;
