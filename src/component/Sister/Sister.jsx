import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const goldenRing=useContext(RingContext)
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div>
        <h3>Sister:{goldenRing}</h3>
        <p>money:{money}</p>
        </div>
    );
};

export default Sister;