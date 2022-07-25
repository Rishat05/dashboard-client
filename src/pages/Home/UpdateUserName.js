import React, { useState } from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UpdateUserName = () => {
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, error] = useUpdateProfile(auth);

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
        <div className='my-2'>
            <input
                type="displayName"
                value={displayName}
                placeholder='Change user name'
                className='my-2'
                onChange={(e) => setDisplayName(e.target.value)}
            />
            <button
                onClick={async () => {
                    await updateProfile({ displayName });
                    alert('Updated profile');
                }}
            >
                Change Username
            </button>
        </div>
    );
};

export default UpdateUserName;