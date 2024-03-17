import React from 'react';

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonType) => {
    return (
        <button {...props} className={`text-base  cursor-pointer rounded-md bg-purple_500 text-white min-w-32 px-6 py-3 transition duration-100 `}>
            {children}
        </button>
    );
};

export default Button;