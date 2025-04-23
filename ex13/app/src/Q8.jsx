import React, { Component } from 'react';
class TemperatureConverter extends Component {
constructor() {
super();
this.state = { celsius: '', fahrenheit: '' };
}
handleCelsiusChange = (e) => {
const celsius = e.target.value;
const fahrenheit = (celsius * 9 / 5) + 32;
this.setState({ celsius, fahrenheit });
};
handleFahrenheitChange = (e) => {
const fahrenheit = e.target.value;
const celsius = ((fahrenheit - 32) * 5) / 9;
this.setState({ fahrenheit, celsius });
};
render() {
return (
<div>
<input type="number" placeholder="Celsius" value={this.state.celsius}
onChange={this.handleCelsiusChange} />
<p>Fahrenheit: {this.state.fahrenheit}</p>
<input type="number" placeholder="Fahrenheit" value={this.state.fahrenheit}
onChange={this.handleFahrenheitChange} />
<p>Celsius: {this.state.celsius}</p>
</div>
);
}
}
export default TemperatureConverter;