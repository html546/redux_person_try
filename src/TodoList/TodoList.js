import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem'
import store from '../store';
import * as actions from '../action'


class TodoList extends Component {
    constructor(props) {
        super(props);
        /*  this.state = {
             lists: store.getState()
         } */
        this.state = {
            lists: store.getState()
        }
        // this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                lists: store.getState()
            })
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    handleDelete(id) {
        store.dispatch(actions.RemoveTodo(id));
        console.log(store.getState());
    }
    render() {
        return (
            <div>
                <p>文章列表如下:</p>
                <ul>
                    {
                        this.state.lists.map(item => (
                            <TodoItem key={item.id} id={item.id} text={item.text} onDelete={this.handleDelete.bind(this, item.id)} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;