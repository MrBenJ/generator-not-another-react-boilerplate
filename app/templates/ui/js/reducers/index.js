import { combineReducers } from 'redux';
import counter from './counterReducer';

const rootReducer = combineReducers({
    counter
});

export default rootReducer;
