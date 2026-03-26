'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-primary-900 text-gray-300 text-xs">
      <div className="container-max py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <div>
            <h4 className="font-bold text-primary-400 mb-1 text-xs">Tools</h4>
            <ul className="space-y-0.5 text-xs">
              <li><Link href="/" className="hover:text-primary-400">Tola to Grams</Link></li>
              <li><Link href="/grams-to-tola" className="hover:text-primary-400">Grams to Tola</Link></li>
              <li><Link href="/tola-to-masha" className="hover:text-primary-400">Tola to Masha</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary-400 mb-1 text-xs">Countries</h4>
            <ul className="space-y-0.5 text-xs">
              <li><Link href="/pakistan" className="hover:text-primary-400">Pakistan</Link></li>
              <li><Link href="/india" className="hover:text-primary-400">India</Link></li>
              <li><Link href="/nepal" className="hover:text-primary-400">Nepal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary-400 mb-1 text-xs">Learn</h4>
            <ul className="space-y-0.5 text-xs">
              <li><Link href="/what-is-tola" className="hover:text-primary-400">What is Tola?</Link></li>
              <li><Link href="/about" className="hover:text-primary-400">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary-400 mb-1 text-xs">Legal</h4>
            <ul className="space-y-0.5 text-xs">
              <li><Link href="/privacy-policy" className="hover:text-primary-400">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-400">Terms</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center">© 2024 TolaConverter. 1 Tola = 11.6638 Grams</p>
      </div>
    </footer>
  );
}
