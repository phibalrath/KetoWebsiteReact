import React from 'react';
import RecipeCardChild from './recipe-card-child'


class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            recipe: [],
            isLoaded: false,
          
        }
    };

    async componentDidMount () {
        console.log(this.props)
        let response = await fetch("http://localhost:8080/api/recipe/all");
        let result = await response.json();
        this.setState({
            recipe: result
        })
        console.log(this.state.recipe)
    }


    // componentDidMount() {
    //     console.log("did mount")
    //     fetch("http://localhost:8080/api/recipe/all")
    //     .then(response => {
    //         response.json();
    //         console.log(response)
    //     })
    //     .then(
    //         (result) => {
    //             console.log(result)
    // //             this.setState({
    // //                 isLoaded: true,
    // //                 recipe: result
    // //             });
    //         }),
    // //         //Handle errors
    // //         (error) => {
    // //             this.setState({
    // //                 isLoaded: true,
    // //                 error
    // //             });
    // //         }
    // //     )
    // }

    // sortBy(key) {
    //     this.setState({
    //         recipe: recipe.sort((a,b) => a > b )
    //     })
    // }

    // handleChange(event) {
    //     this.setState({recipe: event.target.recipe});
    //   };

    //   handleSubmit(event) {
    //     alert(this.state.recipe);
    //     event.preventDefault();
    //   };

    // onAddToCart(recipe) {
    //     this.setState()
    // }
  
    render() {

        //import recipe array and map object to JSX
        //Each time you map the array, it will create a new instance of the card and pass on the objects in the array as props
        const renderList = () => {
            return this.state.recipe.map((recipe) => {
                //this is where you pass on props to child
                //onAddToCart={onAddToCart}
                return <RecipeCardChild recipe = {recipe} history={this.props.history}/>
            })
        }

        const onAllFilter = async () => {
            let response = await fetch("http://localhost:8080/api/recipe/all");
            let result = await response.json();
            this.setState({
                recipe: result
            })
        }

        //Change State to Dinner and automatically re-render component
        const onDinnerFilter = async () => {
            let response = await fetch("http://localhost:8080/api/recipe/all/dinner");
            let result = await response.json();
            this.setState({
                recipe: result
            })
        }

        const onLunchFilter = async () => {
            let response = await fetch("http://localhost:8080/api/recipe/all/lunch");
            let result = await response.json();
            this.setState({
                recipe: result
            })
        }

        const onSnackFilter = async () => {
            let response = await fetch("http://localhost:8080/api/recipe/all/snack");
            let result = await response.json();
            this.setState({
                recipe: result
            })
        }

        const onBreakfastFilter = async () => {
            let response = await fetch("http://localhost:8080/api/recipe/all/breakfast");
            let result = await response.json();
            this.setState({
                recipe: result
            })
        }

        const onSideFilter = async () => {
            let response = await fetch("http://localhost:8080/api/recipe/all/sides");
            let result = await response.json();
            this.setState({
                recipe: result
            })
        }
        
        const onSortByCookTime = () => {
            //LOGIC to sort
            let cookTime = this.state.recipe.sort((a, b) => a.cookTime - b.cookTime)
            this.setState({
                //cookTime is an ordered array
                recipe: cookTime
            })
        }

        const onSortByCookTimeHigh = () => {
            //LOGIC to sort
            let cookTime = this.state.recipe.sort((a, b) => b.cookTime - a.cookTime)
            this.setState({
                //cookTime is an ordered array
                recipe: cookTime
            })
        }
        
        const onSortByNumOfIngredients = () => {
            //LOGIC to sort
            let numOfIngredients = this.state.recipe.sort((a, b) => a.numberOfIngredients - b.numberOfIngredients)
            this.setState({
                //cookTime is an ordered array
                recipe: numOfIngredients
            })
        }

        const onSortByNumOfIngredientsHigh = () => {
            //LOGIC to sort
            let numOfIngredients = this.state.recipe.sort((a, b) => b.numberOfIngredients - a.numberOfIngredients)
            this.setState({
                //cookTime is an ordered array
                recipe: numOfIngredients
            })
        }

        const onSortByNumOfCarbs = () => {
            //LOGIC to sort
            let numOfCarbs = this.state.recipe.sort((a, b) => a.carbs - b.carbs)
            this.setState({
                //cookTime is an ordered array
                recipe: numOfCarbs
            })
        }

        const onSortByNumOfCarbsHigh = () => {
            //LOGIC to sort
            let numOfCarbs = this.state.recipe.sort((a, b) => b.carbs - a.carbs)
            this.setState({
                //cookTime is an ordered array
                recipe: numOfCarbs
            })
        }

        

        return(<div>
          
                <div className="row">
                    <div className="col-md-3">
                        <h2>Filter By:</h2>
                        {/* On-Click that will call a method that will update state and react will re-render to your Sort By specification */}
                            <ul id="buttons">
                                <li>
                                    <button onClick={onAllFilter} type="button" class="btn btn-outline-success" >
                                        All Recipes
                                    </button>
                                </li>
                                <li>
                                    <button onClick={onBreakfastFilter} type="button" class="btn btn-outline-success">
                                        Breakfast
                                    </button>
                                </li>
                                <li>
                                    <button onClick={onLunchFilter} type="button" class="btn btn-outline-success">
                                        Lunch
                                    </button>
                                </li>
                                <li>
                                    <button onClick={onDinnerFilter} type="button" class="btn btn-outline-success">
                                        Dinner
                                    </button>
                                </li>
                                <li>
                                    <button onClick={onSideFilter} type="button" class="btn btn-outline-success">
                                        Sides
                                    </button>
                                </li>
                                <li>
                                    <button onClick={onSnackFilter} type="button" class="btn btn-outline-success">
                                        Snack
                                    </button>
                                </li>
                            </ul>

                    </div>
                    <div className="col-md-9">
                    Sort By:
                     <button onClick={onSortByCookTime} class="btn btn-outline-success" >CookTime: Low to High</button>
                     <button onClick={onSortByCookTimeHigh} class="btn btn-outline-success">CookTime: High to Low</button>
                     <button onClick={onSortByNumOfIngredients} class="btn btn-outline-success"># of Ingredients: Low to High</button>
                     <button onClick={onSortByNumOfIngredientsHigh} class="btn btn-outline-success"># of Ingredients: High to Low</button>
                     <button onClick={onSortByNumOfCarbs} class="btn btn-outline-success"># of Carbs: Low to High</button>
                     <button onClick={onSortByNumOfCarbsHigh} class="btn btn-outline-success"># of Carbs: High to Low</button>
                     
                        
                        <div className="row">
                            {renderList()}
                        </div>
                    </div>
                </div>
          
           
            
        </div>)
    }

}

export default Recipe;