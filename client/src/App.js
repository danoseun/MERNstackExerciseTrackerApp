import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavBar, CreateExercise, ExerciseList, EditExercise, CreateUser } from './components';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
      <NavBar />
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </Router>
  );
}

export default App;
