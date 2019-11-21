import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Recipe from './components/recipe-cards'
import NavBar from './components/navbar'
import Carousel from './components/carousel'
import HomePage from './components/homepage'

const homePage = () => {
  return (
    <div>
        <NavBar />
      {/* <div className = "container">
        <div className="row">
          <div className="col-md-4">
            <p>Where the filter section will be</p>
          </div>
          <div className="col-md-8"> */}
            <Carousel />
            <HomePage />
          {/* </div>
        </div>
      </div> */}
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={homePage} />
        <Route path="/recipes" exact component={recipePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
