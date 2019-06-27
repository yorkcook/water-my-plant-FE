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
    return (
      <div>
        <form onSubmit={this.addPlant}>
          <div>
            <input
              type="text"
              placeholder="Plant Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="schedule"
              name="schedule"
              value={this.state.schedule}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.addPlant}>Add Plants</button>
        </form>
      </div>
    );
  }
}

export default Plants;
