"use client"
import React from 'react';
import Input from '@/components/form/input';
import ErrorMessage from '../helper/error-message';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/form/button';
import userPost from '@/actions/user-post';

function FormButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button disabled={pending}>Enviando...</Button>
            ) : (
                <Button>Enviar</Button>
            )}
        </>
    );
}

const AccountPhotoPostForm = () => {
    const [state, action] = useFormState(userPost, {
        ok: false,
        error: '',
        data: null,
    });
    return (
        <section className='animeLeft grid grid-cols-2 gap-8 mb-8'>
            <form action={action} className="">
                <Input label="Nome" name="nome" type="text" />
                <Input label="Peso" name="peso" type="number" />
                <Input label="Idade" name="idade" type="number" />
                <input type="file" name='img' id='img' className='mb-4' />
                <ErrorMessage error={state.error} />
                <FormButton />
            </form>
            <div>

            </div>
        </section>
    );
};

export default AccountPhotoPostForm;