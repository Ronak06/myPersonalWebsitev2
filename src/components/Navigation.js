import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div class="ui top fixed menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/Skills" className="item">
          Skills
        </Link>
      </div>
    );
  }
}

export default Navigation;
