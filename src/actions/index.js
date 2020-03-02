export const REQUEST_BEERS = 'REQUEST_BEERS'
export const SUCCESS_BEERS = 'SUCCESS_BEERS'
export const FAILURE_BEERS = 'FAILURE_BEERS'
export const SELECT_PAGE = 'SELECT_PAGE'
export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'

export function addToBasket (id) {
    return {
        type: ADD_TO_BASKET,
        id
    }
}

export function removeFromBasket (id) {
    return {
        type: REMOVE_FROM_BASKET,
        id
    }
}

export function selectPage (page) {
    return {
        type: SELECT_PAGE,
        page
    }
}

function requestBeers (page) {
    return {
        type: REQUEST_BEERS,
        page
    }
}

function successBeers (page, beers) {
    return {
        type: SUCCESS_BEERS,
        page,
        beers
    }
}

function failureBeers (page, err) {
    return {
        type: FAILURE_BEERS,
        err: err.message,
        page
    }
}

function fetchBeers (page) {
    return dispatch => {
        dispatch(requestBeers(page))
        return fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=3`)
            .then(res => res.json())
            .then(json => dispatch(successBeers(page, json)))
            .catch(err => dispatch(failureBeers(page,err)))
    }
}

function shouldFetchBeers (state, page) {
    const beers = state.beersByPage[page]
    if (!beers) {
        return true
      } else if (beers.isFetching) {
        return false
      }
}

export function fetchBeersIfNeeded (page) {
    return (dispatch, getState) => {
        if (shouldFetchBeers(getState(), page)) {
            return dispatch(fetchBeers(page))
        }
    }
}