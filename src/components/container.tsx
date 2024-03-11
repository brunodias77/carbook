import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}


const Container = ({ children }: ContainerProps) => {
    return (
        <section className="container mx-auto max-w-screen-lg px-4 mt-8">
            {children}
        </section>
    );
};

export default Container;