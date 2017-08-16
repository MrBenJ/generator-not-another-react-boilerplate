import * as types from './actionTypes';
import * as heroDataActions from './heroDataActions';

describe('fetch data actions', () => {
    it('Sends dataOnload action', () => {
        const expected = { type: types.FETCH_ASYNC_HERODATA }
        const actual = heroDataActions.loadHeroData();

        expect(actual).toEqual(expected);
    });
});
