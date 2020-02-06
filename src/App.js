// src/App.js

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    });
  }

    decrement = () => {
        this.setState(prevState => {
            return { count: prevState.count - 1 }
        });
    }

  render() {
    return (
        <div>
            <p>Count: {this.state.count}</p>
            <button className="increment" onClick={this.increment}>Increment</button>
            <button className="decrement" onClick={this.decrement}>Decrement</button>
        </div>
    )
  }
}

export default App;
