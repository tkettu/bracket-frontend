import axios from 'axios'
//import datafetch from './datafetch'

//const url = 'http://localhost:3001/games' //CHANGE FOR PRODUCTION => .env where test, dev and prod paths etc.
//const url = 'http://localhost:3001/groups'
//const url = "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
const baseUrl = '/api/groups'

const getAll = async () => {
  const response = await axios.get(baseUrl)
 
  return response.data
}

export default { 
  getAll
}