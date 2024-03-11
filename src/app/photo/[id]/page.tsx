import React from 'react';

const PhotoIdPage = ({ params }: { params: { id: number } }) => {
    return (
        <div>
            <h1>Photo Id Page: {params.id}</h1>
        </div>
    );
};

export default PhotoIdPage;