import React, { Component } from 'react';
import * as actions from '../action'
import store from '../store'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleAdd() {
        store.dispatch(actions.AddTodo(this.state.value));
        this.setState({
            value: ''
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>添加</button>
            </div>
        )
    }
}

export default AddTodo;