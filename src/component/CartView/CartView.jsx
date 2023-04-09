import React from 'react';

const CartView = ({tshirt,handleRemoveFromCart}) => {
    return (
        <div>
            <h3>{tshirt.name}</h3>
            <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
        </div>
    );
};

export default CartView;