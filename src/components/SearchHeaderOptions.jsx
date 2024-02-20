'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FaCameraRetro } from 'react-icons/fa';
import { RiSearchEyeFill } from 'react-icons/ri';

const SearchHeaderOptions = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');
    const pathname = usePathname();

    const selectTab = (tab) => {
        router.push(
            `/search/${
                tab === 'Images' ? 'image' : 'web'
            }?searchTerm=${searchTerm}`
        );
    };
    return (
        <div className='flex bg-slate-900 text-slate-200 space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-sm'>
            <div
                onClick={() => selectTab('All')}
                className={`flex items-center space-x-1 border-b-4 border-transparent active:text-green-500 cursor-pointer pb-3 px-2 ${
                    pathname === '/search/web' &&
                    '!text-green-600 !border-green-600'
                }`}
            >
                <RiSearchEyeFill className='text-md' />
                <p className='text-slate-200'>All</p>
            </div>
            <div
                onClick={() => selectTab('Images')}
                className={`flex items-center space-x-1 border-b-4 border-transparent active:text-yellow-400 cursor-pointer pb-3 px-2 ${
                    pathname === '/search/image' &&
                    '!text-yellow-500 !border-yellow-500'
                }`}
            >
                <FaCameraRetro className='text-md' />
                <p className='text-slate-200'>Images</p>
            </div>
        </div>
    );
};

export default SearchHeaderOptions;
