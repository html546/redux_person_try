import React from 'react';

function TodoItem(props) {
    return (
        <div>
            <p>{props.id}</p>
            <h1>{props.text}</h1>
            <button onClick={props.onDelete}>删除</button>
        </div>
    )
}

export default TodoItem;