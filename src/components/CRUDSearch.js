import React from 'react'
import RecipeCardChild from './recipe-card-child'
import axios from 'axios'

class CRUDSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            recipe: [],
            formData: {
                id: 0,
                name: '',
                numberOfIngredients: 0,
                cookTime: 0,
                carbs: 0,
                images: '',
                category: ''
            },
            submissionSuccess: false,
        };

      
    };

    // async componentDidMount () {
    //     let response = await fetch("http://lgit ocalhost:8080/api/recipe/all");
    //     let result = await response.json();
    //     this.setState({
    //         recipe: result
    //     })
    //     console.log(this.state.recipe)
    // }

    handleSubmit(event) {
        console.log(this.state.formData)
        console.log(event.target.values);
        event.preventDefault();
        const recipe = new FormData(event.target);
        console.log(recipe.values);

        axios.post('http://localhost:8080/api/recipe', this.state.formData).then(this.setState({submissionSuccess: true}))

    }

    // fetch item. set state to the values of fetched items. Then pass the id along with post request

    updateForm(event) {
        axios.post('http://localhost:8080/api/recipe')
    }


    render() {

        // const renderList = () => {
        //     return this.state.recipe.map((recipe) => {
        //         return <RecipeCardChild recipe = {recipe}/>
        //     })
        // }

        return (
           
                <div className="row">
                    <div className="col-md-6">
                        
                        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                            <h2 className="addTitle">Add A Recipe</h2>
                            <br />
                            
                            <div class="form-group row">
                            <div class="col-sm-10">
                                <label >Recipe Name:</label>
                                <input id="name" name="name" type="text" ref="name" value={this.state.formData.name} onChange={event => this.setState({formData: {...this.state.formData, name: event.target.value}})}/>
                            </div>
                           
                            <div class="col-sm-10">
                                <label ># of Ingredients:</label>
                                <input id="number_of_ingredients" name="number_of_ingredients" type="number" ref="number_of_ingredients" value={this.state.formData.numberOfIngredients} onChange={event => this.setState({formData: {...this.state.formData, numberOfIngredients: event.target.value}})} />
                            </div>
                          
                            <div class="col-sm-10">
                                <label >Total Cook Time:</label>
                                <input id="cook_time" name="cook_time" type="number" ref="cook_time" value={this.state.formData.cookTime} onChange={event => this.setState({formData: {...this.state.formData, cookTime: event.target.value}})} />
                            </div>
                           
                            <div class="col-sm-10">
                                <label >Total # of Carbs:</label>
                                <input id="carbs" name="carbs" type="number" ref="carbs" value={this.state.formData.carbs} onChange={event => this.setState({formData: {...this.state.formData, carbs: event.target.value}})}/>
                            </div >
                            
                            <div class="col-sm-10">
                                <label >Image URL:</label>
                                <input id="images" name="images" type="text" ref="images" value={this.state.formData.images} onChange={event => this.setState({formData: {...this.state.formData, images: event.target.value}})} />
                            </div>
                          
                            <div class="col-sm-10">
                                <label >Category of Recipe:</label>
                                <input id="category" name="category" type ="text" ref="category" value={this.state.formData.category} onChange={event => this.setState({formData: {...this.state.formData, category: event.target.value}})}/>
                            </div>
                           
                            <div class="col-sm-10">
                                <center><button type="submit">Add Recipe</button></center>
                            </div>
                            
                            {/* this whole {} must be true for this section to render.  */}
                            <div class="col-sm-10">
                                {this.state.submissionSuccess && <div>It's been submitted Successfully!</div>}
                            </div>

                            </div>
                        </form>
                    </div>

                    <div className="verticalLine">

                    </div>

                    <div className="col-md-6">
                        <center>
                            <h2 className="h2" >Example Card</h2>
                                <div id="CRUDCard" class="card" style={{width: 285, height: 450}}>
                                    <img class="card-img-top" src="https://sugarfreelondoner.com/wp-content/uploads/2018/11/Keto-Chocolate-Cake-Gluten-Free.jpg" alt="Chocolate Cake" style={{width: 285, height: 250}} />
                                    <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                         </center>
                    </div>

                    <button className="button" onClick={()=> this.deleteRecipe()} variant='danger'>Delete</button>

                </div>
            
        )
    }
}

export default CRUDSearch;