import React, { useContext } from 'react';
import Cousine from '../Cousine/Cousine';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const[money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h1>this is Uncle</h1>
            <p><small>Grandpa Money:{money}</small></p>
            <button onClick={()=>setMoney(money+1000)}>send 1000 tk</button>
            <section className='flex'>
                <Cousine>Nabil</Cousine>
                <Cousine>Nabila</Cousine>
            </section>
        </div>
    );
};

export default Uncle;