import axios from 'axios'

const baseUrl = '/api/brackets'

let token = null

const setToken = (newToken) => {
  console.log(newToken)
  
  token = `bearer ${newToken}`
}



const getBracket = async () => {
  const config = {
    headers: { 'Authorization': token }    
  }
  console.log(config)
  const response = await axios.get(baseUrl, config)
  //get user bracket or empty if not started
  console.log(response)
  
  return response.data
}

const updatebracket = (id) => {
  //Update bracket, can not update games already played
}

export default {
  getBracket,
  setToken
}