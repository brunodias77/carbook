"use client"
import React from 'react';
import { useUser } from '@/context/user-context';

const AccountPage = () => {
    const { user } = useUser();
    console.log(user);
    return (
        <div>
            <h1>Account Page</h1>
        </div>
    );
};

export default AccountPage;