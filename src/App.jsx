import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import fitService from './services/entry'
import MeasurementsForm from './components/measurements';


function App() {
  const [bmr, setBMR] = useState(null)
  const [bmi, setBMI] = useState(null)
  const [idealWeight, setIdealWeight] = useState({
    Devine: null,
    Hawmi: null,
    Miller: null,
    Robinson: null
  })
  const [age, setAge] = useState(35)
  const [height, setHeight] = useState(200)
  const [weight, setWeight] = useState(100)
  const [submit, setSubmit] = useState(0)
  const [sex, setSex] = useState('male')


  useEffect(() => {
    const fetchData = async () => {
      const bmrResponse = await fitService.getBMR(age, weight, height, sex)
      console.log('BMR response', bmrResponse.data.BMR)
      setBMR(bmrResponse.data.BMR)

      const bmiResponse = await fitService.getBMI(age, weight, height)
      console.log('BMI response', bmiResponse.data.bmi)
      setBMI(bmiResponse.data.bmi)

      const idealWeightResponse = await fitService.getIdealWeight(height, sex)
      setIdealWeight(idealWeightResponse.data)
      console.log('idealweight', idealWeightResponse.data)
    }
    if (submit > 0) {
      fetchData()
    }
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

  const handleSexChange = (event) => {
    setSex(event.target.value)
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
          handleSexChange={handleSexChange}
          age={age}
          sex={sex}
          height={height}
          weight={weight}
        />
        <p>Basal metabolic rate: {bmr}</p>
        <p>BMI: {bmi}</p>
        <p>
          <span>Ideal Weight: Hamwi: {idealWeight.Hamwi} </span>
          <span>Devine: {idealWeight.Devine} </span>
          <span>Miller: {idealWeight.Miller} </span>
          <span>Robinson: {idealWeight.Robinson} </span>
        </p>
      </div>
    </>
  );
}

export default App