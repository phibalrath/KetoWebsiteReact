import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Recipe from './components/recipe-cards'
import NavBar from './components/navbar'
import Carousel from './components/carousel'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      {/* <Recipe /> */}
    </div>
  );
}

export default App;
