import { SET_TYPEAHEAD } from '../actions/types'
import { Map, fromJS } from 'immutable'

const initialState = Map({
    countries: []
})

export default (state = initialState, action) => {
    switch(action.type){
        case SET_TYPEAHEAD:
            return state.merge({
                countries: fromJS(action.countries)
            })
        default:
            return state;
    }
}