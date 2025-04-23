import React from 'react';
import HelloReact from './Q1.jsx';
import HelloReactJSX from './Q1ii.jsx';
import HelloMessage from './Q1iii.jsx';
import FruitList from './Q2.jsx';
import StyledMessage from './Q3.jsx';
import SumOfSquares from './Q4.jsx';
import Greeting from './Q5.jsx';
import CurrentDay from './Q6.jsx';
import PrimeCheck from './Q7.jsx';
import TemperatureConverter from './Q8.jsx';
import ReverseAndPalindrome from './Q9.jsx';
import RandomNumber from './Q10.jsx';
import LeapYearCheck from './Q11.jsx';
import UserGreeting from './Q12.jsx';
import './App.css';
function App() {
return (
<div>
<h2>Question 1 (i): Hello React without JSX</h2>
<HelloReact />
<h2>Question 1 (ii): Hello React with JSX</h2>
<HelloReactJSX />
<h2>Question 1 (iii): Display message from a variable</h2>
<HelloMessage />
<h2>Question 2: Render a list of three fruits dynamically</h2>
<FruitList />
<h2>Question 3: Styled message using inline CSS</h2>
<StyledMessage />
<h2>Question 4: Display sum of squares of two numbers</h2>
<SumOfSquares />
<h2>Question 5: Display "Good Morning" or "Good Evening"</h2>
<Greeting />
<h2>Question 6: Display current day of the week</h2>
<CurrentDay />
<h2>Question 7: Check if a number is prime</h2>
<PrimeCheck />
<h2>Question 8: Temperature Converter (Celsius & Fahrenheit)</h2>
<TemperatureConverter />
<h2>Question 9: Reverse string and check palindrome</h2>
<ReverseAndPalindrome />
<h2>Question 10: Random number generator</h2>
<RandomNumber />
<h2>Question 11: Check if year is a leap year</h2>
<LeapYearCheck />
<h2>Question 12: User Greeting (Class Component with Props)</h2>
<UserGreeting firstName="Tarun" lastName="Srikumar" />
</div>
);
}
export default App;