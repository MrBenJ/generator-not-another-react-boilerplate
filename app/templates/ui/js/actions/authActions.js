import * as types from './actionTypes';

export function login(username, password) {
    return {
        type: types.AUTH_LOGIN,
        username,
        password
    };

}

export function logout() {
    return {
        type: types.AUTH_LOGOUT
    };
}
