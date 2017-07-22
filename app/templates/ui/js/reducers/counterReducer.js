import * as types from '../actions/actionTypes';

export default function apiReducer(state = {}, action) {
    switch(action.type) {
        case types.COUNTER_INCREMENT: {
            console.log('Increment made');
            return state;
        }

        case types.COUNTER_DECREMENT: {
            console.log('Decrement called!');
            return state;
        }

        case types.COUNTER_RESET: {
            console.log('Reset called !');
            return state;
        }

        default: {
            return state;
        }
    }
}
