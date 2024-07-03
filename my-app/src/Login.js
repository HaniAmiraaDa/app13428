// Login.js
import React, { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';

function Login() {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ name: username });
        setUsername(''); // Clear the username input after login
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
