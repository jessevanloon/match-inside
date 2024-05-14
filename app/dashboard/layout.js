"use client";

import { BiBell, BiCog, BiSearchAlt2 } from "react-icons/bi";
import Avatar from "/public/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  return (
    <div>
      <header className="bg-light-dark-background">
        <div className="px-8">
          <div className="flex justify-between w-full py-4 flex-wrap items-center">
            <div className="text-5xl font-semibold flex-1	">
              Match <span className="text-accent-orange">Inside</span>
            </div>
            <div className="flex-1 flex justify-center w-full">
              <div className="w-80 flex items-center relative">
                <div className="absolute left-3">
                  <BiSearchAlt2 className="text-xl" />
                </div>
                <input
                  className="py-2.5 px-9	rounded-lg	bg-grey w-full max-w-xs	"
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Search.."
                />
              </div>
            </div>
            <div className="flex-1 flex justify-end gap-3">
              <div className="flex items-center">
                <BiBell className="text-xl" />
              </div>
              <div className="flex items-center">
                <BiCog className="text-xl" />
              </div>
              <div className="flex items-center">
                <Image
                  src={Avatar}
                  width={50}
                  height={50}
                  alt="Profile image"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <aside className="mt-8 bg-light-dark-background max-w-72 fixed h-full w-72 border-2 border-light-dark-background border-solid">
        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard"
            className={`w-full py-6 px-8 ${
              pathname === "/dashboard"
                ? "bg-accent-green border-l-4 border-accent-orange border-solid"
                : ""
            }`}>
            Overview
          </Link>
          <Link
            href="/dashboard/goals"
            className={`w-full py-6 px-8 ${
              pathname === "/dashboard/goals"
                ? "bg-accent-green border-l-4 border-accent-orange border-solid"
                : ""
            }`}>
            Goals
          </Link>
          <Link
            href="/dashboard/assists"
            className={`w-full py-6 px-8 ${
              pathname === "/dashboard/assists"
                ? "bg-accent-green border-l-4 border-accent-orange border-solid"
                : ""
            }`}>
            Assists
          </Link>
          <Link
            href="/dashboard/matches"
            className={`w-full py-6 px-8 ${
              pathname === "/dashboard/matches"
                ? "bg-accent-green border-l-4 border-accent-orange border-solid"
                : ""
            }`}>
            Matches
          </Link>
          <Link
            href="/dashboard/team"
            className={`w-full py-6 px-8 ${
              pathname === "/dashboard/team"
                ? "bg-accent-green border-l-4 border-accent-orange border-solid"
                : ""
            }`}>
            Team
          </Link>
        </div>
      </aside>
      {children}
    </div>
  );
}
