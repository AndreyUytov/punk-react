export const getBeersById = (state, id) => {
    return state.allBeers[id]
}

export function indexById (arr) {
  return Object.fromEntries(arr.reduce((res, cur) => {
      return res.set(cur.id, cur)
  }, new Map()))
}

export const getAllBeers = (beersId, state) => {
  return beersId.map((id) => {
    return getBeersById(state,id)
  })
}