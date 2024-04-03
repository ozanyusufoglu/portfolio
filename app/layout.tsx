import {
  Karla,
  Urbanist,
} from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const karla = Karla({ subsets: ['latin'] });
const urbanist = Urbanist({ subsets: ['latin'] });
export const metadata = {
  title: 'Monkeymind',
  description: "Don't postpone yourself!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${karla.className} bg-white text-slate-800
        dark:bg-slate-700 dark:text-slate-100 flex
        flex-col items-center`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
