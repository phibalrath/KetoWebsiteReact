import React from 'react'


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
                             <div class="jumbotron jumbotron-fluid">
                                <div class="container">
                                 <h1 class="display-4">Fluid jumbotron</h1>
                                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                </div>
                            </div>
                        </div>
                       
                        <div class="carousel-item">
                            <div class="jumbotron jumbotron-fluid">
                                <div class="container">
                                    <h1 class="display-4">Slide 2</h1>
                                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                </div>
                             </div>
                        </div>
                    
                        <div class="carousel-item">
                            <div class="jumbotron jumbotron-fluid">
                                <div class="container">
                                <h1 class="display-4">Slide 3</h1>
                                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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