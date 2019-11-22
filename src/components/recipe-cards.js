import React from 'react';
import RecipeCardChild from './recipe-card-child'

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            recipe: [],
            isLoaded: false
        };
    }

    async componentDidMount () {
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

  
    render() {

        //import recipe array and map object to JSX
        //Each time you map the array, it will create a new instance of the card and pass on the objects in the array as props
        const renderList = () => {
            return this.state.recipe.map((recipe) => {
                return <RecipeCardChild recipe = {recipe}/>
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

        const onSideFilter = async () => {
            let response = await fetch("http://localhost:8080/api/recipe/all/sides");
            let result = await response.json();
            this.setState({
                recipe: result
            })
        }



        const onSortByCookTime = () => {
            //LOGIC to sort
            let cookTime = this.state.recipe.sort(()=> {})
            this.setState({
                //cookTime is an ordered array
                recipe: cookTime
            })
        }

        return(<div>
          
                <div className="row">
                    <div className="col-md-3">
                        <h2>Filter By:</h2>
                        
                        <button onClick={onAllFilter}>
                            All Recipes
                        </button>
                         {/* On-Click that will call a method that will update state and react will re-render to your Sort By specification */}
                        <button onClick={onDinnerFilter}>
                            Dinner
                        </button>
                        <button onClick={onLunchFilter}>
                            Lunch
                        </button>
                        <button onClick={onSnackFilter}>
                            Snack
                        </button>
                        <button onClick={onSideFilter}>
                            Sides
                        </button>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {renderList()}
                        </div>
                    </div>
                </div>
          
           
            
        </div>)
    }

}

export default Recipe;