/* global
    describe
    it
    expect
 */

import axios from 'axios';
import { put, call, takeEvery, all } from 'redux-saga/effects';

import * as types from 'js/actions/actionTypes';
import rootApiSaga, { loginSaga, logoutSaga, watchForLogin, watchForLogout } from 'js/sagas/authSaga';


describe('User Auth Sagas', () => {
    describe('Login (Successful)', () => {

        const auth = JSON.stringify({ username: 'admin', password: 'password'});
        let gen = loginSaga(auth);
        it('Handles a Successful Login', () => {
            expect(gen.next().value).toEqual(call(axios.post, '/api/login', auth));
        });

        it('Dispatches an AUTH_LOGIN_SUCCESS action after getting a response', () => {
            expect(gen.next().value).toEqual(put( {type: types.AUTH_LOGIN_SUCCESS }));
        });
    });

    describe('Login (Unauthorized)', () => {

        const auth = JSON.stringify({ username: 'bad', password: 'stuff'});
        let gen = loginSaga(auth);
        it('Dispatches an AUTH_LOGIN_UNAUTHORIZED on a failed login', () => {
            const mockError = {
                response: { status: 401}
            }
            expect(gen.next().value).toEqual(call(axios.post, '/api/login', auth));
            expect(gen.throw(mockError).value).toEqual(put({ type: types.AUTH_LOGIN_UNAUTHORIZED}));
        });
    });

     describe('Logout', () => {

        let saga = logoutSaga();
        it('Dispatches AUTH_LOGOUT_SUCCESS when a user logs out', () => {
            expect(saga.next().value).toEqual(call(axios.get, '/api/logout'));
            expect(saga.next().value).toEqual(put({ type: types.AUTH_LOGOUT_SUCCESS}));
        });

        it('Dispatches NETWORK_FAILURE action if it cannot connect', () => {
            expect(saga.throw({}).value).toEqual(put( {type: types.NETWORK_FAILURE}));
        });
    });

    describe('Watch Sagas', () => {
        it('Watches login saga', () => {
            let saga = watchForLogin();
            expect(saga.next().value).toEqual(takeEvery(types.AUTH_LOGIN, loginSaga));
        });
        it('Watches logout saga', () => {
            let saga = watchForLogout();
            expect(saga.next().value).toEqual(takeEvery(types.AUTH_LOGOUT, logoutSaga));
        });
    });

    describe('Root Auth API Saga', () => {
        it('Yields all Auth API sagas in a rootSaga', () => {

            let rootSaga = rootApiSaga();
            expect(rootSaga.next().value).toEqual(
                all([watchForLogin(), watchForLogout()]));
        });
    });

});
