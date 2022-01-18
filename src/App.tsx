import React from 'react';
import './App.css';
import Clock from './components/Clock';

let testProp: string = "Am I getting passed to the Clock component?"
let optionalProp: string = "You sure are!";
//Here we are creating two variables (testProp, optionalProp) that both have an assigned data type of string. Let's now go ahead and pass them into the call of our Clock component in App.tsx 

const App: React.FunctionComponent = () => {    //Our arrow function expression is given the name of 'App'. By including ':' after 'App', we denote that what follows the colon is the type that we are assigning to 'App'. Here, we are digging into our named import of 'React', and assigning our 'App' the type of 'FunctionComponent' (this is digging into our node modules, and more specifically, the @types packages that are installed).
  return (
    <div className="App">
      <div className="verticalCenter">
      <Clock testProp ={testProp} optionalProp={optionalProp}/>
      </div>
    </div>
  );
}

export default App;
