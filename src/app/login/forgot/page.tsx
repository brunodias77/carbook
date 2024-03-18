import React from 'react';
import { Metadata } from 'next/types';
import LoginForgotForm from '@/components/login/login-forgot-form';

export const metadata: Metadata = {
    title: 'Perdeu a senha | Carbook',
    description: 'Recupere a senha da sua conta do carbook e tenha acesso a todas as funcionalidades do app.',
};

const ForgotPage = () => {
    return (
        <div className='animeLeft'>
            <h1 className='title'>Perdeu a senha ?</h1>
            <LoginForgotForm />
        </div>
    );
};

export default ForgotPage;