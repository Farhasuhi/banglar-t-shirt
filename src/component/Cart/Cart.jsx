import React from 'react';
import './Cart.css'
import CartView from '../CartView/CartView';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
        message=<p>please add some product</p>
    }
    else{
        message=<p>Thanx for shopping</p>
    }
    return (
        <div>
           <h2 className={cart.length===1?'blue':'red'}>order summary:{cart.length}</h2> 
           <p className={`bold ${cart.length===3? 'yellow':'orange'}`}>nahhhh kinbo nah</p>
           {message}
           {
            cart.length>2?<span className='purple'>aroo kinno</span>:<span className='yellow'>gorib</span>
           }
           {
            cart.map(tshirt=><CartView key={tshirt._id}tshirt={tshirt} handleRemoveFromCart={handleRemoveFromCart}></CartView>)
           }
           {
            cart.length ===2 && <p>double bonanza!!</p>
           }
           {
            cart.length ===3|| <h3>tinta tw hoilo nah</h3>
           }
        </div>
    );
};

export default Cart;