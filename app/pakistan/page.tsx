import type { Metadata } from 'next';
import RegionalConverter from '@/components/RegionalConverterDynamic';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tola to Grams Converter Pakistan | Gold Rate in PKR',
  description: 'Convert tola to grams in Pakistan and calculate gold value in PKR. Instant tola weight conversion and gold price calculator for Pakistani gold market.',
  keywords: 'tola to grams pakistan, gold tola pakistan, gold rate pakistan pkr, tola converter',
  alternates: {
    canonical: 'https://tola-to-grams.com/pakistan',
  },
};

export default function PakistanPage() {
  return (
    <div className="w-full bg-slate-900">
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <RegionalConverter
            title="Tola to Grams — Pakistan"
            subtitle="Accurate conversion and gold value calculator for Pakistani gold market"
            regionName="Pakistan"
            currency="PKR"
            currencySymbol="₨"
            approxRatePerTola={270000}
            regions={[
              { name: 'India', link: '/india' },
              { name: 'Nepal', link: '/nepal' },
              { name: 'Dubai', link: '/dubai' },
              { name: 'UAE', link: '/uae' },
              { name: 'UK', link: '/uk' },
            ]}
          />
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-2xl font-bold gradient-text mb-6">About Tola in Pakistan</h2>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                The tola is the primary unit in Pakistan's gold market. Whether buying jewelry in Karachi or trading in Islamabad, this converter helps with accurate tola to grams conversion.
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
            <Link href="/uk" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">UK</h3>
              <p className="text-slate-400 text-sm">Gold rate in GBP · Tola converter</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
