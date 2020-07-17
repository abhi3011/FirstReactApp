import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className="badge badge-primary m-2">{this.getCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.incriment("product")}
        >
          Incriment
        </button>
      </div>
    );
  }

  getCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  incriment = (product) => {
    console.log("clicked" + product);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
