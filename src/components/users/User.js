import React, { Component } from "react";

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      id: "123",
      login: "vbtx",
      avatar_url: "",
      html_url: "https"
    };
  }
  render() {
    return <div>User</div>;
  }
}
