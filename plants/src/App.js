import React, { Component } from "react";
import axios from "axios";
import { NavLink, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";

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
          <nav>
            <NavLink to="/login">LogIn</NavLink>
            <NavLink to="/register">Register</NavLink>
          </nav>
        </header>

        <h1>Water My Plants</h1>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/users" component={Users} />
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
