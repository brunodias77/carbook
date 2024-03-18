"use client"
import React from 'react';
import Input from './input';
import ErrorMessage from '../helper/error-message';
import { useFormState, useFormStatus } from 'react-dom';
import Button from './button';
import passwordLost from '@/actions/password-lost';

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled={pending}>Enviando...</Button>
            ) : (
                <Button>Enviar Email</Button>
            )}
        </>
    );
}

const LoginForgotForm = () => {
    const [state, action] = useFormState(passwordLost, {
        ok: false,
        error: '',
        data: null,
    });

    const [url, setUrl] = React.useState('');

    React.useEffect(() => {
        setUrl(window.location.href.replace('forgot', 'reset'));
    }, []);
    return (
        <form action={action} className="">
            <Input label="Email / Usuário" name="login" type="text" />
            <input type="hidden" name="url" value={url} />
            <ErrorMessage error={state.error} />
            {state.ok ? (
                <p style={{ color: '#4c1' }}>Email enviado.</p>
            ) : (
                <FormButton />
            )}
        </form>
    );
};

export default LoginForgotForm;