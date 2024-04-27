import { Karla, Urbanist, Josefin_Sans } from 'next/font/google';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const karla = Karla({ subsets: ['latin'] });
const urbanist = Urbanist({ subsets: ['latin'] });
// const josefin = Josefin_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Ozan Yusufoglu',
  description: 'Software Engineer, Personal Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} bg-white text-slate-800 dark:bg-slate-700
        dark:text-slate-100 flex flex-col items-center`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
