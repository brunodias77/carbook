"use client"
import React from 'react';
import Input from './input';
import ErrorMessage from '../helper/error-message';
import { useFormState, useFormStatus } from 'react-dom';
import Button from './button';
import userPost from '@/actions/user-post';

function FormButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button disabled={pending}>Enviando...</Button>
            ) : (
                <Button>Enviar email</Button>
            )}
        </>
    );
}

const LoginForgotForm = () => {
    const [state, action] = useFormState(userPost, {
        ok: false,
        error: '',
        data: null,
    });

    React.useEffect(() => {
        if (state.ok) window.location.href = '/account';
    }, [state.ok]);
    return (
        <form action={action} className="">
            <Input label="Email / Usuário" name="login" type="text" />
            <ErrorMessage error={state.error} />
            <FormButton />
        </form>
    );
};

export default LoginForgotForm;