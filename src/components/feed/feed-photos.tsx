import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Photo } from "@/actions/photo-get";

const FeedPhotos = ({ photos }: { photos: Photo[] }) => {
    return (
        <ul className="grid grid-cols-3 gap-4 mb-4 justify-center md:grid-cols-2 md:gap-4 animeLeft">
            {photos.map((photo, i) => (
                <li key={photo.id + i} className="grid rounded-3xl overflow-hidden cursor-pointer">
                    <Link href={`/photo/${photo.id}`} scroll={false} className="relative block rounded-md overflow-hidden cursor-pointer">
                        <Image
                            src={photo.src}
                            width={1500}
                            height={1500}
                            alt={photo.title}
                            className="object-cover w-full h-full"
                            sizes='80vw'

                        />
                        <span className="absolute inset-0 bg-black bg-opacity-30 text-white text-center hidden items-center justify-center hover:flex ">
                            {photo.acessos}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default FeedPhotos;