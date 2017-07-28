/* global
    describe
    expect
    it

 */

import * as authActions from './authActions';
import * as types from './actionTypes';

describe('User Auth Actions', () => {
    describe('Login', () => {
        it('returns AUTH_LOGIN action with username and password', () => {
            const expected = {
                type: types.AUTH_LOGIN,
                username: 'dr_username',
                password: 'safe_password'
            };

            const actual = authActions.login('dr_username', 'safe_password');

            expect(actual).toEqual(expected);
        });
    });

    describe('Logout', () => {
        it('returns AUTH_LOGOUT when run', () => {
            const expected = {
                type: types.AUTH_LOGOUT
            };

            const actual = authActions.logout();

            expect(actual).toEqual(expected);
        });
    })
});
