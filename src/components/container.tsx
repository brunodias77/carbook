import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}


const Container = ({ children }: ContainerProps) => {
    return (
        <div className="container mx-auto max-w-screen-lg px-4">
            {children}
        </div>
    );
};