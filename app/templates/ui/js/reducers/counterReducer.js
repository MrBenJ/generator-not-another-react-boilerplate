import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function counterReducer(state = initialState.counter , action) {
    state = Object.assign({}, state);

    switch(action.type) {
        case types.COUNTER_INCREMENT: {
            state.value = state.value + 1;
            return state;
        }

        case types.COUNTER_DECREMENT: {
            state.value = state.value - 1;
            return state;
        }

        case types.COUNTER_RESET: {
            state.value = 0;
            return state;
        }

        default: {
            return state;
        }
    }
}
