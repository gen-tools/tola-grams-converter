'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-card border-b border-white/10" role="banner">
      <div className="container-max">
        <nav className="flex items-center justify-between h-14 md:h-16" role="navigation">
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold gradient-text flex-shrink-0"
          >
            Tola
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
              Home
            </Link>

            <div className="relative group z-50">
              <button className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
                Tools
              </button>
              <div className="absolute left-0 top-full mt-3 w-64 glass-card bg-slate-800/90 border border-white/10 rounded-xl p-3 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="space-y-1">
                  <Link href="/grams-to-tola" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                    Grams to Tola
                  </Link>
                  <Link href="/tola-to-masha" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                    Tola to Masha
                  </Link>
                  <Link href="/tola-vs-grams" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                    Tola vs Grams
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group z-50">
              <button className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
                Learn
              </button>
              <div className="absolute left-0 top-full mt-3 w-64 glass-card bg-slate-800/90 border border-white/10 rounded-xl p-3 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="space-y-1">
                  <Link href="/what-is-tola" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                    What is Tola?
                  </Link>
                  <Link href="/gold-weight-guide" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                    Gold Weight Guide
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group z-50">
              <button className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
                Regions
              </button>
              <div className="absolute left-0 top-full mt-3 w-64 glass-card bg-slate-800/90 border border-white/10 rounded-xl p-3 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="space-y-1">
                  <Link href="/pakistan" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                    Pakistan
                  </Link>
                  <Link href="/india" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                    India
                  </Link>
                  <Link href="/nepal" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                    Nepal
                  </Link>
                  <Link href="/uae" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                    UAE
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button
            className="lg:hidden glass-card-light p-2 rounded-lg hover:border-amber-500/50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 bg-slate-900/95 backdrop-blur-xl">
            <div className="space-y-2 pt-2">
              <Link href="/" className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <div className="px-3 py-2">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2">Tools</p>
                <div className="space-y-1">
                  <Link href="/grams-to-tola" className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                    Grams to Tola
                  </Link>
                  <Link href="/tola-to-masha" className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                    Tola to Masha
                  </Link>
                </div>
              </div>
              <div className="px-3 py-2">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2">Learn</p>
                <Link href="/what-is-tola" className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                  What is Tola?
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
