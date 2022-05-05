import React from 'react'

const Slider = ({ min, max, value, handleSliderChange }) => {
  return (
    <div className='slider-container'>
      <input type="range" min={min} max={max} value={value} onChange={handleSliderChange} />
    </div>
  )
}

export default Slider
