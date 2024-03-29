import { Karla } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const karla = Karla({ subsets: ['latin'] });
export const metadata = {
  title: 'Ozan | Personal Page',
  description:
    'Fullstack Web Developer with React, Electrical & Electronics Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${karla.className} bg-slate-50 text-slate-800
        dark:bg-slate-700 dark:text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
