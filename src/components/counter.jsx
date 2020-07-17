import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.getCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={this.incriment}>
          Incriment
        </button>
      </React.Fragment>
    );
  }

  getCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  incriment = () => {
    console.log("clicked" + this.state.count);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
