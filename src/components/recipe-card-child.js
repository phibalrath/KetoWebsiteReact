import React from 'react'

class RecipeCardChild extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    

    render() {
        return (
        
       
              
                    <div className="card" style={{width: 285, height: 450}}>
                        <center><img src= {this.props.recipe.images} style={{width: 285, height: 250}} className="card-img-top" alt="Shirataki Ramen" /></center>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.recipe.name}</h5>
                                <div className="card-text">
                                    {this.props.recipe.numberOfIngredients} Ingredients |  
                                    {this.props.recipe.cookTime} Minutes | 
                                    {this.props.recipe.carbs} Carbs
                                </div> 
                             <br />
                                <a href="#" className="btn btn-primary">Add to Meal Plan</a>
                            </div>
                    
         
        </div>
    )
    }
}

export default RecipeCardChild;