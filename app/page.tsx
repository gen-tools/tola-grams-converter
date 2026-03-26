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
    <div className="w-full bg-dark-900">
      <section className="py-8 md:py-12 bg-dark-900 border-b border-primary-900">
        <div className="container-max">
          <ConverterV2 
            type="tola-to-grams"
            title="Tola to Grams"
            subtitle="Convert instantly"
            regions={[
              { name: 'Pakistan', link: '/pakistan' },
              { name: 'India', link: '/india' },
            ]}
          />
        </div>
      </section>

      <section className="py-8 bg-dark-800 border-b border-primary-900">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">Need Reverse?</h2>
          <Link href="/grams-to-tola" className="inline-block gradient-accent text-dark-900 px-6 py-2 rounded font-bold text-sm">
            Grams to Tola →
          </Link>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-dark-900 border-b border-primary-900">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-gray-300 text-sm">
            <h2 className="text-2xl font-bold text-primary-400 mb-6">
              Quick Facts
            </h2>
            <div className="space-y-4">
              <p>
                <strong>1 Tola = 11.6638038 Grams</strong>
              </p>
              <p>
                The tola is a traditional weight unit used in South Asia for gold, jewelry, and precious metals. Still widely used in India, Pakistan, Nepal, and other countries.
              </p>
              <p>
                Our converter provides instant, accurate conversions between tola and grams. Perfect for traders, jewelers, and anyone working with precious metals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-dark-800">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-primary-400 mb-6 text-center">
            More Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/grams-to-tola" className="p-4 border border-primary-800 rounded hover:bg-dark-700 text-sm">
              <h3 className="font-bold text-primary-400 mb-1">Grams to Tola</h3>
              <p className="text-gray-400">Reverse converter</p>
            </Link>
            <Link href="/tola-to-masha" className="p-4 border border-primary-800 rounded hover:bg-dark-700 text-sm">
              <h3 className="font-bold text-primary-400 mb-1">Tola to Masha</h3>
              <p className="text-gray-400">Traditional units</p>
            </Link>
            <Link href="/what-is-tola" className="p-4 border border-primary-800 rounded hover:bg-dark-700 text-sm">
              <h3 className="font-bold text-primary-400 mb-1">What is Tola?</h3>
              <p className="text-gray-400">Learn more</p>
            </Link>
            <Link href="/pakistan" className="p-4 border border-primary-800 rounded hover:bg-dark-700 text-sm">
              <h3 className="font-bold text-primary-400 mb-1">Pakistan Market</h3>
              <p className="text-gray-400">Regional guide</p>
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
