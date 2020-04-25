import React from "react";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  MapPage,
  DietaryPage,
} from "./components/Page";
import Page404 from "./components/Page/Page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
// Style imports
import "./fonts/A Goblin Appears.otf";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home",
    };
  }

  changeActive = (active) => {
    this.setState({ active });
  };

  render() {
    return (
      <Router>
        {/* Header goes here */}
        <Header
          active={this.state.active}
          changeActive={(page) => this.changeActive(page)}
        />
        {/* Controls the actual routing section */}
        <div className="body">
          <Switch>
            <Route exact path="/">
              <HomePage changeActive={(page) => this.changeActive(page)} />
            </Route>
            <Route path="/login">
              <LoginPage changeActive={(page) => this.changeActive(page)} />
            </Route>
            <Route path="/register">
              <RegisterPage changeActive={(page) => this.changeActive(page)} />
            </Route>
            <Route path="/map">
              <MapPage changeActive={(page) => this.changeActive(page)} />
            </Route>
            <Route path="/about">
              {/* TODO: Change this link */}
              <HomePage />
            </Route>
            <Route path="/contact">
              {/* TODO: Change this link */}
              <HomePage />
            </Route>
            <Route path="/dietary_prefences">
              <DietaryPage />
            </Route>
            <Route path="*">
              <Page404 changeActive={(page) => this.changeActive(page)} />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    );
  }
}

// Testing testing ddddd

export default App;
