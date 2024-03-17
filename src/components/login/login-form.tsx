"use client";
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import login from '../../actions/login';
import Input from './input';
import Button from './button';

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
    return (
        <form action={login}>
            <Input label="Usuário" name="username" type="text" />
            <Input label="Senha" name="password" type="password" />
            <FormButton />
        </form>
    );
};

export default LoginForm;