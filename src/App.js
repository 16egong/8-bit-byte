import React from "react";
import HomePage from "./components/Page/PageWithHeader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {/* Controls the actual routing section */}
      <Switch>
        <Route path="/home">
          <HomePage title="Home" />
        </Route>
        <Route path="/about">
          <HomePage title="About" />
        </Route>
        <Route path="/contact">
          <HomePage title="Contact" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
