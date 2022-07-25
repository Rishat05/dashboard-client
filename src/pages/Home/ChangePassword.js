import React, { useState } from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [updatePassword, updating, error] = useUpdatePassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (updating) {
        return <p>Updating...</p>;
    }
    return (
        <div className="App my-4">
            <input
                type="password"
                value={password}
                placeholder='New password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={async () => {
                    await updatePassword(password);
                    alert('Updated password');
                }}
            >
                Change password
            </button>
        </div>
    );
};

export default ChangePassword;