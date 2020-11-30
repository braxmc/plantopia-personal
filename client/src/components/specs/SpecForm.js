import React, { useState, useEffect } from 'react';

import { Form, FormInput, InputDiv, Button, CheckInput } from '../../styles/SmallFormElements';


const SpecForm = (props) => {
  const [water, setWater] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [soil, setSoil] = useState("");
  const [planting, setPlanting] = useState("");
  const [annual, setAnnual] = useState("");
  const [colors, setColors] = useState('')

  useEffect(() => {
    if (props.id) {
      setWater(props.water)
      setSunlight(props.sunlight)
      setSoil(props.soil)
      setAnnual(props.annual)
      setPlanting(props.planting)
      setColors(props.colors)
    } 
  }, [])

  const handleWaterChange = (e) => {
    setWater(e.target.value);
  }

  const handleSunlightChange = (e) => {
    setSunlight(e.target.value);
  }

  const handleSoilChange = (e) => {
    setSoil(e.target.value);
  }

  const handlePlantingChange = (e) => {
    setPlanting(e.target.value);
  }

  const handleAnnualChange = (e) => {
    setAnnual(e.target.value);
  }

  const handleColorsChange = (e) => {
    setColors(e.target.value);
  }
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.specs) {
      props.updateSpec(props.plant_id, props.id, { 
        water: water, sunlight: sunlight, soil: soil,
        planting: planting, annual: annual, colors: colors
      })
      props.toggleEdit(false)
    } else {
      props.addSpec(props.plant_id, {
        water: water, sunlight: sunlight, soil: soil,
        planting: planting, annual: annual, colors: colors
      })
      props.toggleForm(false)
    }
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputDiv>
          Water- 
          <FormInput
            label="water"
            placeholder="Does it need ot be watered?"
            name="water"
            onChange={handleWaterChange}
            value={water}
          />
        </InputDiv>
        <InputDiv>
          Sunlight Required-
          <FormInput
            label="sunlight"
            placeholder="Sunlight Required?"
            name="sunlight"
            type="number"
            onChange={handleSunlightChange}
            value={sunlight}
            />
        </InputDiv>
        <InputDiv>
          Soil/Water-
          <FormInput
            label="soil"
            placeholder="Soil/Water"
            name="soil"
            onChange={handleSoilChange}
            value={soil}
          />
        </InputDiv>
        <InputDiv>
          Date Planted-
          <FormInput
            label="planting"
            placeholder="01-01-2001"
            name="planting"
            onChange={handlePlantingChange}
            value={planting}
          />
        </InputDiv>
        <InputDiv>
          Perennial-
          <FormInput
            label="annual"
            placeholder="Annual or Perennial"
            name="annual"
            onChange={handleAnnualChange}
            value={annual}
          />
        </InputDiv>
        <InputDiv>
          Colors-
          <FormInput
            label="colors"
            placeholder="Colors"
            name="colors"
            onChange={handleColorsChange}
            value={colors}
          />
        </InputDiv>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}
export default SpecForm;