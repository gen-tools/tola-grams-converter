'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-2 border-gray-800 mt-20 pt-16 pb-8 text-sm">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-semibold text-xl gradient-text mb-3">Tola</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Free, accurate weight converter for gold, jewelry, and precious metals. Serving traders, jewelers, and collectors worldwide.
            </p>
          </div>

          {/* Quick Menu */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4">Quick Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> Home
                </Link>
              </li>
              <li>
                <Link href="/what-is-tola" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> What is Tola?
                </Link>
              </li>
              <li>
                <Link href="/grams-to-tola" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> Grams to Tola
                </Link>
              </li>
              <li>
                <Link href="/tola-to-masha" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> Tola to Masha
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Calculators */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4">Regional Calculators</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pakistan" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> Pakistan
                </Link>
              </li>
              <li>
                <Link href="/india" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> India
                </Link>
              </li>
              <li>
                <Link href="/nepal" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> Nepal
                </Link>
              </li>
              <li>
                <Link href="/uae" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> UAE
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4">Trust & Legal</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg text-gray-400 mb-6">
          <p className="font-bold uppercase text-[10px] tracking-wider text-amber-300 mb-2">Disclaimer</p>
          <p className="text-xs">
            This converter provides approximate conversions for informational purposes. For precise measurements in gold trading and jewelry making, always verify with official standards in your region.
          </p>
        </div>

        {/* Bottom */}
        <div className="text-center border-t border-gray-800 pt-6">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Tola Converter. 1 Tola = 11.6638 Grams. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
