import React from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/logo2.svg';
import LogoUser from '../../public/assets/usuario.svg';
import Link from "next/link"

const Header = () => {
    const user = true;
    return (
        <header className="fixed top-0 w-full z-50 bg-white shadow-md">
            <nav className="flex justify-between items-center h-16 container mx-auto max-w-screen-lg px-4">
                <div className="logo py-2">
                    <Link href="/">
                        <Image src={Logo} alt="Car Book" height={60} width={60} />
                    </Link>
                </div>
                <div className="login text-gray-700 flex items-center">
                    {user
                        ?
                        (<Link href="/account" className='flex items-center justify-center gap-2'>
                            <span className="ml-1">Bruno</span>
                            <Image src={LogoUser} alt="Car Book" height={20} width={20} />
                        </Link>)
                        :
                        (<Link href="/login" className='flex items-center justify-center gap-2'>
                            <span className="ml-1">Login</span>
                            <Image src={LogoUser} alt="Car Book" height={20} width={20} />
                        </Link>)
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;