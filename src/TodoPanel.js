import React from 'react';
import TodoList from './TodoList/TodoList'
import AddTodo from './AddTodo/AddTodo'

function TodoPanel() {
    return (
        <div>
            我是todo的面板
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default TodoPanel;