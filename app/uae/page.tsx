import type { Metadata } from 'next';
import ConverterV2 from '@/components/ConverterV2Dynamic';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tola to Grams Converter UAE | Dubai Gold Market',
  description: 'Convert tola to grams for UAE and Dubai gold markets. Conversion tool for precious metals trading.',
  keywords: 'tola to grams uae, dubai gold converter, emirates gold weight',
  alternates: {
    canonical: 'https://tola-to-grams.com/uae',
  },
};

export default function UAEPage() {
  return (
    <div className="w-full bg-dark-900">
      <section className="py-8 bg-dark-900 border-b border-primary-900">
        <div className="container-max">
          <ConverterV2
            type="tola-to-grams"
            title="Tola to Grams UAE"
            subtitle="Gold weight conversion for UAE and Dubai"
            regions={[
              { name: 'Pakistan', link: '/pakistan' },
              { name: 'India', link: '/india' },
            ]}
          />
        </div>
      </section>

      <section className="py-6 bg-dark-800 border-b border-primary-900">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-gray-300 text-sm">
            <h2 className="text-xl font-bold text-primary-400 mb-3">About Tola in UAE</h2>
            <p className="mb-2">
              Dubai is a major hub for gold trading and jewelry manufacturing. While UAE officially uses the metric system, tola is widely recognized in traditional gold trading, especially among South Asian traders and communities.
            </p>
            <p className="text-primary-300 font-bold">1 Tola = 11.6638 Grams</p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-dark-900">
        <div className="container-max">
          <h2 className="text-lg font-bold text-primary-400 mb-4 text-center">Other Countries</h2>
          <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
            <Link href="/pakistan" className="p-3 border border-primary-800 rounded text-center text-sm hover:bg-dark-800">
              <h3 className="font-bold text-primary-400">Pakistan</h3>
            </Link>
            <Link href="/india" className="p-3 border border-primary-800 rounded text-center text-sm hover:bg-dark-800">
              <h3 className="font-bold text-primary-400">India</h3>
            </Link>
            <Link href="/nepal" className="p-3 border border-primary-800 rounded text-center text-sm hover:bg-dark-800">
              <h3 className="font-bold text-primary-400">Nepal</h3>
            </Link>
            <Link href="/dubai" className="p-3 border border-primary-800 rounded text-center text-sm hover:bg-dark-800">
              <h3 className="font-bold text-primary-400">Dubai</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
