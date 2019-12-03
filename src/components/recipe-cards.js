import React from 'react';
import RecipeCardChild from './recipe-card-child'
import Dropdown from 'react-dropdown-select'
import DropdownButton from 'react-bootstrap/DropdownButton'


class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            recipe: [],
            isLoaded: false,
            suggestions: []
        }
    };

    async componentDidMount () {
        console.log(this.props)
        let response = await fetch("http://localhost:8080/api/recipe/all");
        let result = await response.json();
        this.setState({
            recipe: result
        })
    }

    onTextChanged = () => {
        var input = document.getElementById('searchbar').value
        input = input.toLowerCase();
        console.log(input);
        
        if(input.length === 0) {
            return this.state.recipe;
        }
        if (input.length > 0) {
            const regex = new RegExp(`^${input}`);
            console.log(regex)
            var suggestions = [];
            suggestions = this.state.recipe.sort().filter(v => {
                console.log(v.name)
                // regex.test(v.name)
                return v.name.includes(input);
            
            });
            console.log(suggestions)
        }
        this.setState({
            recipe: suggestions
        }) 
        
    } 
  
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

        const renderSuggestions = () => {
            return this.state.suggestions.map((recipe) => {
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
            let response = await fetch(`http://localhost:8080/api/recipe/all/dinner`);
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

    //    const onSearchRecipeByName = () => {
    //        var input = document.getElementById('searchbar').value
           
    //        input = input.toLowerCase();
    //        var x = this.state.recipe;
           
        //    for(let i = 0; i < x.length; i++) {
        //        if(!x[i].innerHTML.toLowerCase().includes(input)) {
        //            x[i].style.display = "none";
        //        } else {  
        //            x[i].style.display="recipe-cards";
        //        }
        //    }
    //     var resArray = [];
    //        for(let i=0; i<x.length; i++) {
    //         console.log(x[i].name)
    //         console.log(input)
    //             if (x[i].name.includes(input, 0)) {
                    
    //                 resArray.push(x[i]);
    //             }
    //        }
    //        console.log(resArray)
    //        this.setState({searchResult: resArray})
    //        console.log(this.state.searchResult)
    //    }


    // const onSearchRecipeByName = (e) => {
    //     let currentList = this.state.recipe;
    //     let newList = [];

    //     newList = currentList.filter(item => {
    //         const filter = e.target.value.toLowerCase();
    //         return filter;
    //     });

    //     this.setState({
    //         recipe: newList
    //     })
    // }


        

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
                        <div className = "row" id="searchRow">
                            <input id="searchbar" type="text" name="search" placeholder="Search Recipes..." />
                                <button class= "btn btn-success" onClick={this.onTextChanged}>Search</button>
                                {/* {renderSuggestions()} */}
                        
        
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By:
                        </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button onClick={onSortByCookTime} class="dropdown-item" type="button">CookTime: Low to High</button>
                                <button onClick={onSortByCookTimeHigh} class="dropdown-item" type="button">CookTime: High to Low</button>
                                <button onClick={onSortByNumOfIngredients} class="dropdown-item"># of Ingredients: Low to High</button>
                                <button onClick={onSortByNumOfIngredientsHigh} class="dropdown-item"># of Ingredients: High to Low</button>
                                <button onClick={onSortByNumOfCarbs} class="dropdown-item"># of Carbs: Low to High</button>
                                <button onClick={onSortByNumOfCarbsHigh} class="dropdown-item"># of Carbs: High to Low</button>
                     
                            </div>
                    </div>
                    </div>
                        
                        <div className="row">
                            {renderList()}
                        </div>
                    </div>
                </div>
          
           
            
        </div>)
    }

}

export default Recipe;