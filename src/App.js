import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Recipe from './components/recipe-cards'
import NavBar from './components/navbar'
import Carousel from './components/carousel'
import HomePage from './components/homepage'
import CRUDSearch from './components/CRUDSearch';
import UpdateRecipe from './components/updateRecipe';
import Footer from './components/footer';

const homePage = () => {
  return (
    <div>
        <NavBar />
        <Carousel />
        <HomePage />
        <Footer />
    </div>
  )
}
const RecipePage = (props) => {

  React.useEffect(()=> {
    console.log(props)
  }, [])
  return (
    <div>
      <NavBar />
      <Recipe onEdit={props.onEdit} history={props.history}/>
    </div>
  )
}

const addRecipe = () => {
  return (
    <div>
      <NavBar />
      <CRUDSearch  />
    </div>
  )
}

const updateRecipe = (props) => {
  return (
    <div>
      <NavBar />
      <UpdateRecipe history={props.history} match={props.match}/>
    </div>
  )
}

function App(props) {
  // let [updateRecipeId, setUpdateRecipeId] = React.useState(0);

  // //onEdit will take parameter id and set it as state (id)
  // const onEdit = (id) => {
  //   setUpdateRecipeId(id)  
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={homePage} />
        <Route path="/recipes/update/:id" exact component={updateRecipe} />

        <Route path="/recipes" exact component={RecipePage}/>
        <Route path="/recipes/add" exact component={addRecipe}/>
        
        {/* render={() => <Recipe onEdit={onEdit} />} */}
        {/* <Route path="/" exact render={(props) => <NameComponent player1Name={player1Name} player2Name={player2Name} onAddNames={onAddNames} {...props} />} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
