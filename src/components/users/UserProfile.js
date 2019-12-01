import React, { Component } from "react";

export default class UserProfile extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;
    return <div>{name}</div>;
  }
}
