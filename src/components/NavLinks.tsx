"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BsGithub,
  BsStarFill,
  BsList,
  BsX,
} from "react-icons/bs";

const NavLinks = ({ stars }: { stars: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-4 md:gap-6 text-white">
        <Link
          href="/devlogs"
          className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-lg transition-colors"
        >
          Devlogs
        </Link>

        <Link
          href="/learn"
          className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-lg transition-colors"
        >
          Learn
        </Link>

        <Link
          href="https://github.com/utkarsh-saxena271/utkarsh-open-devlogs"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-500 text-lg transition-colors"
        >
          <BsGithub size={20} />
          Star on GitHub
          <span className="flex items-center gap-1 ml-2 bg-green-800/30 px-2 py-1 rounded text-md">
            <BsStarFill size={16} />
            {stars}
          </span>
        </Link>
      </div>

      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white text-2xl transition-transform"
        aria-label="Toggle Menu"
      >
        {open ? <BsX /> : <BsList />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute right-0 top-20 z-50 bg-slate-900 p-4 flex flex-col gap-3 md:hidden shadow-lg min-w-50">
          <Link
            href="/devlogs"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 transition-colors"
          >
            Devlogs
          </Link>

          <Link
            href="/learn"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 transition-colors"
          >
            Learn
          </Link>

          <Link
            href="https://github.com/utkarsh-saxena271/utkarsh-open-devlogs"
            target="_blank"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-2 rounded-md bg-green-600 hover:bg-green-500 transition-colors"
          >
            <span className="flex items-center gap-2">
              <BsGithub />
              Star on GitHub
            </span>
            <span className="flex items-center gap-1 bg-green-800/30 px-2 py-1 rounded text-sm">
              <BsStarFill size={14} />
              {stars}
            </span>
          </Link>
        </div>
      )}
    </>
  );
};

export default NavLinks;