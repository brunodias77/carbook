import { Metadata } from 'next';
import React from 'react';
import LoginRegisterForm from '@/components/login/login-register-form';

export const metadata: Metadata = {
    title: 'Crie sua conta',
    description: 'Crie sua conta no carbook e tenha acesso a todas as funcionalidades do app.',
};


const RegisterPage = () => {
    return (
        <div className='animeLeft'>
            <h1 className='title'>Cadastre-se</h1>
            <LoginRegisterForm />
        </div>
    );
};

export default RegisterPage;