const MeasurementsForm = ({ 
  age, 
  weight, 
  height, 
  sex,
  handleAgeChange, 
  handleHeightChange, 
  handleWeightChange,
  handleSubmit,
  handleSexChange
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
          sex: <select value={sex} onChange={handleSexChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default MeasurementsForm