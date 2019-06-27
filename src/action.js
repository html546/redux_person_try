import * as ActionTypes from './ActionTypes';

export const AddTodo = (text) => {
    return {
        type: ActionTypes.ADDTODO,
        text: text
    }
}

export const RemoveTodo = (id) => {
    return {
        type: ActionTypes.REMOVETODO,
        id
    }
}