const reducer = (state='ALL', action) => {
  console.log('FILTERIN ACTION', action)
  console.log('FILTERIN state', state)
  
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
  console.log('FILTER', filter)
  prevFilter = filter
  return  (dispatch) => {
    dispatch({
      type: 'SET_FILTER',
      filter
    })
  }
}

export default reducer