import React, { Component } from "react";

export default class Navbar extends Component {
  static defaultProps = {
    title: "Github viewer",
    icon: "fab fa-github"
  };
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}
