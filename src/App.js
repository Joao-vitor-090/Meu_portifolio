import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Navtop from "./components/NavTop";

class App extends Component {
  render(){

  return (

    <div className="App">
      <header>
        <Navtop></Navtop>
      </header>
      <main>
        <Main></Main>
      </main>
    </div>
  );
}
}
export default App;
