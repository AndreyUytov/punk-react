import React, { useEffect } from 'react'
import {Link, Switch, Route, useParams, useRouteMatch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import {getBeers} from 'selectors'
import Pagination from './pagination'
import {fetchBeersAction} from 'actions'


function Items ({beers, dispatch}) {
    let { page } = useParams()
    console.log(page, 'from list item', typeof page === 'number')
    useEffect(() => {
        let didCancel = false
        if (!didCancel) {
            fetchBeersAction(dispatch, page)
        }

        return () => {
            didCancel=true
        }
    },[dispatch, page])
    return beers.map((elem) => {
        return (
            <li key = {elem.id} className='product-list__item item-card'>
                <img src={elem.image_url} width="300" height="500" 
                    className="item-card__img"
                    alt="изображение товара"/>
                <div className='wrapper-card'>
                    <Link to={'/beer' + elem.id} className='item-card__title-link'>
                        {elem.name}
                    </Link>
                    <p className='item-card__description'>
                        {elem.description.slice(0, 75) + '...'}
                    </p>
                    <button className='item-card__about-btn btn'
                        type='button'>
                            Подробнее
                    </button>
                    <button className='item-card__buy-btn btn'
                    type='button'>
                        Купить
                    </button>
                </div>
            </li>
        )
    })
}



function ListItems (props) {
    let { path, url } = useRouteMatch()
    
    return (
        <React.Fragment>
        <ul className='product-list'>
            <Switch>
                <Route exact path={path}>
                    <Redirect to = {`${url}/${props.pageNumber}`} />
                </Route>
                <Route path={`${path}/:page`}>
                    <Items {...props} />
                </Route>
            </Switch>
        </ul>
        <Pagination url = {url} {...props} />
        </React.Fragment>
    )
}

const mapStateToProps = (store) => {
    return {
        pageNumber: store.page,
        beers: getBeers(store, store.page)
    } 
 }

 export default connect (mapStateToProps)(ListItems)