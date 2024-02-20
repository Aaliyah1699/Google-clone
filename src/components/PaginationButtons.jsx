'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { TbArrowBigLeftLines, TbArrowBigRightLines } from 'react-icons/tb';

const PaginationButtons = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');
    const startIndex = +searchParams.get('start') || 1;

    return (
        <div className='text-slate-200 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0'>
            {startIndex >= 10 && (
                <Link
                    href={`${pathname}?searchTerm=${searchTerm}&start=${
                        startIndex - 10
                    }`}
                >
                    <div className='flex flex-col items-center hover:underline'>
                        <TbArrowBigLeftLines className='h-5 text-green-500' />
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            {startIndex <= 90 && (
                <Link
                    href={`${pathname}?searchTerm=${searchTerm}&start=${
                        startIndex + 10
                    }`}
                >
                    <div className='flex flex-col items-center hover:underline'>
                        <TbArrowBigRightLines className='h-5 text-yellow-400' />
                        <p>Next</p>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default PaginationButtons;
