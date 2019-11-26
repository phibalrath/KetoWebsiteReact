import React from 'react'
import RecipeCardChild from './recipe-card-child'
import axios from 'axios'

class CRUDSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            recipe: [],
            formData: {
                name: '',
                numberOfIngredients: 0,
                cookTime: 0,
                carbs: 0,
                images: '',
                category: ''
            },
            submissionSuccess: false
        };

      
    };

    async componentDidMount () {
        let response = await fetch("http://localhost:8080/api/recipe/all");
        let result = await response.json();
        this.setState({
            recipe: result
        })
        console.log(this.state.recipe)
    }

    handleSubmit(event) {
        console.log(this.state.formData)
        console.log(event.target.values);
        event.preventDefault();
        const recipe = new FormData(event.target);
        console.log(recipe.values);

        axios.post('http://localhost:8080/api/recipe', this.state.formData).then(this.setState({submissionSuccess: true}))

    }


    render() {

        const renderList = () => {
            return this.state.recipe.map((recipe) => {
                return <RecipeCardChild recipe = {recipe}/>
            })
        }

        return (
            <div className="container">
            <div className="row">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="name">Enter Recipe Name:</label>
                    <input id="name" name="name" type="text" ref="name" value={this.state.formData.name} onChange={event => this.setState({formData: {...this.state.formData, name: event.target.value}})}/>

                    <label htmlFor="number_of_ingredients">Enter the Toatal # of Ingredients</label>
                    <input id="number_of_ingredients" name="number_of_ingredients" type="number" ref="number_of_ingredients" value={this.state.formData.numberOfIngredients} onChange={event => this.setState({formData: {...this.state.formData, numberOfIngredients: event.target.value}})} />

                    <label htmlFor="cook_time">Enter Total Cook Time</label>
                    <input id="cook_time" name="cook_time" type="number" ref="cook_time" value={this.state.formData.cookTime} onChange={event => this.setState({formData: {...this.state.formData, cookTime: event.target.value}})} />

                    <label htmlFor="carbs">Enter Total # of Carbs</label>
                    <input id="carbs" name="carbs" type="number" ref="carbs" value={this.state.formData.carbs} onChange={event => this.setState({formData: {...this.state.formData, carbs: event.target.value}})}/>

                    <label htmlFor="images">Enter the Image URL</label>
                    <input id="images" name="images" type="text" ref="images" value={this.state.formData.images} onChange={event => this.setState({formData: {...this.state.formData, images: event.target.value}})} />

                    <label htmlFor="category">Enter Category of Recipe</label>
                    <input id="category" name="category" type ="text" ref="category" value={this.state.formData.category} onChange={event => this.setState({formData: {...this.state.formData, category: event.target.value}})}/>

                    <button type="submit">Add Recipe</button>

                    {/* this whole {} must be true for this section to render.  */}
                    {this.state.submissionSuccess && <div>
                        It's been submitted Successfully!
                    </div>}
                </form>



                <div className="row">
                    {renderList()}
                </div>

                </div>
            </div>
        )
    }
}

export default CRUDSearch;