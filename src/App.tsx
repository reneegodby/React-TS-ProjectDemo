import React from 'react';
import './App.css';
import './components/Clock'

const App: React.FunctionComponent = () => {    //Our arrow function expression is given the name of 'App'. By including ':' after 'App', we denote that what follows the colon is the type that we are assigning to 'App'. Here, we are digging into our named import of 'React', and assigning our 'App' the type of 'FunctionComponent' (this is digging into our node modules, and more specifically, the @types packages that are installed).
  return (
    <div className="App">
      <div className="verticalCenter">

      </div>
    </div>
  );
}

export default App;
