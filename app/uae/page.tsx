import type { Metadata } from 'next';
import RegionalConverter from '@/components/RegionalConverterDynamic';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tola to Grams Converter UAE | Gold Rate in AED',
  description: 'Convert tola to grams in UAE and calculate gold value in AED. Instant tola weight conversion and gold price calculator for UAE gold market.',
  keywords: 'tola to grams uae, gold rate uae aed, dubai gold converter, emirates gold weight',
  alternates: {
    canonical: 'https://tola-to-grams.com/uae',
  },
};

export default function UAEPage() {
  return (
    <div className="w-full bg-slate-900">
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <RegionalConverter
            title="Tola to Grams — UAE"
            subtitle="Gold weight conversion and value calculator for UAE and Dubai gold market"
            regionName="UAE"
            currency="AED"
            currencySymbol="د.إ"
            approxRatePerTola={4100}
            regions={[
              { name: 'Pakistan', link: '/pakistan' },
              { name: 'India', link: '/india' },
              { name: 'Nepal', link: '/nepal' },
              { name: 'Dubai', link: '/dubai' },
              { name: 'UK', link: '/uk' },
            ]}
          />
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-2xl font-bold gradient-text mb-6">About Tola in UAE</h2>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                Dubai is a major hub for gold trading and jewelry manufacturing. While UAE officially uses the metric system, tola is widely recognized in traditional gold trading, especially among South Asian traders and communities.
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
