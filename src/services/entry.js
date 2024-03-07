import axios from 'axios'
const baseUrl = 'https://fitness-calculator.p.rapidapi.com'

const api_headers = {
  'X-RapidAPI-Key': '93362f5fbdmsh8e0dfc89fd4eeffp163669jsn85b31968c91e',
  'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
}

const options = {
  method: 'GET',
  url: '',
  params: {
    age: '',
    gender: '',
    height: '',
    weight: '',
    activitylevel: 'level_1'
  },
  headers: api_headers
}

const getBMR = async ( age, weight, height, sex ) => {
  options.params.age = age
  options.params.weight = weight
  options.params.height = height
  options.params.gender = sex
  options.url = `${baseUrl}/dailycalorie`
  
  const response = await axios.request(options)
  return response.data
}

const getBMI = async ( age, weight, height) => {
  options.params.age = age
  options.params.weight = weight
  options.params.height = height
  options.url = `${baseUrl}/bmi`

  const response = await axios.request(options)
  return response.data
}

const getIdealWeight = async ( height, sex ) => {
  options.params.height = height
  options.params.gender = sex
  options.url = `${baseUrl}/idealweight`


  const response = await axios.request(options)
  return response.data
}

export default { getBMR, getBMI, getIdealWeight }