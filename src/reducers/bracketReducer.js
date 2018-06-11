import bracketService from '../services/bracket'

export const initializeBracket  = () => { 
  return async () => {
    const bracket = await bracketService.getBracket()
    console.log(bracket)
    {
      bracket
    }
  }
  
} 