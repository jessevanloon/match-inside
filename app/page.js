import Header from '@/components/Header';
import Link from 'next/link';
import headlineImage from '../public/headline-image.svg';
import Image from 'next/image';
import { Nunito } from 'next/font/google';
import Footer from '@/components/Footer';

const nunito = Nunito({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          <div className="flex flex-col">
            <h1 className={`text-3xl uppercase ${nunito.className}`}>
              Score Goals on and off the Pitch
            </h1>
            <div className="">
              Track Your Soccer Stats Seamlessly with Our SaaS Solution!
            </div>
          </div>
          <div className="image-wrap">
            <Image src={headlineImage} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
