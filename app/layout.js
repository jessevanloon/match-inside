import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Dashboard-menu';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="forest" lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        <div className="">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}