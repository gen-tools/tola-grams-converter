'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-dark-900 border-b border-primary-900 shadow-soft" role="banner">
      <div className="container-max">
        <nav className="flex items-center justify-between h-14 md:h-16" role="navigation">
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-bold text-primary-400 flex-shrink-0"
          >
            Tola
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-300 hover:text-primary-400">
              Home
            </Link>
            <Link href="/grams-to-tola" className="text-sm text-gray-300 hover:text-primary-400">
              Tools
            </Link>
            <Link href="/what-is-tola" className="text-sm text-gray-300 hover:text-primary-400">
              Learn
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-5 h-0.5 bg-primary-400"></div>
            <div className="w-5 h-0.5 bg-primary-400"></div>
            <div className="w-5 h-0.5 bg-primary-400"></div>
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden pb-3 border-t border-primary-800">
            <Link href="/" className="block py-2 text-sm text-gray-300 hover:text-primary-400" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/grams-to-tola" className="block py-2 text-sm text-gray-300 hover:text-primary-400" onClick={() => setMenuOpen(false)}>
              Grams to Tola
            </Link>
            <Link href="/what-is-tola" className="block py-2 text-sm text-gray-300 hover:text-primary-400" onClick={() => setMenuOpen(false)}>
              What is Tola?
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
