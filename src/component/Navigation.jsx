import React from 'react';
import { Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation bg-blue-700 text-white p-6'>
            <ul className='flex flex-row justify-between '>
                <Link to="/">acceuil</Link>
                <Link to="about">About</Link>
                <Link to="services">Nos services</Link>
                <Link to="conseils">Nos conseils</Link>
            </ul>
            
        </div>
    );
};

export default Navigation;