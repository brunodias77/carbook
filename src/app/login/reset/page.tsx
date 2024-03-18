import LoginResetForm from '@/components/login/login-reset-form';
import { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
    title: 'Resetar a senha | Dogs',
    description: 'Resete a sua senha',
};

type ResetarSearchParams = {
    searchParams: {
        key: string;
        login: string;
    };
};

const ResetPage = ({
    searchParams,
}: ResetarSearchParams) => {
    return (
        <div className="animeLeft">
            <h1 className="title">Resete a Senha</h1>
            <LoginResetForm
                keyToken={searchParams.key}
                login={searchParams.login}
            />
        </div>
    );
};

export default ResetPage;