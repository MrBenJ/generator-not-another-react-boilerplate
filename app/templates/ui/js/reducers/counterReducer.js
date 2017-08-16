import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function counterReducer(state = initialState.counter , action) {

    switch(action.type) {
        case types.COUNTER_INCREMENT: {
            const newState = Object.assign({}, state);
            newState.value = newState.value + 1;
            return newState;
        }

        case types.COUNTER_DECREMENT: {
            const newState = Object.assign({}, state);
            newState.value = newState.value - 1;
            return newState;
        }

        case types.COUNTER_RESET: {
            const newState = Object.assign({}, state);
            newState.value = 0;
            return newState;
        }

        default: {
            return state;
        }
    }
}
