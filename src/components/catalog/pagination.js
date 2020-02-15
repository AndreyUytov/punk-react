import React, {
    useState, useEffect
} from 'react'
import { NavLink, useParams } from 'react-router-dom'

function generetePages (currentPage) {
    if(currentPage === 1) {
        return [1,2,3]
    } else return [currentPage - 1, currentPage, currentPage + 1]
}

function renderScrollBtn (pagesNumbers, setPages, isNext = true) {
    return (
        <li key = {isNext ? 'nextBtn' : 'prevBtn'}>
            <button className={isNext ? 'pagination-list__next-btn' : 'pagination-list__prev-btn'}
             type='button'
             disabled = {isNext ? false : 
             (pagesNumbers[0] < 2 ? true : false)}
             onClick = {() => onPaginationBtnClick(pagesNumbers, setPages, isNext)}>
                {isNext ? 'Next' : 'Prev'}
            </button>
        </li>
    )
}

function onPaginationBtnClick (pagesNumbers, setPages, isNext = true) {
    let newPagesNumbers = pagesNumbers.map((item) => {
        return isNext ? item + 1 : item - 1   
    })

    setPages(newPagesNumbers)
}

function renderPages (pageNumbers, url) {
    return pageNumbers.map((elem) => {
        return (
            <li key = {elem}>
                <NavLink to={`${url}/${elem}`} className='pagination-list__item'
                activeClassName="pagination-list__item--active"
                >
                    {elem}  
                </NavLink>
            </li>
        )
    })
}

export default function Pagination ({url, pageNumber, dispatch}) { 
    
    let { page } = useParams()
    console.log(page, 'from pagination', typeof page === 'number')
    
    let pagesNumbers = generetePages(page)
    const [pages, setPages] = useState(pagesNumbers)
    useEffect(() => {
        if(toString(pageNumber) !== page) {
            dispatch({type: 'SET_PAGE', payload: {page: +page}})
        }
    }, [page])
    return (
        <React.Fragment>
            <ul className='pagination-list'>
                {renderScrollBtn(pages, setPages, false)}
                {renderPages(pages, url)}
                {renderScrollBtn(pages, setPages, true)}
            </ul>
        </React.Fragment>
    )
}