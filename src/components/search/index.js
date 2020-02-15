import React from 'react'

export default function Search (props) {
    return (
        <div className = 'search-block'>
            <form className='search-form'>
                <input type='text' />
                <button type='submit'>Search</button>
            </form> 
        </div>
    )
}