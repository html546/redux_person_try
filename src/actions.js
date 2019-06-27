import * as ActionTypes from './actionTypes';

export const increament = (times) => {
    return {
        type: ActionTypes.INCREMENT,
        payload: times
    }
}

export const decreament = (times) => {
    return {
        type: ActionTypes.DECREMENT,
        payload: times
    }
}

