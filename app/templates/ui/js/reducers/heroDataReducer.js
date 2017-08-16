import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function fetchData(state = initialState.heroData, action) {

    switch(action.type) {

        case type.FETCH_ASYNC_HERODATA_SUCCESS: {
            return Object.assign({}, state, {dataValue: action.data});
        }

        case type.FETCH_ASYNC_HERODATA_FAILURE: {
            return Object.assign({}, state, {
                errors: state.errors.concat(action.errorMessages)
            });
        }

        default: {
            return state;
        }
    }
}
