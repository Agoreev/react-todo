import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  onSearchType = e => {
    this.props.onSearchType(e.target.value);
  };

  render() {
    return (
      <input
        className="search form-control"
        onChange={this.onSearchType}
        placeholder="type to search"
      ></input>
    );
  }
}
