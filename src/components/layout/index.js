import React from 'react'
import {connect} from 'react-redux'

import Header from './../header'
import Footer from './../footer'

function Layout (props) {
    return (
        <React.Fragment>
            <Header {...props}/>
            <main className='main-page conteiner'>
                {props.children}
            </main>
            <Footer {...props}/>
        </React.Fragment>
    )
}

const mapStateToProps = (store) => {
    return store  
 }

export default connect(mapStateToProps)(Layout)