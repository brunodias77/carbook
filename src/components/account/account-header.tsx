"use client"
import React from 'react';
import AddIcon from '@/icons/add-icon';
import FeedIcon from '@/icons/feed-icon';
import OutIcon from '@/icons/out-icon';
import SendIcon from '@/icons/send-icon';
import StatisticsIcon from '@/icons/statistc-icon';
import { usePathname } from 'next/navigation';
import useMedia from '@/hook/use-media';
import Link from 'next/link';

function getTitle(pathname: string) {
    switch (pathname) {
        case '/account/post':
            return 'Poste Sua Foto';
        case '/account/statistics':
            return 'Estatísticas';
        default:
            return 'Minha Conta';
    }
}

const AccountHeader = () => {
    const mobile = useMedia('(max-width: 40rem)');
    const pathname = usePathname();
    const [mobileMenu, setMobileMenu] = React.useState(false);
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <header className="relative grid grid-cols-auto-1fr items-center mb-8 mt-4">
            <h1 className="title">{getTitle(pathname)}</h1>
            <nav className="grid grid-cols-4 gap-4">
                <Link href="/account" className={`p-2 rounded-md lex items-center justify-center transition cursor-pointer border border-transparent ${pathname === '/account' ? 'bg-white border-2 border-purple_500' : 'bg-gray-200 hover:bg-white hover:shadow hover:border-purple_500 focus:bg-white focus:shadow focus:border-purple_500'}`}>
                    <FeedIcon />
                </Link>
                <Link href="/account/statistics" className={`p-2 rounded-md lex items-center justify-center transition cursor-pointer border border-transparent ${pathname === '/account/statistics' ? 'bg-white border-2 border-purple_500' : 'bg-gray-200 hover:bg-white hover:shadow hover:border-purple_500 focus:bg-white focus:shadow focus:border-purple_500'}`}>
                    <StatisticsIcon />
                </Link>
                <Link href="/account/post" className={`p-2 rounded-md lex items-center justify-center transition cursor-pointer border border-transparent ${pathname === '/account/post' ? 'bg-white border-2 border-purple_500' : 'bg-gray-200 hover:bg-white hover:shadow hover:border-purple_500 focus:bg-white focus:shadow focus:border-purple_500'}`}>
                    <AddIcon />
                </Link>
                <button className=' bg-[#eee] rounded p-2 flex items-center justify-center transition cursor-pointer border border-transparent  hover:bg-white hover:shadow hover:border-purple_500 focus:bg-white focus:shadow focus:border-purple_500'>
                    <OutIcon />
                </button>
            </nav>
        </header >
    );
};

export default AccountHeader;