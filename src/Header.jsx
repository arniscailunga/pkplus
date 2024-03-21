import React from 'react';

const Header = () => {
    return (
        <div>
            <Navigation/>
            <h1>connexion</h1>
            <div className="bg-red-500 red-500 texte blue-900 flex justify-between">
                <h1>Qui sommes-nous ?</h1>
                <h1>Le blog</h1>
                <h1>Noconseils</h1>
                <h1>Trouver mon agence</h1>
                <h1>Nous rejoindre</h1>
                <h3>
                    <a to="+243850573634">+243850573634</a>
                </h3>
                <img src={imgPerson} alt="phone" />
            </div>
           
        </div>
    );
};

export default Header;