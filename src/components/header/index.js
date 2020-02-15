import React from 'react'
import {NavLink} from 'react-router-dom'

import Navigation from './navigation'

export default function HeaderPage (props) {
    return (
        <React.Fragment>
            <header className='conteiner header-page'>
                <NavLink exact to='/' className='header-page__title'
                 activeClassName='header-page__title--active' >
                    PUNK-API
                </NavLink>
                <Navigation />
            </header>
        </React.Fragment>
    )
}