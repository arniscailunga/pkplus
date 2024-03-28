import React from 'react';
import { Link} from 'react-router-dom';
import Header from '../Header';

const Navigation = () => {
    return (
        <>
            <Header />
            <div className='navigation bg-blue-700 text-white p-6'>
                <ul className='flex flex-row justify-around '>
                    <Link to="/">Acceuil</Link>
                    <Link to="about">About</Link>
                    <Link to="services">Nos services</Link>
                    <Link to="conseils">Nos conseils</Link>
                </ul>

            </div>
        </>
    );
};

export default Navigation;