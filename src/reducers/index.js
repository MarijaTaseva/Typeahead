import { combineReducers } from 'redux'
import typeaheadReducer from './typeaheadReducer'


export default combineReducers({
    typeaheadCountries: typeaheadReducer
});