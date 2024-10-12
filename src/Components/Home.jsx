import React from 'react';
export default class Home extends React.Component{
    render(){
        return(
            <div id="home">
                <div id="hd1">
                    <h1>Start <br/>your BK® order.</h1>
                    <button id="hb1"><h2> <i className="fa-solid fa-bag-shopping"></i> Order Pickup</h2> </button>
                    <button id="hb2"> <h2> <i className="fa-solid fa-motorcycle"></i> Order Delivery</h2> </button>
                </div>
                <div id="hd2">
                    <img  id="img"src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/97876c636e357c965a26f603f0a10bf3dd0d3f29-800x450.png?w=1350&q=90&fit=max&auto=format"/>
                </div>
            </div>
        )
    }
}