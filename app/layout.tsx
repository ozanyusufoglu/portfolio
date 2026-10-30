import { Urbanist } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './globals.css';

// const karla = Karla({ subsets: ['latin-ext'] });
// const urbanist = Urbanist({ subsets: ['latin-ext'] });
// Turkish needs both: ç ö ü ı live in 'latin', ğ ş İ in 'latin-ext'
const mainFont = Urbanist({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: 'Ozan Yusufoglu',
  description:
    'Ozan Yusufoglu, software and product engineer. Full-stack AI products, R&D and interactive prototypes.',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // framer-motion's useScroll measures cards against <html>, which must not be position: static
      className="relative"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${mainFont.className} bg-white dark:bg-zinc-900 dark:text-gray-50 flex flex-col
        items-center`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
            focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg dark:focus:bg-zinc-800"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex flex-col items-center w-full">
          {children}
        </main>
        <Footer />
        {/* <ToggleThemeBtn className="fixed bottom-4 right-4" /> */}
      </body>
    </html>
  );
}
