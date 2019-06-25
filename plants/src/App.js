import React from "react";
import { NavLink, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/login">LogIn</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      </header>

      <h1>Water My Plants</h1>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
