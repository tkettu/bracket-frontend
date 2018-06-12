const reducer = (state='ALL', action) => {
 
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

let prevFilter = ''

export const filterChange = (_filter) => {

  const filter = (_filter === prevFilter || _filter === 'ALL') ? 'ALL' : _filter
  prevFilter = filter
  return  (dispatch) => {
    dispatch({
      type: 'SET_FILTER',
      filter
    })
  }
}

export default reducer