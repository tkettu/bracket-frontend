import axios from 'axios'
//import datafetch from './datafetch'
//const url =  'http://localhost:3001/teams'
//const url = "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
const baseUrl = '/api/teams'

const getAll = async () => {
  //const response = await datafetch.getData().teams
  const response = await axios.get(baseUrl)
  return response.data
}

export default { 
  getAll
}