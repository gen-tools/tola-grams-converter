import type { Metadata } from 'next';
import RegionalConverter from '@/components/RegionalConverterDynamic';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tola to Grams Converter UK | Gold Rate in GBP',
  description: 'Convert tola to grams in UK and calculate gold value in GBP. Instant tola weight conversion and gold price calculator for UK gold trading.',
  keywords: 'tola to grams uk, gold rate uk gbp, gold converter uk, precious metals',
  alternates: {
    canonical: 'https://tola-to-grams.com/uk',
  },
};

export default function UKPage() {
  return (
    <div className="w-full bg-slate-900">
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <RegionalConverter
            title="Tola to Grams — UK"
            subtitle="Gold weight conversion and value calculator for UK gold trading"
            regionName="UK"
            currency="GBP"
            currencySymbol="£"
            approxRatePerTola={885}
            regions={[
              { name: 'Pakistan', link: '/pakistan' },
              { name: 'India', link: '/india' },
              { name: 'Nepal', link: '/nepal' },
              { name: 'Dubai', link: '/dubai' },
              { name: 'UAE', link: '/uae' },
            ]}
          />
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-2xl font-bold gradient-text mb-6">About Tola in UK</h2>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                The UK primarily uses grams and troy ounces for gold trading. However, for jewelers and traders working with South Asian suppliers and communities, understanding tola conversion is essential for international transactions.
              </p>
              <p>
                <span className="text-amber-400 font-semibold">1 Tola = 11.6638 Grams</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <h2 className="text-2xl font-bold gradient-text mb-8 text-center">Other Countries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pakistan" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Pakistan</h3>
              <p className="text-slate-400 text-sm">Gold rate in PKR · Tola converter</p>
            </Link>
            <Link href="/india" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">India</h3>
              <p className="text-slate-400 text-sm">Gold rate in INR · Tola converter</p>
            </Link>
            <Link href="/nepal" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Nepal</h3>
              <p className="text-slate-400 text-sm">Gold rate in NPR · Tola converter</p>
            </Link>
            <Link href="/dubai" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Dubai</h3>
              <p className="text-slate-400 text-sm">Gold rate in AED · Tola converter</p>
            </Link>
            <Link href="/uae" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">UAE</h3>
              <p className="text-slate-400 text-sm">Gold rate in AED · Tola converter</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
