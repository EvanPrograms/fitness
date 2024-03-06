import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import fitService from './services/entry'
import MeasurementsForm from './components/measurements';

function App() {
  const [bmr, setBMR] = useState(null)
  const [age, setAge] = useState(35)
  const [height, setHeight] = useState(200)
  const [weight, setWeight] = useState(100)
  const [submit, setSubmit] = useState(0)


  useEffect(() => {
    fitService
      .getBMR(age, weight, height)
      .then(response => {
        console.log(response.data.BMR)
        setBMR(response.data.BMR)
      })
  }, [submit])

  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }

  const handleHeightChange = (event) => {
    setHeight(event.target.value)
  }

  const handleWeightChange = (event) => {
    setWeight(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmit((prevSubmit) => prevSubmit + 1)
  }

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
        <MeasurementsForm 
          handleAgeChange={handleAgeChange}
          handleHeightChange={handleHeightChange}
          handleWeightChange={handleWeightChange}
          handleSubmit={handleSubmit}
          age={age}
          height={height}
          weight={weight}
        />
        <p>Basal metabolic rate: {bmr}</p>
      </div>
    </>
  );
}

export default App