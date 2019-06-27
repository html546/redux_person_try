import * as ActionTypes from './ActionTypes'
const lists = [];
let id = 1;

const reducer = (state = lists, actions) => {
    switch (actions.type) {
        case ActionTypes.ADDTODO:
            return [...state, {
                id: id++,
                text: actions.text
            }]
        case ActionTypes.REMOVETODO:
            console.log(actions.id)
            return state.filter(item => (
                item.id !== actions.id
            ))
        default:
            return state;
    }
}

export default reducer;
