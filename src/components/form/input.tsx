import React from 'react';

// Um jeito diferente de tipar um elemento do html no typescript !!!!
// type InputProps1 = React.ComponentProps<'input'> & {
//     label: string;
//     error?: string;
// };

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
};

export default function Input({ label, error, ...props }: InputProps) {
    return (
        <div className="mb-4">
            <label className=" block text-base pb-2" htmlFor={props.name}>
                {label}
            </label>
            <input className="border border-gray-300 block w-full text-base px-4 py-2 rounded-md bg-gray-200 transition duration-200 focus:outline-none focus:border-purple_500 hover:border-purple_500 hover:bg-white focus:shadow-outline-yellow" type="text" id={props.name} {...props} />
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        </div>
    );
}
