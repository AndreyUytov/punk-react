import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import {removeFromBasket} from './../../actions'

function BasketList (props) {

	function onDeleteBtnItemClick (evt, id) {
		evt.preventDefault()
		props.dispatch(removeFromBasket(id))
	}

	function renderList () {
		return props.basket.map((elem,i) => {
			return (
				<li key={i} className='basket__item'>
					<span>{i + 1}</span>
					<Link to={`/item/${elem.id}`} className='cart__title link'>{elem.name}</Link>
					<span>{elem.volume.value} {elem.volume.unit}</span>
					<button type='button' className='basket-btn basket-btn--remove btn'
						onClick={(evt)=>{onDeleteBtnItemClick(evt, elem.id)}}>
						Remove item from basket
					</button>
					<button type='button' className='basket-btn basket-btn--order btn'>Order</button>
				</li>
			)
		})
	}

	return (
		<>
			<ul className='basket-list'>
				{renderList()}
			</ul>
			<div className='basket-form-wrapper'>
				<button className='btn basket-btn--submit-order'>Submit order</button>
			</div>
		</>
		
	)
}

export default BasketList

BasketList.propTypes = {
	basket: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired, 
}