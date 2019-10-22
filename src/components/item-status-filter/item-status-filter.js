import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  onChangeFilter = e => {
    this.props.onChangeFilter(e.target.id);
  };

  filters = ["all", "done", "active"];

  render() {
    const { currentFilter } = this.props;
    const elements = this.filters.map(filter => {
      const classNames =
        filter === currentFilter ? "btn btn-info" : "btn btn-outline-secondary";
      return (
        <button
          key={filter}
          id={filter}
          type="button"
          className={classNames}
          onClick={this.onChangeFilter}
        >
          {filter}
        </button>
      );
    });
    return <div className="btn-group item-status-filter">{elements}</div>;
  }
}
