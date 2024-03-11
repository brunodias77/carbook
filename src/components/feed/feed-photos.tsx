import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeedPhotos = () => {
    return (
        <ul className="grid grid-cols-3 gap-4 mb-4 justify-center md:grid-cols-2 md:gap-4">
            <li key={"bla"} className="relative">
                <Link href={``} scroll={false}>
                    <a className="relative block rounded-md overflow-hidden cursor-pointer">
                        <Image
                            src={ }
                            width={1500}
                            height={1500}
                            alt={ }
                            layout="responsive"
                            className="object-cover w-full h-full"
                        />
                        <span className="absolute top-0 left-0 bg-black bg-opacity-30 text-white text-xs px-2 py-1">

                        </span>
                    </a>
                </Link>
            </li>
            {/* {photos.map((photo, i) => (
                <li key={photo.id + i} className="relative">
                    <Link href={`/foto/${photo.id}`} scroll={false}>
                        <a className="relative block rounded-md overflow-hidden cursor-pointer">
                            <Image
                                src={photo.src}
                                width={1500}
                                height={1500}
                                alt={photo.title}
                                layout="responsive"
                                className="object-cover w-full h-full"
                            />
                            <span className="absolute top-0 left-0 bg-black bg-opacity-30 text-white text-xs px-2 py-1">
                                {photo.acessos}
                            </span>
                        </a>
                    </Link>
                </li>
            ))} */}
        </ul>
    );
};

export default FeedPhotos;