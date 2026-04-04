import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gold Weight Guide | Complete Reference for Jewelry & Trading',
  description: 'Complete guide to gold weights, units, measurements, and conversions for jewelry and precious metals trading.',
  keywords: 'gold weight guide, jewelry weight, gold measurement, conversion guide',
  alternates: {
    canonical: 'https://tola-to-grams-converter.vercel.app/gold-weight-guide',
  },
};

export default function GoldWeightGuide() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-24 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gold Weight Guide
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Master gold measurements, units, and conversions for jewelry and trading.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-gray-700 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Introduction to Gold Weight
            </h2>
            <p>
              Understanding gold weight is crucial whether you're buying jewelry, investing in bullion, or working in the precious metals industry. This guide covers everything you need to know about measuring and calculating gold weight.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              The Primary Weight Units
            </h2>

            <h3 className="text-2xl font-bold text-gray-900">Grams</h3>
            <p>
              The gram is the standard metric unit of weight used internationally. One kilogram equals 1000 grams. In gold trading, grams are the official measurement unit used by exchanges, governments, and most modern retailers worldwide.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>1 gram = 0.0322 troy ounces</li>
              <li>1 gram = 0.0858 tola</li>
              <li>Used in official certificates and hallmarking</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6">Troy Ounce</h3>
            <p>
              The troy ounce is used specifically for precious metals and is different from regular avoirdupois ounces. It's the standard for international gold trading and commodity markets.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>1 troy ounce = 31.1035 grams</li>
              <li>Used in international gold markets</li>
              <li>Standard for bullion and coins</li>
              <li>Abbreviated as "oz" or "ozt"</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6">Tola</h3>
            <p>
              The tola is the traditional unit used across South Asia. It remains the standard in jewelry markets in India, Pakistan, Nepal, Bangladesh, and Sri Lanka.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>1 tola = 11.6638 grams</li>
              <li>1 tola = 12 masha</li>
              <li>Used in South Asian gold markets</li>
              <li>Historical significance in the region</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              Understanding Gold Purity
            </h2>
            <p>
              It's important not to confuse gold weight with gold purity. Weight measures how much gold you have, while purity measures how pure that gold is.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Carat System</h3>
            <p>
              Purity is expressed in carats (note: different from the carat unit of weight):
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>24K = 100% pure gold</li>
              <li>22K = 91.67% pure gold (2 parts alloy)</li>
              <li>18K = 75% pure gold (practical for jewelry)</li>
              <li>14K = 58.33% pure gold</li>
              <li>10K = 41.67% pure gold</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6">Example Calculation</h3>
            <p>
              If you have a 22K gold ring weighing 10 grams:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary-600 my-6">
              <p className="text-gray-700">
                Pure gold content = 10 grams × 0.9167 (91.67%) = 9.167 grams of pure gold
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              Conversion Reference Table
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Unit</th>
                    <th className="border border-gray-300 px-4 py-2">Grams</th>
                    <th className="border border-gray-300 px-4 py-2">Troy Oz</th>
                    <th className="border border-gray-300 px-4 py-2">Tola</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">1 Gram</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">0.032</td>
                    <td className="border border-gray-300 px-4 py-2">0.086</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">1 Troy Oz</td>
                    <td className="border border-gray-300 px-4 py-2">31.10</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">2.67</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">1 Tola</td>
                    <td className="border border-gray-300 px-4 py-2">11.66</td>
                    <td className="border border-gray-300 px-4 py-2">0.375</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              Practical Tips for Gold Weighing
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Always use a calibrated scale for accurate measurements</li>
              <li>Weigh jewelry or gold without packaging or containers</li>
              <li>Make sure the scale is on a level surface</li>
              <li>Check weight multiple times for consistency</li>
              <li>Keep documentation of weight and purity</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              Resources for Further Learning
            </h2>
            <p>
              We provide specialized tools to help with your conversions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">Tola to Grams Converter</Link></li>
              <li><Link href="/grams-to-tola" className="text-primary-600 hover:text-primary-700 font-semibold">Grams to Tola Converter</Link></li>
              <li><Link href="/what-is-tola" className="text-primary-600 hover:text-primary-700 font-semibold">What is Tola?</Link></li>
              <li><Link href="/tola-vs-grams" className="text-primary-600 hover:text-primary-700 font-semibold">Tola vs Grams Comparison</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Quick Conversions?
          </h2>
          <Link
            href="/"
            className="inline-block gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-md-custom transition"
          >
            Use Our Converter
          </Link>
        </div>
      </section>
    </div>
  );
}
