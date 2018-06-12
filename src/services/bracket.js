import axios from 'axios'

const baseUrl = '/api/brackets'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getBracket = async () => {
  const config = {
    headers: { 'Authorization': token }    
  }
  
  const response = await axios.get(baseUrl, config)
  //get user bracket or empty if not started
  
  
  return response.data
}

const updatebracket = (id) => {
  //Update bracket, can not update games already played
}

export default {
  getBracket,
  setToken
}