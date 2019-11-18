import React from 'react'

class RecipeCardChild extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (<div>
            
            <div className="card">
  <img src="{this.props.recipe.images}" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{this.props.recipe.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </div>)
    }
}

export default RecipeCardChild;