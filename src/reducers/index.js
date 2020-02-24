import { combineReducers } from 'redux'

import {
    REQUEST_BEERS,
    SUCCESS_BEERS,
    FAILURE_BEERS,
    SELECT_PAGE
} from './../actions'

function selectedPage (state = '1', action) {
    switch (action.type) {
        case SELECT_PAGE:
            return action.page
        default:
            return state
    }
}

function beers (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case 
    }
}