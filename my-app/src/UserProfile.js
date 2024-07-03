// UserProfile.js
import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function UserProfile() {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Please Login!</p>
            )}
        </div>
    );
}

export default UserProfile;
