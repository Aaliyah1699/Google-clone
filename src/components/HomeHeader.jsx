import Link from 'next/link';
import { CiGrid42 } from 'react-icons/ci';

const HomeHeader = () => {
    return (
        <header className='flex justify-end p-5 text-sm text-slate-200'>
            <div className='flex space-x-4 items-center'>
                <Link
                    href={'https://mail.google.com'}
                    className='hover:underline'
                >
                    Gmail
                </Link>
                <Link
                    href={'https://image.google.com'}
                    className='hover:underline'
                >
                    Images
                </Link>
                <CiGrid42 className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 text-green-500' />
                <button className='bg-red-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>
                    Sign in
                </button>
            </div>
        </header>
    );
};

export default HomeHeader;
