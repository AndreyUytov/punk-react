import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Footer (props) {
    return (
        <React.Fragment>
            <footer className='footer-page conteiner'>
                <ul className='footer-page__list'>
                    <li>
                        <NavLink exact to='/' className='footer-page__item-link'
                         activeClassName='footer-page__item-link--active'>
                            Home-Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/favourites' className='footer-page__item-link'
                         activeClassName='footer-page__item-link--active'>
                            Favourites-Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/basket' className='footer-page__item-link'
                         activeClassName='footer-page__item-link--active'>
                            Basket-Page
                        </NavLink>
                    </li>
                </ul>
                <div className='footer-page__info-block'>
                    <p>
                        это учебный проект SPA на React, Redux, с использованием Router
                    </p>
                </div>
            </footer>
        </React.Fragment>
    )
}