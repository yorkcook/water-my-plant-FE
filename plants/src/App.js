import React, { Component } from "react";
import axios from "axios";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";
import Plants from "./components/Plants";

const Navbar = styled.nav`
  background: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  a {
    color: white;
    text-decoration: none;
    display: inline;
    margin: 20px;
  }
`;

const Name = styled.h1`
  display: flex;
  justify-content: center;
  color: red;
  margin-left: 500px;
`;

class App extends Component {
  componentDidMount() {
    axios
      .get("https://water-my-plant.herokuapp.com/")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <header>
          <Navbar>
            <Name>Water My Plants</Name>
            <nav>
              <NavLink to="/login">LogIn</NavLink>
              <NavLink to="/register">Register</NavLink>
            </nav>
          </Navbar>
        </header>

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/plants" component={Plants} />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <nav>
//           <NavLink to="/login">LogIn</NavLink>
//           <NavLink to="/register">Register</NavLink>
//         </nav>
//       </header>

//       <h1>Water My Plants</h1>
//       <Route exact path="/login" component={Login} />
//       <Route exact path="/register" component={Register} />
//     </div>
//   );
// }
