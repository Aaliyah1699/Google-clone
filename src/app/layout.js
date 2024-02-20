import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
    title: 'Searci Google clone',
    description:
        'An open source Google clone built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='relative min-h-screen bg-slate-900'>
                {children}
                <Footer />
            </body>
        </html>
    );
}
