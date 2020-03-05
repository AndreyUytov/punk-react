import React, {useEffect} from 'react'
import {
  Switch,
  Route,
  useParams
} from 'react-router-dom'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import {selectPage, fetchBeersIfNeeded, addToBasket} from './../../actions'

function BeersList ({beers, dispatch, basket}) {
  function onBuyBtnClick (evt, id) {
    evt.preventDefault()
    dispatch(addToBasket(id))
  }

  return beers.map((elem, i) => {
    return (
      <li key ={i} className='cart'>
        <Link to={`/item/${elem.id}`} className='cart__title link'>{elem.name}</Link>
        <div className='img-wrapper'>
          <img className='catalog-beers__img' src={elem.image_url}
            alt = 'item pic'/>
          <div className='cart-param'>
            <p><b>First brewed:</b> {elem.first_brewed}</p>
            <p><b>Volume:</b> {elem.volume.value} {elem.volume.unit}</p>
            <p><b>Tags:</b> {elem.tagline}</p>
            <p><b>Description:</b> {`${elem.description.slice(0,100)} ...`} 
                <Link to={`/item/${elem.id}`} className='link cart-param__link'>...more</Link>
            </p>
            {
              basket.includes(elem.id) ? 
            (<Link to='/basket' className='buy-beer-btn btn'>Place your order</Link>) :
              (<button onClick={(evt) => onBuyBtnClick(evt, elem.id)}
              type='button' className='buy-beer-btn btn'>Add to Basket</button>)
            }            
          </div>
        </div>
      </li>
    )
  })
}
  
export default function CatalogBeers (props) {
  const {path, selectedPage, dispatch, beers, isFetching, isFailure} = props
  let {pageNumber} = useParams()
  pageNumber = +pageNumber
  useEffect(() => {
    dispatch(fetchBeersIfNeeded(pageNumber))
    if (pageNumber !== selectedPage) {
      dispatch(selectPage(pageNumber))
    }
  }, [pageNumber, selectedPage, dispatch])

  function renderBeerList () {
    if (isFetching && beers.length === 0) {
      return (
        <h2>...Loading</h2>
      )
    } else if (isFailure) {
      return (
        <h2>Something wrong!</h2>
      )
    } else {
      return (
        <BeersList {...props}/>
      )
    }
  }



  return (
    <Switch>
      <Route path={`${path}/:pageNumber`}>
        <ul className='catalog-beers__list'>
          {renderBeerList()}
        </ul>
      </Route>
    </Switch>
  )
}

CatalogBeers.propTypes = {
  path: PropTypes.string.isRequired, 
  selectedPage: PropTypes.number.isRequired, 
  dispatch: PropTypes.func.isRequired, 
  beers: PropTypes.array.isRequired, 
  isFetching: PropTypes.bool.isRequired, 
  isFailure: PropTypes.bool.isRequired,
  basket: PropTypes.array.isRequired
}