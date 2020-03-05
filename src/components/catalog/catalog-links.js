import React, {useState} from 'react'
import {
  NavLink
} from 'react-router-dom'
import PropTypes from 'prop-types'

function createPageArr (page) {
    page = +page
    if (page <= 2) {
      return [1, 2, 3]
    } else return [page - 1, page, page + 1]
}
  
function createPageList (arr, url) {
  return arr.map((elem, i) => {
      return (
      <li key={`${i}`}>
          <NavLink to={`${url}/${elem}`} className='link link-page'
          activeClassName='link-page--active'>
          {elem}
          </NavLink>
      </li>
      )
  })
}

function NavButton ({pages, setPages, prevOrNextToggle}) {
  if (prevOrNextToggle === 'prev') {
      return (
      <button className='navBtn btn'
          type='button' disabled = {pages[0] === 1 ? true : false}
          onClick = {() => setPages(pages.map( elem => elem - 1))}>
          Prev
      </button>
      )
  } else {
      return (
      <button className='navBtn btn'
          type='button'
          onClick = {() => setPages(pages.map( elem => elem + 1))}>
          Next
      </button>
      )
  }
}

export default function CatalogLinks (props) {
  const [pages, setPages] = useState(createPageArr(props.selectedPage))

  return (
      <>
      <nav className='catalog-nav'>
        <ul className='layout-nav-list nav-list'>
          <NavButton pages={pages} setPages = {setPages} prevOrNextToggle='prev' />
          {createPageList(pages, props.url)}
          <NavButton pages={pages} setPages = {setPages} />
        </ul>
      </nav>
      </>
  )
}

CatalogLinks.propTypes = {
  selectedPage: PropTypes.number,
  url: PropTypes.string.isRequired
}