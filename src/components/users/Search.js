import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search users"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && (
          <button class="btn btn-light btn-block" onClick={clearUsers}>
            CLEAR
          </button>
        )}
      </div>
    );
  }
}
