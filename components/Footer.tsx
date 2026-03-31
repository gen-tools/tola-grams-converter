'use client';

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { LANGUAGES } from "@/lib/translations";

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="bg-gray-900 border-t-2 border-gray-800 mt-20 pt-16 pb-8 text-sm">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-semibold text-xl gradient-text mb-3">Tola to Grams Converter</h3>
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
              <li>
                <Link href="/gold-weight-converter" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> Gold Weight Converter
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> Contact Us
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
              <li>
                <Link href="/dubai" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> Dubai
                </Link>
              </li>
              <li>
                <Link href="/uk" className="text-gray-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-2">
                  <span className="text-amber-300 opacity-50">&rsaquo;</span> UK
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

        {/* Bottom bar: Disclaimer + Language selector */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            {/* Left: copyright + disclaimer */}
            <div className="lg:w-1/2 space-y-3">
              <p className="text-gray-500 text-xs" suppressHydrationWarning>
                © {new Date().getFullYear()} Tola to Grams Converter. All rights reserved.
              </p>
              <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg text-gray-400">
                <p className="font-bold uppercase text-[10px] tracking-wider text-amber-300 mb-1">{t.independentResource}</p>
                <p className="text-xs leading-relaxed">
                  <span className="font-semibold text-gray-300">Disclaimer: </span>
                  {t.disclaimer}
                </p>
              </div>
            </div>

            {/* Right: Language selector */}
            <div className="lg:w-1/2">
              <p className="text-amber-400 font-semibold text-xs uppercase tracking-wider mb-3">{t.languages}</p>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      lang === code
                        ? 'bg-amber-400 text-gray-900 border-amber-400'
                        : 'bg-transparent text-gray-400 border-gray-600 hover:border-amber-400 hover:text-amber-300'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
