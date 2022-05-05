import {useState} from 'react'
import SidebarItem from './SidebarItem'
import Slider from './Slider'
import './App.css'

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const [selectedIndexOption, setSelectedIndexOption] = useState(0)
  const selectedOption = options[selectedIndexOption]

  function handleSliderChange(e) {
      setOptions(prevOptions => {
        return prevOptions.map((option, index) => {
          if(index != selectedIndexOption) return option 
          return {...option, value: e.target.value}
        })
      })
  }

  function getImageStyle() {
    let filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return {filter: filters.join(' ')}
  }

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()}></div>
      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <SidebarItem name={option.name} key={index} handleClick={() => setSelectedIndexOption(index)} active={selectedIndexOption == index} />
          )
        })}
      </div>
      <Slider max={selectedOption.range.max} min={selectedOption.range.min} value={selectedOption.value} handleSliderChange={handleSliderChange} />
    </div>
  )
}

export default App
