import React from 'react';
import { Metadata } from "next";
import AccountPhotoPostForm from '@/components/account/account-photo-post-form';

export const metadata: Metadata = {
    title: "Postar | Minha conta",
};

const PostPage = () => {
    return (
        <AccountPhotoPostForm />
    );
};

export default PostPage;