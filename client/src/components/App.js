import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import "materialize-css";
import { connect } from "react-redux";
import * as actions from "../actions";
import "materialize-css/dist/css/materialize.min.css";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const Survey = () => <h2>survey</h2>;
//const Landing = () => <h2>Landing</h2>;


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact={true} path="/" component={Landing} />
            <Route exact path="/surveys" component={Survey} />
            <Route exact path="/surveys/new" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            {/* <Route exact path="/header" component={Header} /> */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
