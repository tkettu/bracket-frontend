
import gameService from '../services/games'

const reducer = (store = [], action) => {
  switch (action.type) {
    case 'INIT_GAMES':
      return action.data
    case 'SCORE':
    {
    
      const id = action.data.newGame.id
      const scoreChanged = store.find(a => a.id === id)
      const changedScore = { ...scoreChanged, 
              score_home: action.data.newGame.score_home,
              score_away: action.data.newGame.score_away,}
      console.log(changedScore)

      return store.map(game => game.id !== id ? game : changedScore)
    }
  }
  return store
}



const deepPick = (fields, object={}) => {
  
  
  const [first, ...remaining] = fields.split(".")
  
  return (remaining.length) ?
    deepPick(remaining.join("."), object[first]) :
    object[first]
}

//This might be dangerous and only works with certain data, should do some checking
const getAllGames = (matches) => {
  const groups = ["a", "b", "c", "d", "e", "f", "g", "h"]
  const games = groups.map(g => deepPick(g.concat(".matches"), matches ) )
  console.log(games)
  const rGames = [].concat.apply([], games)
  
  
  return rGames.sort( function(a, b) {return a.name - b.name})
}

export const initializeGames = () => {
  return async (dispatch) => {
    const matches = await gameService.getAll()
    
    const games = getAllGames(matches) 
    console.log('REAL GAMES', games)
    
    dispatch({
      type: 'INIT_GAMES',
      data: games
    })
  }
}

export const saveScores = () => {
  console.log('SAVETETAAN SCORESIT')
  
}

export const changeScore = (game, new_score_home, new_score_away) => {
  //TODO MUST chAnge game params
  //TODO and change many scores at time
  return async (dispatch) => {
    const updatedGame = {
      home: game.home,
      away: game.away,
      score_home: Number(new_score_home),
      score_away: Number( new_score_away),
      group: game.group,
      date: game.date
    } 

    const newGame= await gameService.updateGame(game.id, updatedGame)
    console.log(newGame)
    dispatch({
      type: 'SCORE',
      data: { newGame }
    })
  }
}

export default reducer