import axios from 'axios'
const baseUrl = '/api/'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getBMR = async ( age, weight, height ) => {
  const options = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
    params: {
      age: age,
      gender: 'male',
      height: height,
      weight: weight,
      activitylevel: 'level_1'
    },
    headers: {
      'X-RapidAPI-Key': '93362f5fbdmsh8e0dfc89fd4eeffp163669jsn85b31968c91e',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };
  const response = await axios.request(options)
  return response.data
}

export default { getAll, getBMR }