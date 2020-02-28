import { combineReducers } from 'redux'

import {
    REQUEST_BEERS,
    SUCCESS_BEERS,
    FAILURE_BEERS,
    SELECT_PAGE
} from './../actions'

function selectedPage (state = 1, action) {
    switch (action.type) {
        case SELECT_PAGE:
            return action.page
        default:
            return state
    }
}

function beers (state = {
    isFetching: false,
    isFailure: false,
    beers: []
}, action) {
    switch (action.type) {
        case REQUEST_BEERS:
            return Object.assign({}, state, {
                isFetching: true
              })
        case SUCCESS_BEERS:
            return Object.assign({}, state, {
                isFetching: false,
                beers: action.beers
              })
        case FAILURE_BEERS:
            return Object.assign({}, state, {
                isFetching: false,
                isFailure: true,
                err: action.err
              })
        default:
            return state
    }
}

function beersByPage (state = {}, action) {
    switch (action.type) {
        case REQUEST_BEERS:
        case FAILURE_BEERS:
        case SUCCESS_BEERS:
            return Object.assign({}, state, {
                [action.page]: beers(state[action.page], action)
              })
            default:
              return state
    }
}

const rootReducer = combineReducers({
    beersByPage,
    selectedPage
  })
  export default rootReducer