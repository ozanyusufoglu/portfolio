import { Karla } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const karla = Karla({ subsets: ["latin"] });
export const metadata = {
  title: "o16u",
  description: "Author: Özgür Ozan Yusufoglu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className} text-grey-800`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
