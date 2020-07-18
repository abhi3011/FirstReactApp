import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    sum: 0,
  };

  constructor() {
    super();
    console.log("Appjs Constructor");
  }

  componentDidMount() {
    console.log("Appjs Mounted");
  }

  handleDelete = (counterId) => {
    console.log("counters delete " + counterId);
    const newCounter = this.state.counters.filter((c) => c.id !== counterId);
    let newSum = 0;
    newCounter.forEach(function (counter) {
      newSum += counter.value;
    });
    this.setState({ counters: newCounter, sum: newSum });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: newCounters, sum: 0 });
  };

  onIncriment = (counter) => {
    console.log("counter " + counter);
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;

    const newSum = this.state.sum + 1;
    this.setState({ counters: newCounters, sum: newSum });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar sum={this.state.sum} />
        <main className="container">
          <Counters
            handleReset={this.handleReset}
            onIncriment={this.onIncriment}
            handleDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
