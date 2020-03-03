import React from 'react'
import PropTypes from 'prop-types'

import {removeFromBasket} from './../../actions'

function BasketList (props) {

	function onDeleteBtnItemClick (evt, id) {
		evt.preventDefault()
		props.dispatch(removeFromBasket(id))
	}

	function renderList () {
		return props.basket.map((elem,i) => {
			return (
				<li key={i}>
					<h3>{elem.name}</h3>
					<span>{elem.first_brewed}</span>
					<button type='button' className='basket-btn btn'
						onClick={(evt)=>{onDeleteBtnItemClick(evt, elem.id)}}>
						Remove item from basket
					</button>
				</li>
			)
		})
	}

	return (
		<ul className='basket-list'>
			{renderList()}
		</ul>
	)
}

export default BasketList

BasketList.propTypes = {
	basket: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired, 
}