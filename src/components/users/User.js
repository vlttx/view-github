import React from "react";

const User = props => {
  const { login, avatar_url, html_url } = props.user;
  return <div className="card text-center">User</div>;
};

export default User;
