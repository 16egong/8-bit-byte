import React from "react";
import { HomePage, AboutPage, ContactPage } from "./components/Page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./fonts/A Goblin Appears.otf";
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
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
