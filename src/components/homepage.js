import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">

                           <div className="homePageContainer" id="homePageContainerSize">
                                <img id="breakfast" src="https://cdn.ruled.me/wp-content/uploads/2013/10/keto-bacon-and-eggs-featured.jpg" alt="Bacon&Eggs" />
                                    <div className="middle">
                                        <div className="text">Breakfast</div>
                                    </div>
                            </div>

                            <div className="homePageContainer" id="homePageContainerSize" >
                                <img id="lunch" src="http://thehealthygrub.com/wp-content/uploads/2017/06/Keto-Lunch.jpg" alt="Chicken&Acavados" />
                                    <div className="middle">
                                        <div className="text">Lunch</div>
                                    </div>
                            </div>
                            
                            <div className="homePageContainer" id="homePageContainerSize">
                                <img id ="dinner" src="https://ketocookingchristian.com/wp-content/uploads/2019/05/Jalapeno-Popper-Cauliflower-Mac-and-Cheese.jpg" alt="Cauliflower Mac&Cheese" />
                                    <div className="middle">
                                        <div className="text">Dinner</div>
                                    </div>
                            </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default HomePage;