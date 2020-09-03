import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.connectToServer = this.connectToServer.bind(this);
  }
  connectToServer() {
    fetch("/");
  }
  componentDidMount() {
    this.connectToServer();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={Landing} />
          <div className="container"></div>
        </div>
      </Router>
    );
  }
}
export default App;
