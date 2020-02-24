export const REQUEST_BEERS = 'REQUEST_BEERS'
export const SUCCESS_BEERS = 'SUCCESS_BEERS'
export const FAILURE_BEERS = 'FAILURE_BEERS'
export const SELECT_PAGE = 'SELECT_PAGE'

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

function successBeers (page, data) {
    return {
        type: SUCCESS_BEERS,
        page,
        data: JSON.parse(data)
    }
}

function failureBeers (err) {
    return {
        type: FAILURE_BEERS,
        err
    }
}

function fetchBeers (page) {
    return dispatch => {
        dispatch(requestBeers(page))
        return fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=3`)
            .then(res => res.json())
            .then(json => dispatch(successBeers(page, json)))
            .catch(err => failureBeers(err))
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