"use client";

import Link from "next/link";
import { BiBell, BiCog, BiSearchAlt2 } from "react-icons/bi";
import Avatar from "/public/avatar.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-light-dark-background">
      <div className="px-8">
        <div className="flex justify-between w-full py-4 flex-wrap items-center">
          <div className="text-5xl font-semibold flex-1	">
            Match <span className="text-accent-orange">Inside</span>
          </div>

          <div className="flex gap-8">
            <Link
              href="/dashboard"
              className={`w-full  ${
                pathname === "/dashboard"
                  ? " border-b-2 border-accent-orange border-solid"
                  : ""
              }`}>
              Overview
            </Link>
            <Link
              href="/dashboard/goals"
              className={`w-full  ${
                pathname === "/dashboard/goals"
                  ? " border-b-2 border-accent-orange border-solid"
                  : ""
              }`}>
              Goals
            </Link>
            <Link
              href="/dashboard/assists"
              className={`w-full  ${
                pathname === "/dashboard/assists"
                  ? " border-b-2 border-accent-orange border-solid"
                  : ""
              }`}>
              Assists
            </Link>
            <Link
              href="/dashboard/matches"
              className={`w-full  ${
                pathname === "/dashboard/matches"
                  ? " border-b-2 border-accent-orange border-solid"
                  : ""
              }`}>
              Matches
            </Link>
            <Link
              href="/dashboard/team"
              className={`w-full ${
                pathname === "/dashboard/team"
                  ? " border-b-2 border-accent-orange border-solid"
                  : ""
              }`}>
              Team
            </Link>
          </div>
          <div className="flex-1 flex justify-end gap-3">
            <div className="flex items-center">
              <BiBell className="text-xl" />
            </div>
            <div className="flex items-center">
              <BiCog className="text-xl" />
            </div>
            <div className="flex items-center">
              <Image src={Avatar} width={50} height={50} alt="Profile image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
