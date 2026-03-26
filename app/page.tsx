import type { Metadata } from 'next';
import ConverterV2 from '@/components/ConverterV2';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tola to Grams Converter - Fast & Free',
  description: 'Convert tola to grams instantly. 1 tola = 11.6638 grams. Free online converter for gold traders and jewelers.',
  keywords: ['tola to grams', 'gold converter', 'weight converter'],
};

export default function Home() {
  return (
    <div className="w-full bg-slate-900">
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <ConverterV2
            type="tola-to-grams"
            title="Tola to Grams"
            subtitle="Convert instantly"
            regions={[
              { name: 'Pakistan', link: '/pakistan' },
              { name: 'India', link: '/india' },
              { name: 'Nepal', link: '/nepal' },
            ]}
          />
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold gradient-text mb-4">Need Reverse?</h2>
          <Link href="/grams-to-tola" className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black px-6 py-2 rounded-xl font-bold text-sm transition-colors">
            Grams to Tola →
          </Link>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-2xl font-bold gradient-text mb-6">
              Quick Facts
            </h2>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                <span className="text-amber-400 font-semibold">1 Tola = 11.6638038 Grams</span>
              </p>
              <p>
                The tola is a traditional weight unit used in South Asia for gold, jewelry, and precious metals. Still widely used in India, Pakistan, Nepal, and other countries for measuring precious items.
              </p>
              <p>
                Our converter provides instant, accurate conversions between tola and grams. Perfect for traders, jewelers, and anyone working with precious metals. The conversion factor is internationally recognized and consistent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <h2 className="text-2xl font-bold gradient-text mb-8 text-center">
            More Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/grams-to-tola" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Grams to Tola</h3>
              <p className="text-slate-400 text-sm">Reverse converter for grams to tola</p>
            </Link>
            <Link href="/tola-to-masha" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Tola to Masha</h3>
              <p className="text-slate-400 text-sm">Traditional units converter</p>
            </Link>
            <Link href="/what-is-tola" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">What is Tola?</h3>
              <p className="text-slate-400 text-sm">Learn about tola measurements</p>
            </Link>
            <Link href="/pakistan" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Pakistan Market</h3>
              <p className="text-slate-400 text-sm">Regional guide and insights</p>
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Tola to Grams Converter',
            description: 'Convert tola to grams instantly',
            url: 'https://tola-to-grams.com',
          }),
        }}
      />
    </div>
  );
}
