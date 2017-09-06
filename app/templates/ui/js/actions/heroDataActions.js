import * as type from './actionTypes';

export function loadHeroData() {
    return { type: type.FETCH_ASYNC_HERODATA }
}
