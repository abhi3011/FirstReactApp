import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className="badge badge-primary m-2">{this.getCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncriment(this.props.counter)}
        >
          Incriment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
