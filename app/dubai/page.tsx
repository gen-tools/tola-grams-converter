import type { Metadata } from 'next';
import ConverterV2 from '@/components/ConverterV2Dynamic';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tola to Grams Converter Dubai | Gold Trading',
  description: 'Convert tola to grams for Dubai and Emirates gold markets.',
  keywords: 'tola to grams dubai, gold converter, emirates weight',
  alternates: {
    canonical: 'https://tola-to-grams.com/dubai',
  },
};

export default function DubaiPage() {
  return (
    <div className="w-full bg-slate-900">
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <ConverterV2
            type="tola-to-grams"
            title="Tola to Grams Dubai"
            subtitle="Gold weight conversion for Dubai trading"
            regions={[
              { name: 'Pakistan', link: '/pakistan' },
              { name: 'India', link: '/india' },
              { name: 'Nepal', link: '/nepal' },
              { name: 'UAE', link: '/uae' },
              { name: 'UK', link: '/uk' },
            ]}
          />
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-2xl font-bold gradient-text mb-6">About Tola in Dubai</h2>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                Dubai is a global hub for gold trading and jewelry manufacturing. While Dubai uses grams officially, many South Asian traders understand tola. Essential for jewelry professionals working with international suppliers.
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
              <p className="text-slate-400 text-sm">Tola converter for Pakistani gold market</p>
            </Link>
            <Link href="/india" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">India</h3>
              <p className="text-slate-400 text-sm">Tola converter for Indian gold market</p>
            </Link>
            <Link href="/nepal" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Nepal</h3>
              <p className="text-slate-400 text-sm">Tola converter for Nepali gold market</p>
            </Link>
            <Link href="/uae" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">UAE</h3>
              <p className="text-slate-400 text-sm">Tola converter for UAE markets</p>
            </Link>
            <Link href="/uk" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">UK</h3>
              <p className="text-slate-400 text-sm">Tola converter for UK gold trading</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
