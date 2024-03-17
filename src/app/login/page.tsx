import LoginForm from '@/components/login/login-form';
import { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
    title: 'login | Carbook',
    description: 'Logue na sua conta do carbook e tenha acesso a todas as funcionalidades do app.',
};


const LoginPage = () => {
    return (
        <section className='animeLeft'>
            <h1 className='title'>Login</h1>
            <LoginForm />
        </section>
    );
};

export default LoginPage;