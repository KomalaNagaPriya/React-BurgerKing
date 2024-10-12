import React from 'react';
export default class Cards extends React.Component{
    render(){
        return(
            <div id="Cards">
               <div className='cardivs'>
               <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/cfeb80de555459f7abfa64a68c22b370d111fd56-2000x1000.png?w=825&q=80&fit=max&auto=format"/>
               <h2>FREE Any Size Soft Drink with $1+ purchase</h2>
               <p>It’s the last Perks Week deal! Get a FREE Any Size Soft Drink when you make a $1+ purchase.</p>
               <a href="">See Terms</a>
               <button>Order Now</button>
               </div>
               <div className='cardivs'>
               <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1e0094d5b8e3283dfa1aec982b42a0d45387642e-2000x1000.png?w=825&q=80&fit=max&auto=format"/>
               <h2>7 days. 7 delicious deals.</h2>
               <p>Welcome to Perks Week! A whole week of can’t-miss perks for our loyal members. Tasty deals drop every day, now through 9/22.</p>
               <a href="">See Terms</a>
               <button>View Deals</button>
               </div>
               <div className='cardivs'>
               <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/bf28181f88a5acb3c62d73b8aa830dd8698ad50a-2000x1000.png?w=825&q=80&fit=max&auto=format"/>
               <h2>Your quarterly FREE Whopper® is here!</h2>
               <p>Head over to the Offers tab to redeem your Walmart+ benefit—a FREE Whopper® with any purchase</p>
               <a href="">See Terms</a>
               <button>Redeem Now</button>
               </div>
               <div className='cardivs'>
               <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/a364c5344c41381a6f8793a6078a542a52bcb42e-2000x1000.png?w=975&q=80&fit=max&auto=format"/>
               <h2>Think you can handle the BK® grill?</h2>
               <p>Hop in the kitchen and show us your Whopper®-building skills. Top each flame-grilled Whopper® with the correct toppings as the orders roll in. You could win up to 750 Crowns! Play daily through 9/22!</p>
               <a href="">See Terms</a>
               <button>Play Now</button>
               </div>


            </div>
        )
    }
}