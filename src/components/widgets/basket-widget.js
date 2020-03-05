import React from 'react'
import {connect} from 'react-redux'

function BasketWidget ({basket}) {
    return (
        <>
            {
                basket.length !==0 ? 
                (<span className='basket-widget-wrapper'>
                    <span className='basket-widget'>
                        {basket.length}
                    </span>   
                </span>) :
                ''
            }            
        </>
    )
}

const mapStateToProps = ({basket}) => ({basket})

export default connect(mapStateToProps)(BasketWidget)