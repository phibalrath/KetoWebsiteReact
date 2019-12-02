import React from 'react'

class RecipeCardChild extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    deleteRecipe(recipeId) {
        if(window.confirm('Are you sure?')) {
            fetch('http://localhost:8080/api/recipe/' + recipeId , {
                method: 'DELETE'
            }).then(response => response.json().then(json => {
                return json;
            }))
        }
    }

    

    render() {
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
                            </div>
                    
         
        </div>
    )
    }
}

export default RecipeCardChild;