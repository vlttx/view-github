import React from "react";
import PropTypes from "prop-types";

const User = props => {
  const { login, avatar_url, html_url } = props.user;
  return <div className="card text-center">User</div>;
};

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
