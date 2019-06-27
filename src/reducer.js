import * as ActionTypes from './actionTypes';

const reducer = (state = 0, actions) => {
    switch (actions.type) {
        case ActionTypes.INCREMENT:
            return state + actions.payload;
        case ActionTypes.DECREMENT:
            return state - actions.payload;
        default:
            return state;
    }
}

export default reducer