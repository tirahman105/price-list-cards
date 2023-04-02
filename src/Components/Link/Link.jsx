import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mx-4'>    
            <a href="">{route.name}</a>
        </li>   
    );
};

export default Link;