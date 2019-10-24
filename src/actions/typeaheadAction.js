import { WATCH_TYPEAHEAD } from './types'
import { SET_TYPEAHEAD } from './types'

export const getTypeaheadResults = query => ({
    type: WATCH_TYPEAHEAD,
    query
})

export const setTypeaheadResults = countries => ({
    type: SET_TYPEAHEAD,
    countries
})