import request from 'superagent'

import {
    ADD_TO_FAVOURITES,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    REMOVE_FROM_FAVOURITES,
    SET_PAGE,
    FETCH_BEERS_INIT,
    FETCH_BEERS_SUCCESS,
    FETCH_BEERS_FAILURE
} from './../actionsTypes'

export const fetchBeersAction = async (dispatch, page) => {
    dispatch({type: FETCH_BEERS_INIT, payload: {page: page}})

    try {
        const {body} = await request.get(
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=6`
        )
        dispatch({
            type: FETCH_BEERS_SUCCESS,
            payload: {
                beers: body,
                page: page
            }
        })
    } catch (error) {
        dispatch({
            type: FETCH_BEERS_FAILURE,
            payload: error,
            error: true,
            page: page
        })
    }
}