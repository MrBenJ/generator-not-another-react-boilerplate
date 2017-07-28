/* global
    expect
    it
    describe
*/

import * as types from './actionTypes';
import * as counterActions from './counterActions';

describe('Counter Actions', () => {
    it('Sends Increment Action', () => {
        const expected = { type: types.COUNTER_INCREMENT };
        const actual = counterActions.increment();

        expect(actual).toEqual(expected);
    });

    it('Sends Decrements Action', () => {
        const expected = { type: types.COUNTER_DECREMENT };
        const actual = counterActions.decrement();

        expect(actual).toEqual(expected);
    });

    it('Sends Reset Action', () => {
        const expected = { type: types.COUNTER_RESET };
        const actual = counterActions.reset();

        expect(actual).toEqual(expected);
    });
});
