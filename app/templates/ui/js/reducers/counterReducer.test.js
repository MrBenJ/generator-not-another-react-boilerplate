/* global
    describe
    it
    expect
*/

import counterReducer from './counterReducer';
import * as types from 'js/actions/actionTypes';

describe('Counter Reducer Tests', () => {

    it('Increments', () => {
        let state = { value: 0 };
        const expected = { value: 1 };

        const actual = counterReducer(
            state,
            { type: types.COUNTER_INCREMENT }
        );
        expect(actual).toEqual(expected);
    });

    it('Decrements', () => {
        let state = { value: 50 };
        const expected = { value: 49 };

        const actual = counterReducer(
            state,
            { type: types.COUNTER_DECREMENT }
        );
        expect(actual).toEqual(expected);
    });

    it('Resets', () => {
        let state = { value: 234 };
        const expected = { value: 0 };

        const actual = counterReducer(
            state,
            { type: types.COUNTER_RESET }
        );
        expect(actual).toEqual(expected);
    });

    it('Handles the default case', () => {
        let state = { value: 0 };
        const expected = { value: 0 };

        const actual = counterReducer(
            state,
            { type: 'NO_OP' }
        );
        expect(actual).toEqual(expected);
    });

    it('Gets initial state if no state is passed in', () => {

        const expected = { value: 1 };

        const actual = counterReducer(
            undefined,
            { type: types.COUNTER_INCREMENT }
        );
        expect(actual).toEqual(expected);
    });
});
