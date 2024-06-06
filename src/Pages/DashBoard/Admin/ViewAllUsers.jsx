import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';

const ViewAllUsers = () => {
    const {user} = UseAuth;
    return (
        <div>
            <h1>eikhn e sob user show korbe </h1>
        </div>
    );
};

export default ViewAllUsers;