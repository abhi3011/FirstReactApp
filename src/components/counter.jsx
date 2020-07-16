import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        "count":0,
     };
    render() { 
        return (
        <React.Fragment>
            <span className="badge badge-primary m-2">{this.getCount()}</span>
            <button className="btn btn-secondary btn-sm">Incriment</button>
            </React.Fragment>
            );
        };

        getCount() {
            return this.state.count === 0 ? "Zero" : this.state.count;
        }
}

export default Counter;