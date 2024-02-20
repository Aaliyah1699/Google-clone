import Link from 'next/link';
import Parser from 'html-react-parser';
import PaginationButtons from './PaginationButtons';

const WebSearchResults = ({ results }) => {
    return (
        <div className='w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52 bg-slate-900 text-slate-200'>
            <p className='text-slate-200 text-sm mb-5 mt-3'>
                About {results.searchInformation?.formattedTotalResults} results
                ({results.searchInformation?.formattedSearchTime} seconds)
            </p>
            {results.items?.map((result) => (
                <div className='mb-8 max-w-xl' key={result.link}>
                    <div className='group flex flex-col'>
                        <Link href={result.link} classname='text-slate-500'>{result.formattedUrl}</Link>
                        <Link
                            href={result.link}
                            className='group-hover:underline decoration-blue-500 text-xl truncate font-medium text-blue-500'
                        >
                            {result.title}
                        </Link>
                    </div>
                    <p className='text-slate-200'>
                        {Parser(result.htmlSnippet)}
                    </p>
                </div>
            ))}
            <PaginationButtons />
        </div>
    );
};

export default WebSearchResults;
