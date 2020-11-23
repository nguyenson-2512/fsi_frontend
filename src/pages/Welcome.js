import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <div className="container-first">
        <p className="title_first">Welcome to your dashboard</p>
        <p className="title_first">Meraki's Project</p>
        <Link
          to="/login"
          style={{
            color: "inherit",
            textDecoration: "inherit",
            border: "none",
            outline: "none",
          }}
        >
          <button type="submit" className="button-first">
            Login
          </button>
        </Link>
      </div>
    );
  }
}
