export const getBeersById = (state, id) => {
    return state.allBeers[id]
}
  
export const getBeers = (state, page) => {
  
  if (state.beersByPage[page]) {
    return state.beersByPage[page].beersId.map((id) => {
      return getBeersById(state, id)
    })
  }
}

export function indexById (arr) {
  return Object.fromEntries(arr.reduce((res, cur) => {
      return res.set(cur.id, cur)
  }, new Map()))
}