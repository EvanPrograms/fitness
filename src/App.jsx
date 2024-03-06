import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [bmr, setBMR] = useState(null);

  const age = 10;
  const weight = 100;
  const height = 200;

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        const response = await axios.request(options);
        setBMR(response.data.data.BMR);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <p>Test BMI for Age: {age}, Height: {height}, Weight: {weight}</p>
        <p>Basal metabolic rate: {bmr}</p>
      </div>
    </>
  );
}

export default App;