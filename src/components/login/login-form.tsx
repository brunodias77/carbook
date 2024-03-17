"use client";
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import login from '../../actions/login';
import Input from './input';
import Button from './button';
import ErrorMessage from '../helper/error-message';

function FormButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button disabled={pending}>Enviando...</Button>
            ) : (
                <Button>Entrar</Button>
            )}
        </>
    );
}
const LoginForm = () => {
    const [state, action] = useFormState(login, {
        ok: false,
        error: '',
        data: null,
    });
    React.useEffect(() => {
        if (state.ok) window.location.href = '/account';
    }, [state.ok]);
    return (
        <form action={action}>
            <Input label="Usuário" name="username" type="text" />
            <Input label="Senha" name="password" type="password" />
            <ErrorMessage error={state.error} />
            <FormButton />
        </form>
    );
};

export default LoginForm;