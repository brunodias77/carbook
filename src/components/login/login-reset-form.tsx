'use client';
import Button from '@/components/form/button';
import Input from '@/components/form/input';
import ErrorMessage from '../helper/error-message';
import React from 'react';
import passwordReset from '@/actions/password-reset';
import { useFormState, useFormStatus } from 'react-dom';

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled={pending}>Resetando...</Button>
            ) : (
                <Button>Resetar Senha</Button>
            )}
        </>
    );
}

export default function LoginResetForm({ keyToken, login }: { login: string; keyToken: string; }) {
    const [state, action] = useFormState(passwordReset, {
        ok: false,
        error: '',
        data: null,
    });

    return (
        <form action={action} className="">
            <Input label="Nova Senha" name="password" type="password" />
            <input type="hidden" name="login" value={login} />
            <input type="hidden" name="key" value={keyToken} />
            <ErrorMessage error={state.error} />
            <FormButton />
        </form>
    );
}
