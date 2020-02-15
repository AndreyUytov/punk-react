import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {
    Switch,
    Route,
    Link,
    useParam,
    useRouteMatch,
    useParams
} from 'react-router-dom'

const Item = (props) => {
    let {page} = useParams()
    let [html, setHtml] = useState('LOADING')
    useEffect (() => {
        setHtml(page)
    },[page])

    return (
        <>
            <p>
                this is msg from ITEM - {page}
            </p>
            <div>
                   this page is {html}
            </div>
        </>
    )
}

const CatalogList = (props) => {
    let { path, url } = useRouteMatch()
    return (
         <div>
         <Switch>
            <Route path = {`${path}`}>
                <div>
                    <p><Link to = {`${url}/1`}>TYK</Link></p>
                    <Link to = {`${url}/2`}>TYK2</Link>
                </div>
                    <div>
                        <p>{path} - this is path</p>
                        {url} - this is url
                        <Switch>
                            <Route path = {`${path}/:page`}>
                                <Item />
                            </Route>
                        </Switch>
                    </div>
            </Route> 
         </Switch>  
         </div>      
    )
}

const Catalog = (props) => {
    return (
        <>
            <CatalogList />
        </>
    )
}

export default Catalog