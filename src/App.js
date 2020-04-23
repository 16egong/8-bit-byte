import React from "react";
import { HomePage, AboutPage, ContactPage } from "./components/Page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Button from "./components/ByteButton";
// Style imports
import "./fonts/A Goblin Appears.otf";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav> */}
      {/* Controls the actual routing section */}
      <body>
        <div className="login-hero">
          <div style={{ marginBottom: 60 }}>
            <h1 className="goblin-text" style={{ textAlign: "center" }}>
              8 Bit Byte
            </h1>
            <h3 className="goblin-text" style={{ textAlign: "center" }}>
              Cook a bit to get a bite.
            </h3>
          </div>
          <Button
            label="Register"
            onClick={() => alert("Should go to Registration page")}
          />
          <div className="login-divider">
            <div className="login-divider-line"></div>
            <p className="goblin-text">OR</p>
            <div className="login-divider-line"></div>
          </div>
          <Button
            label="Login"
            onClick={() => alert("Should go to Login page")}
          />
        </div>
      </body>
      {/* <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch> */}

      <Footer />
    </Router>
  );
}

// Testing testing ddddd

export default App;
