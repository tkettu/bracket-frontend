import bracketService from '../services/bracket'


const reducer = (store= {}, action) => {
  switch (action.type) {
    case 'INIT_BRACKET':
      return action.data
    default:
      return store
  }
}

export const submitBracket = (bracket) => {
  //Submit bracket to db
}

export const changeBracket = (game) => {
  //change bracket score without submitting
}

export const initializeBracket  = () => { 
  return async (dispatch) => {
    const bracket = await bracketService.getBracket()
    console.log(bracket)
    dispatch({
      type: 'INIT_BRACKET',
      data: bracket[0]
    })
  }  
} 

export default reducer