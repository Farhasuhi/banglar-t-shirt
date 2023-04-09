import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';


const Home = () => {
    const tShirts = useLoaderData();
    const [cart,setCart]=useState([]);
    const handleToCart=(tshirt)=>{
        const exists=cart.find(ts=>ts._id===tshirt._id);
        if(exists){
            toast('you have already added this item')
        }
        else{
            const newCart=[...cart,tshirt];
            setCart(newCart)
        }
    }
    const handleRemoveFromCart=(id)=>{
        const exits=cart.filter (ts=>ts._id!==id);
        console.log(exits)
        setCart(exits)
        
    }
    return (
        <div className='home-container'>
            <div className='tshirts-container'>
                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} handleToCart={handleToCart} tShirt={tShirt}></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;