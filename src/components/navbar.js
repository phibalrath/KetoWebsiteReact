import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {

    render() {

        return (
            <div>
                <nav class="navbar navbar-expand-lg" >
                    <a class="navbar-brand">
                        <Link to="/">
                            <div id="whiteLabel">KETO Planner</div>
                        </Link>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                     
                        <li class="nav-item">
                            <a class="nav-link">
                                <Link to="/recipes">
                                    <div id="whiteLabel">Recipe</div>
                                </Link>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link">
                                <Link to="/recipes/add">
                                    <div id="whiteLabel">Add Recipe</div>
                                </Link>
                            </a>
                        </li>

                        </ul>

                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-light" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;

