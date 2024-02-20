'use client';

import { RxCross1 } from 'react-icons/rx';
import { BsMic } from 'react-icons/bs';
import { RiSearchEyeLine } from 'react-icons/ri';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const SearchBox = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchTerm = searchParams.get('searchTerm');
    const [term, setTerm] = useState(searchTerm || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!term.trim()) return;
        router.push(`/search/web?searchTerm=${term}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex border border-slate-200 bg-slate-900 text-slate-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'
        >
            <input
                type='text'
                className='w-full focus:outline-none bg-slate-900'
                placeholder='Search'
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <RxCross1
                className='text-2xl text-slate-400 cursor-pointer sm:mr-2'
                onClick={() => setTerm('')}
            />
            <BsMic className='hidden sm:inline-flex text-4xl text-blue-500 border-l-2  border-gray-300 mr-3 pl-4' />
            <RiSearchEyeLine
                className='text-2xl hidden sm:inline-flex text-red-500 cursor-pointer'
                onClick={handleSubmit}
            />
        </form>
    );
};

export default SearchBox;
