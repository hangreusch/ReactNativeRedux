import {combineReducers} from 'redux';
import SearchReducer from './SearchReducer';
import SelectOrderReducer from './SelectOrderReducer';

export default combineReducers ({
    search: SearchReducer,
    selectOrder: SelectOrderReducer
});