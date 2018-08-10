import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Payments from "./Payments";
//import authReducer from "../reducers/authReducer";
class Header extends Component {
  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    // console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link
            to={this.props.auth ? "/survey" : "/"}
            className="brand-logo left"
          >
            Logo
          </Link>
          <ul id="nav-mobile" className="right ">
            {/* <li>
              <Link to="#">Login with Google</Link>
            </li> */}

            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(Header);
