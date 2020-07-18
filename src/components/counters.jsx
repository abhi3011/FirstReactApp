import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("counters delete " + counterId);
    const newCounter = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: newCounter });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map((c) => (c.value = 0));
    this.setState({ counters: newCounters });
  };

  onIncriment = (counter) => {
    console.log("counter " + counter);
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncriment={this.onIncriment}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
