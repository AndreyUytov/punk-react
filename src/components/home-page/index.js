import React from 'react'
import { connect } from 'react-redux'

import Search from './search'
import ProductBlock from './product-block'
import Pagination from './pagination'
import {getBeers} from 'selectors'

function HomePage (props) {
    return (
        <React.Fragment>
            <Search />
            <ProductBlock {...props}/>
            <Pagination {...props}/>
        </React.Fragment>
    )
}

const mapStateToProps = (store) => {
    return {
        pageNumber: store.page,
        beers: getBeers(store, store.page),
        isLoading: store.beersByPage[store.page].isLoading,
        isError: store.beersByPage[store.page].isError
    } 
 }

export default connect (mapStateToProps)(HomePage)