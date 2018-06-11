import teamService from '../services/teams'

const reducer = (store = [], action) => {
  switch (action.type) {
    case 'INIT_TEAMS':
      return action.data
    default:
      break
  }
  return store
}

export const initializeTeams = () => {
  return async (dispatch) => {
    const teams = await teamService.getAll()
    console.log('TEAMS', teams)

    dispatch({
      type: 'INIT_TEAMS',
      data: teams
    })  
  }
}

export default reducer