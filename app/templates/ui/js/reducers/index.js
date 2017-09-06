import { combineReducers } from 'redux';
import counter from './counterReducer';
import auth from './authReducer';
import heroData from './heroDataReducer';

const rootReducer = combineReducers({
    counter,
    auth,
    heroData
});

export default rootReducer;
