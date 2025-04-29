import { League_Spartan, Bitter } from 'next/font/google';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ToggleThemeBtn from '@/components/ToggleThemeBtn';
import './globals.css';

// const karla = Karla({ subsets: ['latin-ext'] });
// const urbanist = Urbanist({ subsets: ['latin-ext'] });
const mainFont = Bitter({ subsets: ['latin-ext'] });

export const metadata = {
  title: 'Ozan Yusufoglu',
  description: 'Frontend Engineer, Personal Website',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body
        className={`${mainFont.className} bg-white dark:bg-gray-800 dark:text-gray-50 flex flex-col
        items-center`}
      >
        <Header />
        {children}
        <Footer />
        <ToggleThemeBtn className="fixed bottom-4 right-4" />
      </body>
    </html>
  );
}
