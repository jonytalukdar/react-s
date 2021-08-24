import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

const TemperatureInput = ({ scale, temperature, onChange }) => {
  return (
    <div>
      <fieldset>
        <legend>Enter Temperature in {scaleNames[scale]}</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onChange(e, scale)}
        />
      </fieldset>
    </div>
  );
};

export default TemperatureInput;
