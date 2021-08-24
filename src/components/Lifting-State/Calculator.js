import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { convert, toCelsius, toFahrenheit } from './lib/lib';

class Calculator extends Component {
  state = {
    temperature: '',
    scale: 'c',
  };

  changeHandler = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onChange={this.changeHandler}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onChange={this.changeHandler}
        />

        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default Calculator;
