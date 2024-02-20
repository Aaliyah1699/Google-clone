import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GiEyelashes } from 'react-icons/gi';

const Footer = () => {
    return (
        <footer className='absolute bottom-0 text-sm bg-slate-900 text-slate-200 w-full'>
            <div className='border-b px-8 py-3 flex flex-col sm:flex-row justify-between items-center'>
                <a
                    href='https://github.com/Aaliyah1699'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {' '}
                    <VscGithub className='w-8 h-8 text-green-700'  />
                </a>
                <a
                    href='https://www.linkedin.com/in/aaliyahmontgomery/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <AiOutlineLinkedin className='w-8 h-8  text-blue-500' />
                </a>
                <a
                    href='https://aaliyahm-portfolio.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <GiEyelashes className='w-8 h-8 text-yellow-400'/>
                </a>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
                <ul className='flex items-center space-x-6'>
                    <li className='hover:underline cursor-pointer'>About</li>
                    <li className='hover:underline cursor-pointer'>
                        Advertising
                    </li>
                    <li className='hover:underline cursor-pointer'>Business</li>
                    <li className='hover:underline cursor-pointer'>
                        How Search works
                    </li>
                </ul>
                <ul className='flex items-center space-x-6'>
                    <li className='hover:underline cursor-pointer'>Privacy</li>
                    <li className='hover:underline cursor-pointer'>Terms</li>
                    <li className='hover:underline cursor-pointer'>Settings</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
