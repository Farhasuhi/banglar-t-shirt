import React from 'react';
import Cousine from '../Cousine/Cousine';

const Aunty = ({ring}) => {
    return (
        <div>
            <h1>Aunty</h1>
            <section className='flex'>
                <Cousine>Abir</Cousine>
                <Cousine ring={ring} hasFriend={true}>Nibir</Cousine>
            </section>
        </div>
    );
};

export default Aunty;