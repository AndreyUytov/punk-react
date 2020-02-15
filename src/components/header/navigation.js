import React from 'react' 
import {NavLink} from 'react-router-dom'


export default function NavigationPage (props) {
    return (
        <React.Fragment>
            <nav className='navigation-page'>
                <ul className='navigation-page__list'>
                    <li>
                        <NavLink to = '/favourites' className='navigation-page__item'
                          activeClassName='navigation-page__item--active'>
                            Favourites  
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = '/basket' className='navigation-page__item'
                          activeClassName='navigation-page__item--active'>
                            Basket  
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}