import axios from 'axios';
import { takeEvery, call, all, put } from 'redux-saga/effects';

import * as types from 'js/actions/actionTypes';

export function* loginSaga(auth) {

    try {
        yield call(axios.post, '/api/login', auth);
        yield put({ type: types.AUTH_LOGIN_SUCCESS });
    } catch(e) {
        const {status} = e.response;
        if(status === 401) {
            // Unauthorized!
            yield put({type: types.AUTH_LOGIN_UNAUTHORIZED })
        }

    }

}

export function* logoutSaga() {
    try {
        yield call(axios.get, '/api/logout');
        yield put({ type: types.AUTH_LOGOUT_SUCCESS });
    } catch(e) {
        yield put({type: types.NETWORK_FAILURE });
    }
}
export function* watchForLogin() {
    yield takeEvery(types.AUTH_LOGIN, loginSaga);
}

export function* watchForLogout() {
    yield takeEvery(types.AUTH_LOGOUT, logoutSaga);
}

export default function* rootApiSaga() {
    yield all([
        watchForLogin(),
        watchForLogout()
    ]);
}
