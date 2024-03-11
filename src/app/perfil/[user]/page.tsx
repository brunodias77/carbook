import React from 'react';

const PerfilUserPage = ({ params }: { params: { user: string } }) => {
    return (
        <div>
            <h1>Perfil User Page: {params.user}</h1>
        </div>
    );
};

export default PerfilUserPage;