import React from "react";
import { HomePage, AboutPage, ContactPage } from "./components/Page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./fonts/A Goblin Appears.otf";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
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

// Testing testing ddddd

export default App;
