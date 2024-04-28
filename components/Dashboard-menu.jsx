'use client';

import React from 'react';
import styles from './Navbar.module.css';
import { Nunito } from 'next/font/google';
import { Hind } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nunito = Nunito({ subsets: ['latin'] });
const hind = Hind({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const DashboardMenu = () => {
  const pathname = usePathname();

  return (
    <div className="bg-base-200 pt-10">
      <div className={styles.navbarWrap}>
        <ul className="ul-reset flex flex-col gap-5	menu p-0">
          <li className="">
            <Link
              className={`link ${
                pathname === '/dashboard' ? 'active' : ''
              } rounded-none no-underline	`}
              href="/dashboard"
            >
              Overview
            </Link>
          </li>
          <li className="">
            <Link
              className={`link ${
                pathname === '/dashboard/matches' ? 'active' : ''
              } rounded-none no-underline	`}
              href="/dashboard/matches"
            >
              Matches
            </Link>
          </li>
          <li className="">
            <Link
              className={`link ${
                pathname === '/dashboard/goals' ? 'active' : ''
              } rounded-none no-underline	`}
              href="/dashboard/goals"
            >
              Goals
            </Link>
          </li>
          <li className="">
            <Link
              className={`link ${
                pathname === '/dashboard/assists' ? 'active' : ''
              } rounded-none no-underline	`}
              href="/dashboard/assists"
            >
              Assists
            </Link>
          </li>
          <li className="">
            <Link
              className={`link ${
                pathname === '/dashboard/training' ? 'active' : ''
              } rounded-none no-underline	`}
              href="/dashboard/training"
            >
              Training
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMenu;
