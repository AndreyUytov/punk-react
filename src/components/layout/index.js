import React from 'react'
import {
  NavLink
} from 'react-router-dom'

import BasketWidget from './../widgets/basket-widget'
import logo from './../../app/logo.svg'

export default function Layout(props) {
    return (
        <>
          <header className='layout-header container'>
            <h1 className='layout-title'>
              <img src={logo} className="App-logo" alt="logo" />
              PUNK-LOGO</h1>
            <nav className='layout-nav'>
              <ul className='layout-nav-list nav-list'>
                <li>
                  <NavLink exact to = '/' className='nav-list__link link'
                   activeClassName='nav-list__link--active'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to = '/catalog' className='nav-list__link link'
                   activeClassName= 'nav-list__link--active'>
                    Catalog
                  </NavLink>
                </li>
                <li>
                  <NavLink to = '/basket' className='nav-list__link link'
                   activeClassName= 'nav-list__link--active'>
                    Basket <BasketWidget />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <main className='layout-main container'>
            {props.children}
          </main>
          <footer className='layout-footer container'>
            <ul className='layout-footer-list'>
              <li>
                24/02/20
              </li>
              <li>
                Made for FUN
              </li>
            </ul>
          </footer>
        </>
    )
}