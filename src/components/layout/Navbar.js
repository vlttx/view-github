import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className="fab fa-github" />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}
