"use client";
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import login from '../../actions/login';
import Input from './input';
import Button from './button';
import ErrorMessage from '../helper/error-message';
import Link from 'next/link';

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
        <>
            <form action={action} className='mb-8'>
                <Input label="Usuário" name="username" type="text" />
                <Input label="Senha" name="password" type="password" />
                <ErrorMessage error={state.error} />
                <FormButton />
            </form>
            <Link className='inline-block text-gray-600 py-2 leading-none underline' href="/login/forgot" >Perdeu a senha ?</Link>
            <div className='my-16'>
                <h2 className='leading-none text-5xl relative'>
                    Cadastre-se
                </h2>
                <p className='mb-4'>ainda nao possui conta? cadastre-se no site</p>
                <Link className='button' href="/login/register">Cadastro</Link>
            </div>
        </>

    );
};

export default LoginForm;