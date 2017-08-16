import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import watchForAsyncHeroData, {fetchAsyncHeroData} from './heroDataSaga';

import * as types from '../actions/actionTypes';

describe('fetching Data from the server', () => {

    describe('Fetch Data request successful', () => {

        let gen = fetchAsyncHeroData();

        it('should successfully find the requested data from the server', () => {
            expect(gen.next().value).toEqual(call(axios.get, '/api/heroData.json'));
        });

        it('should dispatch a FETCH_ASYNC_HERODATA_SUCCESS action after the request has been found',
        () => {
            const mockData = {};
            expect(gen.next(mockData).value).toEqual(put({type: types.FETCH_ASYNC_HERODATA_SUCCESS}));
        });

        it('should dispatch a FETCH_ASYNC_HERODATA_FAILURE action after a failed request', () => {
            const errorMessages = {
                message: 'Request failed with status code 404'
            };
            expect(gen.throw(errorMessages).value).toEqual(put({type: types.FETCH_ASYNC_HERODATA_FAILURE, errorMessages: errorMessages.message}));
        });
    });

    describe('Watch Sagas', () => {

        let gen = fetchAsyncHeroData;

        it('watches for the FETCH_ASYNC_HERODATA saga', () => {
            let saga = watchForAsyncHeroData();
            expect(saga.next().value).toEqual(takeEvery(types.FETCH_ASYNC_HERODATA, gen));
        });
    });
});
