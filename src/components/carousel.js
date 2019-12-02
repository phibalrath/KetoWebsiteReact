import React from 'react'
import {Link} from 'react-router-dom'

class Carousel extends React.Component {

    render() {

        return (
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                    <div class="carousel-inner">
                        
                        <div class="carousel-item active">
                             <div id = "jumboImageOne" class="jumbotron jumbotron-fluid">
                                <div id = "jumbotronContainerOne" class="container">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <h1 class="display-4">See it...</h1>
                                            <h1 class="display-4">Imagine it...</h1>
                                            <h1 class="display-4">Taste it...</h1>
                                            <br />
                                             <p class="lead">Welcome to KETO Plan! We are excited to help you plan your daily Keto Meals. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="carousel-item">
                            <div id = "jumboImageTwo" class="jumbotron jumbotron-fluid">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-8">

                                        </div>
                                        <div id="centerRight" class="col-md-4">
                                             <h1 class="display-4">Why Keto?</h1>
                                             <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    
                        <div class="carousel-item">
                            <div id="jumboImageThree" class="jumbotron jumbotron-fluid">
                                <div class="container" id="background">
                                    <div id="center" class="row">
                                        <div class="col-md-12" id="backgroundCenter">
                                <h1 class="display-4">Be Creative...</h1>
                                <p class="lead">Just because you're going Keto doesn't mean that you lose your dessert! There's a variety of Keto friendly snacks and desserts available!</p>
                                <div class="lead">
                                <Link to="/recipes">
                                    <button class="btn btn-success" >View Recipes</button>
                                </Link>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>

                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>

            </div>
        )
    }
}

export default Carousel;