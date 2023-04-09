import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const goldenRing=useContext(RingContext)
    return (
        <div>
            <h2>Special:{ring}</h2>
            <h2>{goldenRing}</h2>
        </div>
    );
};

export default Special;