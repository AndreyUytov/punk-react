import React from 'react'
import {connect} from 'react-redux'

import BasketList from './basket-list'
import {getAllBeers} from './../../selectors'

function Basket (props) {
    return (
        <>
          <div className='basket-page-wrapper'>
            {
              props.basket.length === 0 ?
              (<p>Сart is empty</p>) :
              (<BasketList {...props} />)
            }
          </div>
        </>
    )
}

const mapStateToProps = (state) => {
  return {
    basket: getAllBeers(state.basket, state)
  }
}

export default connect(mapStateToProps)(Basket)