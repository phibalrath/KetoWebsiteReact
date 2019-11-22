import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                <div className="containerHome">
                    <img src="https://cdn.ruled.me/wp-content/uploads/2013/10/keto-bacon-and-eggs-featured.jpg" alt="Bacon&Eggs" class="imageOne" />
                    <div className="middle">
                        <div className="text">Breakfast</div>
                    </div>
                </div>

                <div className="containerHome">
                    <img src="http://thehealthygrub.com/wp-content/uploads/2017/06/Keto-Lunch.jpg" alt="Chicken&Acavados" class="imageOne" />
                        <div className="middle">
                            <div className="text">Lunch</div>
                        </div>
                </div>

                <div className="containerHome">
                    <img src="https://ketocookingchristian.com/wp-content/uploads/2019/05/Jalapeno-Popper-Cauliflower-Mac-and-Cheese.jpg" alt="Cauliflower Mac&Cheese" class="imageOne"/>
                         <div className="middle">
                            <div className="text">Dinner</div>
                         </div>
                </div>
                </div>
            </div>
        )
    }
}

export default HomePage;