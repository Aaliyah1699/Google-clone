import Image from 'next/image';
import Link from 'next/link';
import SearchBox from './SearchBox';
import { VscSettingsGear } from 'react-icons/vsc';
import { CiGrid42 } from 'react-icons/ci';
import SearchHeaderOptions from './SearchHeaderOptions';

const SearchHeader = () => {
    return (
        <header className='sticky top-0 bg-slate-900 text-slate-200'>
            <div className='flex w-full p-6 items-center justify-between'>
                <Link href='/'>
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
                        alt='Google Logo'
                        width={120}
                        height={40}
                        priority
                        style={{ width: 'auto' }}
                    />
                </Link>
                <div className='flex-1'>
                    <SearchBox />
                </div>
                <div className='hidden md:inline-flex space-x-2'>
                    <VscSettingsGear className='bg-transparent hover:bg-slate-200 p-2 text-4xl rounded-full cursor-pointer text-green-500' />
                    <CiGrid42 className='bg-transparent hover:bg-slate-200 p-2 text-4xl rounded-full cursor-pointer text-yellow-400' />
                </div>
                <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2'>
                    Sign in
                </button>
            </div>
            <SearchHeaderOptions />
        </header>
    );
};

export default SearchHeader;
