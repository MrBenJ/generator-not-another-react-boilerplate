/* global
    describe
    it
    expect
 */

import * as types from 'js/actions/actionTypes';
import authReducer from 'js/reducers/authReducer';

describe('Auth Reducer Tests', () => {
    it('Returns a successful login', () => {
        const state = { errors: [], user: '' };
        const expected = { errors: [], user: 'admin'};
        const actual = authReducer(state, { type: types.AUTH_LOGIN_SUCCESS});
        expect(actual).toEqual(expected);
    });

    it('Returns an unsuccessful login', () => {
        const state = { errors: [], user: '' };
        const expected = {
            errors: ['Unauthorized. Please try again'],
            user: false
        };
        const actual = authReducer(state, { type: types.AUTH_LOGIN_UNAUTHORIZED});
        expect(actual).toEqual(expected);
    });

    it('Successfully logs a user out', () => {
        const state = { errors: ['Oh snap'], user: 'dingo williams' };
        const expected = { errors: [], user: false};
        const actual = authReducer(state, { type: types.AUTH_LOGOUT_SUCCESS});
        expect(actual).toEqual(expected);
    });

    it('Returns state if no-op is passed into reducer', () => {
        const expected = { errors: [], user: false};
        const actual = authReducer(undefined, { type: 'non-existant'});
        expect(actual).toEqual(expected);
    });
});
