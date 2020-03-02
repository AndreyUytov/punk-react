import { combineReducers } from 'redux'

import {indexById} from './../selectors'

import {
    REQUEST_BEERS,
    SUCCESS_BEERS,
    FAILURE_BEERS,
    SELECT_PAGE,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET
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
    beersId: []
}, action) {
    switch (action.type) {
        case REQUEST_BEERS:
            return Object.assign({}, state, {
                isFetching: true
              })
        case SUCCESS_BEERS:
            return Object.assign({}, state, {
                isFetching: false,
                beersId: action.beers.map(elem => elem.id)
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

function allBeers (state = {}, action) {
    switch (action.type) {
        case SUCCESS_BEERS: 
            return {...state, ...indexById(action.beers)}
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

function basket (state = [], action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            return [...state, action.id]
        default:
            return state
    }
}

const rootReducer = combineReducers({
    beersByPage,
    selectedPage,
    allBeers,
    basket
  })
  export default rootReducer