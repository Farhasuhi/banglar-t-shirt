import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt,handleToCart}) => {

    const {_id,picture,name,price
    }=tShirt
    return (
        <div className='tShirt-container'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price:${price}</p>
            <button onClick={()=>handleToCart(tShirt)}>Buy nOW</button>
        </div>
    );
};

export default TShirt;