'use client';

import { useState } from 'react';
import { RiSearchEyeLine } from 'react-icons/ri';
import { BsMic } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

const HomeSearch = () => {
    const [input, setInput] = useState('');
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    };

    const randomSearch = async (e) => {
        setRandomSearchLoading(true);
        const response = await fetch(
            'https://random-word-api.herokuapp.com/word'
        )
            .then((res) => res.json())
            .then((data) => data[0]);
        if (!response) return;
        router.push(`/search/web?searchTerm=${response}`);
        setRandomSearchLoading(false);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='bg-slate-900 text-slate-200 flex w-full mt-5 mx-auto max-w-[90%] border border-slate-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
            >
                <RiSearchEyeLine className='text-xl text-blue-500 mr-3' />
                <input
                    type='text'
                    placeholder='Search with Searci'
                    className='flex-grow focus:outline-none bg-slate-900'
                    onChange={(e) => setInput(e.target.value)}
                />
                <BsMic className='text-lg text-yellow-400' />
            </form>
            <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4'>
                <button
                    className='bg-slate-900 rounded-md text-sm text-slate-200 hover:ring-gray-200 focus:outline-none active:ring-gray-200 hover:shadow-md w-36 h-10 transition-shadow'
                    onClick={handleSubmit}
                >
                    Google Search
                </button>
                <button
                    disabled={randomSearchLoading}
                    className='bg-slate-900 rounded-md text-sm text-slate-200 hover:ring-gray-200 focus:outline-none active:ring-gray-200 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm'
                    onClick={randomSearch}
                >
                    {randomSearchLoading ? 'Loading...' : 'I am feeling lucky'}
                </button>
            </div>
        </>
    );
};

export default HomeSearch;
