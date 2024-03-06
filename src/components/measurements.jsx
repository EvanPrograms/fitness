const MeasurementsForm = ({ 
  age, 
  weight, 
  height, 
  handleAgeChange, 
  handleHeightChange, 
  handleWeightChange,
  handleSubmit
  }) => {
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          age: <input value={age} onChange={handleAgeChange}/>
        </div>
        <div>
          height: <input value={height} onChange={handleHeightChange}/>
        </div>
        <div>
          weight: <input value={weight} onChange={handleWeightChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default MeasurementsForm