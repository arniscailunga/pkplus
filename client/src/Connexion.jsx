import React, { useState } from 'react';


function Connexion() {
    const [username, setUsername] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className='bg-blue-900 flex justify-center p-60'>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className='grid'>
                        <label className='text-white'>Username:</label>
                        <input className='w-' type="text" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className='grid'>
                        <label className='text-white'>Last Name:</label>
                        <input type="text" value={lastName} onChange={handleLastNameChange} />
                    </div>
                    <div className='grid'>
                        <label className='text-white'>Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className='grid'>
                        <label className='text-white'>Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className='grid'>
                        <label className='text-white'>Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    </div>
                    <button className='text-white ' type="submit">S'Inscrire</button>
                </form>
            </div>
        </div>
    );
}

export default Connexion;
