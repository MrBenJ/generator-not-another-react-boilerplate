import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';

import * as types from 'js/actions/actionTypes';

export function* fetchAsyncHeroData() {
    try {
        const fetchHeroData = yield call(axios.get, '/api/heroData.json');
        yield put({ type: types.FETCH_ASYNC_HERODATA_SUCCESS, data: fetchHeroData.data });
    } catch (e) {
        const {message} = e;
        yield put({ type: types.FETCH_ASYNC_HERODATA_FAILURE, errorMessages: message });
    }
}

export default function* watchForAsyncHeroData() {
    yield takeEvery(types.FETCH_ASYNC_HERODATA, fetchAsyncHeroData);
}
