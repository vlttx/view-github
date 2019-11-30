import React, { Component } from "react";

export default class User extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return <div className="card text-center">User</div>;
  }
}
