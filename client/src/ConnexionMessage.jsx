import React, { useState } from 'react';

function ConnexionMessage() {
    const [username, setUsername] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [receiveMessages, setReceiveMessages] = useState(false); // État pour indiquer si l'utilisateur souhaite recevoir des messages

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

    const handleReceiveMessagesChange = () => {
        setReceiveMessages(!receiveMessages); // Inverser la valeur de l'état receiveMessages
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={handleLastNameChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={receiveMessages} onChange={handleReceiveMessagesChange} />
                    Recevoir les messages
                </label>
            </div>
            <button type="submit">S'Inscrire</button>
        </form>
    );
}

export default ConnexionMessage;
