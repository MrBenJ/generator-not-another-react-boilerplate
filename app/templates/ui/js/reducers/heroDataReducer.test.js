import * as type from '../actions/actionTypes';
import heroDataReducer from './heroDataReducer';

describe('heroDataReducer tests', () => {
    const data = [
        {
            "firstName": "Clark",
            "lastName": "Kent",
            "alias": "Superman"
        }, 
        {
            "firstName": "John",
            "lastName": "Stewart",
            "alias": "Green Lantern"
        }, 
        {
            "firstName": "Bruce",
            "lastName": "Wayne",
            "alias": "Batman"
        }, 
        {
            "firstName": "Matthew",
            "lastName": "Murdock",
            "alias": "Daredevil"
        }
    ];

    it('should return data after a successful fetch request', () => {
        const state = { dataValue: null, errors: [] };
        const expected = { dataValue: data, errors: [] };

        const actual = heroDataReducer(state, { type: type.FETCH_ASYNC_HERODATA_SUCCESS, data });
        expect(actual).toEqual(expected);
    });

    it('should not return data when the fetch request has failed', () => {
        const errors = 'Request failed with status code 404';
        const state = {
            dataValue: null,
            errors: []
        };
        const expected = { dataValue: null, errors: [errors] };

        const actual = heroDataReducer(state, { type: type.FETCH_ASYNC_HERODATA_FAILURE, errorMessages: errors });
        expect(actual).toEqual(expected);
    });

    it('should handle the default case', () => {
        const expected = { dataValue: null, errors: [] };

        const actual = heroDataReducer(undefined, {});
        expect(actual).toEqual(expected);
    });
});
