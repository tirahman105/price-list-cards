import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-blue-500 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl text-blue-900 font-extrabold '>{price.price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
           <h5 className='text-3xl font-bold text-white my-4 text-center'>{price.name} </h5>
           <p className='underline text-xl'>Features: </p>
           {
            price.features.map((feature, idx) => <Feature
            key= {idx}
            feature={feature}>

            </Feature>)
           }
           <button className='w-full mt-auto bg-blue-900 py-2 rounded-md text-white font-bold hover:bg-blue-800'>Buy Now</button>
        </div>
    );
};

export default PriceCard;