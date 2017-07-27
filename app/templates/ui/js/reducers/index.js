import { combineReducers } from 'redux';
import counter from './counterReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
    counter,
    auth
});

export default rootReducer;
