import type { Metadata } from 'next';
import ConverterV2 from '@/components/ConverterV2Dynamic';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Grams to Tola Converter - Reverse Conversion',
  description: 'Convert grams to tola instantly with our free online converter.',
};

export default function GramsToTolaPage() {
  return (
    <div className="w-full bg-slate-900">
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <ConverterV2
            type="grams-to-tola"
            title="Grams to Tola"
            subtitle="Reverse conversion"
            regions={[
              { name: 'Pakistan', link: '/pakistan' },
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
            <h2 className="text-2xl font-bold gradient-text mb-6">
              Reverse Conversion
            </h2>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                Use this converter to reverse the conversion — from grams to tola. Perfect when you have international prices in grams and need to convert them to the traditional tola unit used in South Asia.
              </p>
              <p>
                <span className="text-amber-400 font-semibold">Formula: Tola = Grams ÷ 11.6638038</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <h2 className="text-2xl font-bold gradient-text mb-8 text-center">
            Other Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Tola to Grams</h3>
              <p className="text-slate-400 text-sm">Main converter</p>
            </Link>
            <Link href="/tola-to-masha" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Tola to Masha</h3>
              <p className="text-slate-400 text-sm">Traditional units</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
