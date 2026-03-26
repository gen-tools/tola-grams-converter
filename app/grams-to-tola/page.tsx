import type { Metadata } from 'next';
import ConverterV2 from '@/components/ConverterV2Dynamic';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Grams to Tola Converter - Reverse Conversion',
  description: 'Convert grams to tola instantly with our free online converter.',
};

export default function GramsToTolaPage() {
  return (
    <div className="w-full bg-dark-900">
      <section className="py-8 md:py-12 bg-dark-900 border-b border-primary-900">
        <div className="container-max">
          <ConverterV2  
            type="grams-to-tola"
            title="Grams to Tola"
            subtitle="Reverse conversion"
            regions={[
              { name: 'Pakistan', link: '/pakistan' },
              { name: 'India', link: '/india' },
            ]}
          />
        </div>
      </section>

      <section className="py-8 bg-dark-800 border-b border-primary-900">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-gray-300 text-sm">
            <h2 className="text-2xl font-bold text-primary-400 mb-4">
              Reverse Conversion
            </h2>
            <p className="mb-4">
              Use this converter to reverse the conversion - from grams to tola. Perfect when you have international prices in grams.
            </p>
            <p>
              Formula: <strong>Tola = Grams ÷ 11.6638038</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-dark-900">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-primary-400 mb-6 text-center">
            Other Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <Link href="/" className="p-4 border border-primary-800 rounded hover:bg-dark-700 text-sm">
              <h3 className="font-bold text-primary-400 mb-1">Tola to Grams</h3>
              <p className="text-gray-400">Main converter</p>
            </Link>
            <Link href="/tola-to-masha" className="p-4 border border-primary-800 rounded hover:bg-dark-700 text-sm">
              <h3 className="font-bold text-primary-400 mb-1">Tola to Masha</h3>
              <p className="text-gray-400">Traditional units</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
