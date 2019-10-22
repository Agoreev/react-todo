import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    search: ""
  };
  onSearchType = e => {
    const search = e.target.value;
    this.setState({
      search: search
    });
    this.props.onSearchType(search);
  };

  render() {
    return (
      <input
        className="search form-control"
        onChange={this.onSearchType}
        placeholder="type to search"
        value={this.state.search}
      ></input>
    );
  }
}
