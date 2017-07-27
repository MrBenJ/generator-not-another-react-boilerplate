import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {

    switch(action.type) {

        case types.AUTH_LOGIN_SUCCESS: {
            let newState = Object.assign({}, state);
            newState.user = 'admin';
            newState.errors = [];
            return newState;
        }

        case types.AUTH_LOGIN_UNAUTHORIZED: {
            let newState = Object.assign({}, state);
            newState.user = false;
            newState.errors = [];
            newState.errors.push('Unauthorized. Please try again');
            return newState;
        }

        case types.AUTH_LOGOUT_SUCCESS: {
            let newState = Object.assign({}, state);
            newState.user = false;
            newState.errors = [];
            return newState;
        }

        default: {
            return state;
        }
    }
}
