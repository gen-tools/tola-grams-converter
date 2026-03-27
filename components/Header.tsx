'use client';

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

function NavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="text-sm text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {label}
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 w-56 glass-card bg-slate-800/95 border border-white/10 rounded-xl p-2 shadow-xl z-50">
          <div className="space-y-1" onClick={() => setOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-card border-b border-white/10" role="banner">
      <div className="container-max">
        <nav className="flex items-center justify-between h-14 md:h-16" role="navigation" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Tola to Grams Converter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="h-8 w-8 md:h-9 md:w-9 flex-shrink-0">
              <rect width="36" height="36" rx="8" fill="#0F172A"/>
              <rect x="5" y="10" width="26" height="4" rx="2" fill="#F59E0B"/>
              <rect x="15" y="14" width="6" height="13" rx="2" fill="#F59E0B"/>
              <circle cx="5" cy="12" r="3" fill="#D97706"/>
              <circle cx="31" cy="12" r="3" fill="#D97706"/>
              <rect x="11" y="27" width="14" height="3.5" rx="1.75" fill="#D97706"/>
            </svg>
            <span className="text-xl md:text-2xl font-semibold gradient-text">Tola</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
              Home
            </Link>

            <NavDropdown label="Tools">
              <Link href="/grams-to-tola" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                Grams to Tola
              </Link>
              <Link href="/tola-to-masha" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                Tola to Masha
              </Link>
            </NavDropdown>

            <NavDropdown label="Blogs">
              <Link href="/what-is-tola" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                What is Tola?
              </Link>
              <Link href="/gold-weight-guide" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                Gold Weight Guide
              </Link>
              <Link href="/tola-vs-grams" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                Tola vs Grams
              </Link>
            </NavDropdown>

            <NavDropdown label="Regions">
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
              <Link href="/dubai" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                Dubai
              </Link>
              <Link href="/uk" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                UK
              </Link>
            </NavDropdown>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden glass-card-light p-2 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 bg-slate-900/95">
            <div className="space-y-1 pt-3">
              <Link href="/" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <div className="px-3 pt-2 pb-1">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2">Tools</p>
                <div className="space-y-1">
                  <Link href="/grams-to-tola" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                    Grams to Tola
                  </Link>
                  <Link href="/tola-to-masha" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                    Tola to Masha
                  </Link>
                </div>
              </div>

              <div className="px-3 pt-2 pb-1">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2">Blogs</p>
                <div className="space-y-1">
                  <Link href="/what-is-tola" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                    What is Tola?
                  </Link>
                  <Link href="/gold-weight-guide" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                    Gold Weight Guide
                  </Link>
                  <Link href="/tola-vs-grams" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
                    Tola vs Grams
                  </Link>
                </div>
              </div>

              <div className="px-3 pt-2 pb-1">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2">Regions</p>
                <div className="space-y-1">
                  <Link href="/pakistan" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>Pakistan</Link>
                  <Link href="/india" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>India</Link>
                  <Link href="/nepal" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>Nepal</Link>
                  <Link href="/dubai" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>Dubai</Link>
                  <Link href="/uae" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>UAE</Link>
                  <Link href="/uk" className="block px-3 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>UK</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
