import React from 'react'
import Axios from 'axios';
import UpdateRecipe from './updateRecipe';

class RecipeCardChild extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    deleteRecipe(recipeId) {
        if(window.confirm('Are you sure?')) {
        Axios.delete(`http://localhost:8080/api/recipe/` + recipeId, this.state);
        }
        this.forceUpdate();
    }

    updateRecipeById(id) {
        // Axios.post(`http://localhost:8080/api/recipe`,
        // );

        //this will navigate to that url. not through clicks but program navigation
        this.props.history.push(`/recipes/update/${id}`)
    }

    render() {
        const renderList = () => {
            return this.state.recipe.map((recipe) => {
                //this is where you pass on props to child
                //onAddToCart={onAddToCart}
                return <UpdateRecipe recipe = {recipe}/>
            })
        }


        return (
        
       
              
                    <div className="card" style={{width: 285, height: 480}}>
                        <center><img src= {this.props.recipe.images} style={{width: 285, height: 250}} className="card-img-top" alt="Shirataki Ramen" /></center>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.recipe.name}</h5>
                                <div className="card-text">
                                    {this.props.recipe.numberOfIngredients} Ingredients |  
                                    {this.props.recipe.cookTime} Minutes | 
                                    {this.props.recipe.carbs} Carbs
                                </div> 
                             <br />
                                <a href="#" className="btn btn-primary" >Add to Meal Plan</a>
                                {/* onClick={this.props.onAddToCart(this.props.recipe)} */}
                                <button class="btn btn-danger" onClick={()=> this.deleteRecipe(this.props.recipe.id)} variant='danger'>Delete</button>
                                <button class="btn btn-danger" onClick={()=> this.updateRecipeById(this.props.recipe.id)}>Update</button>
                              
                            </div>
                    
         
        </div>
    )
    }
}

export default RecipeCardChild;