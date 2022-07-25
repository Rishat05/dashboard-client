import React from 'react';
import ChangePassword from './ChangePassword';
import UpdateUserName from './UpdateUserName';




const ManageProfile = () => {
    return (
        <div>
            <h1 className='text-center my-5'>Update Profile</h1>
            <UpdateUserName></UpdateUserName>
            <ChangePassword></ChangePassword>

        </div>
    );
};

export default ManageProfile;

