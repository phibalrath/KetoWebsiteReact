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
                // return <div key={recipe.id}>
                //     <li>{recipe.id}</li>
                //     {/* <li>{recipe.name}</li> */}
                //     {/* <li>{recipe.cookTime}</li> */}
                //     </div>


                return <RecipeCardChild recipe = {recipe}/>
            })
        }

        // const {error, isLoaded, recipe } = this.state;
        // if(error) {
        //     return <div>Error: {error.message}</div>;
        // // // } else if (!isLoaded) {
        // // //     return <div>Loading...</div>;
        // // } else {
        //     return (
        //         <ul>
        //             {/* {recipe.map(recipes => (
        //                 <li key={recipes.id}>
        //                     {recipes.name} 
        //                     {recipes.numberOfIngredients} 
        //                     {recipes.cookTime} 
        //                     {recipes.carbs} 
        //                     {recipes.images}
        //                 </li>
        //             ))} */}
        //         </ul>
        //     );
        // }
        return(<div>
            <div className="container">
                <div className="row">
                        {renderList()}
                </div>
            </div>
        </div>)
    }

}

export default Recipe;