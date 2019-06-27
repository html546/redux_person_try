import React, { Component } from 'react';
import * as actions from './actions';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: store.getState()
    }
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  componentDidMount() {
    console.log(store.getState(), 123123)
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        times: store.getState()
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  handleIncrease() {
    store.dispatch(actions.increament(4))
  }
  handleDecrease() {
    if (store.getState() <= 0) {
      return false
    }
    store.dispatch(actions.decreament(3))
  }
  render() {
    return (
      <div>
        <p>Your clicked {this.state.times}</p>
        {'  '}
        <button onClick={this.handleIncrease}>Click to increase times</button>
        {'  '}
        <button onClick={this.handleDecrease}>Click to decrease times</button>
      </div>
    )
  }
}

export default App;
