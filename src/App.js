import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Recipe from './components/recipe-cards'
import NavBar from './components/navbar'
import Carousel from './components/carousel'
import HomePage from './components/homepage'
import CRUDSearch from './components/CRUDSearch';


const homePage = () => {
  return (
    <div>
        <NavBar />
        <Carousel />
        <HomePage />
    </div>
  )
}
const recipePage = () => {
  return (
    <div>
      <NavBar />
      <Recipe />
    </div>
  )
}

const addRecipe = () => {
  return (
    <div>
      <NavBar />
      <CRUDSearch />
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={homePage} />
        <Route path="/recipes" exact component={recipePage} />
        <Route path="/recipes/add" exact component={addRecipe} />
      </BrowserRouter>
    </div>
  );
}

export default App;
