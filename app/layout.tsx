import { Karla, Urbanist, Roboto_Slab, League_Spartan } from 'next/font/google';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

// const karla = Karla({ subsets: ['latin-ext'] });
// const urbanist = Urbanist({ subsets: ['latin-ext'] });
const spartan = League_Spartan({ subsets: ['latin-ext'] });

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
        className={`${spartan.className} bg-white text-slate-800 dark:bg-gray-800 dark:text-gray-50
        flex flex-col items-center`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
