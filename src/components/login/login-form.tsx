import React from 'react';
import Input from './input';

const LoginForm = () => {
    return (
        <form>
            <Input label="Email" type="email" name="email" />
        </form>
    );
};

export default LoginForm;