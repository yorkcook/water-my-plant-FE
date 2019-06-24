import React, { Component } from "react";
import { Button } from "reactstrap";

class Login extends Component {
  state = {
    useremail: "",
    password: ""
  };

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form>
          <input
            type="text"
            placeholder="email"
            name="useremail"
            value={this.state.useremail}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.password}
          />
        </form>
        <Button>Login</Button>
      </div>
    );
  }
}

export default Login;
