import type { Metadata } from 'next';
import ConverterV2 from '@/components/ConverterV2';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gold Weight Converter | Multiple Unit Converter',
  description: 'Convert gold weight between tola, grams, masha and other units. Complete gold weight conversion tool.',
  keywords: 'gold weight converter, gold units, tola grams converter',
  alternates: {
    canonical: 'https://tola-to-grams.com/gold-weight-converter',
  },
};

export default function GoldWeightConverter() {
  const regions = [
    { name: 'In Pakistan', link: '/pakistan' },
    { name: 'In India', link: '/india' },
    { name: 'In Nepal', link: '/nepal' },
    { name: 'In UAE', link: '/uae' },
  ];

  return (
    <div className="w-full bg-dark-900">
      {/* Converter Section - Direct Start */}
      <section className="py-12 md:py-16 bg-dark-900 border-b border-primary-900">
        <div className="container-max">
          <ConverterV2 
            type="tola-to-grams"
            title="Gold Weight Converter"
            subtitle="Convert between all major gold weight units"
            regions={regions}
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-dark-800 border-b border-primary-900">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500 mb-8">
              Complete Gold Weight Reference
            </h2>

            <div className="space-y-6 text-gray-300 text-sm">
              <p className="leading-relaxed">
                When working with gold, you may encounter various measurement units depending on your location and market. This comprehensive tool covers the main units used in gold trading and jewelry.
              </p>

              <h3 className="text-2xl font-bold text-primary-400">
                Primary Gold Weight Units
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-dark-700 border-b-2 border-primary-600">
                      <th className="px-3 py-2 text-primary-400 font-bold">Unit</th>
                      <th className="px-3 py-2 text-primary-400 font-bold">Grams</th>
                      <th className="px-3 py-2 text-primary-400 font-bold">Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary-800 hover:bg-dark-700">
                      <td className="px-3 py-2 font-semibold text-gray-300">Gram</td>
                      <td className="px-3 py-2 text-gray-300">1</td>
                      <td className="px-3 py-2 text-gray-300">International</td>
                    </tr>
                    <tr className="border-b border-primary-800 hover:bg-dark-700">
                      <td className="px-3 py-2 font-semibold text-gray-300">Tola</td>
                      <td className="px-3 py-2 text-gray-300">11.66</td>
                      <td className="px-3 py-2 text-gray-300">South Asia</td>
                    </tr>
                    <tr className="border-b border-primary-800 hover:bg-dark-700">
                      <td className="px-3 py-2 font-semibold text-gray-300">Troy Ounce</td>
                      <td className="px-3 py-2 text-gray-300">31.10</td>
                      <td className="px-3 py-2 text-gray-300">International trading</td>
                    </tr>
                    <tr className="border-b border-primary-800 hover:bg-dark-700">
                      <td className="px-3 py-2 font-semibold text-gray-300">Masha</td>
                      <td className="px-3 py-2 text-gray-300">0.97</td>
                      <td className="px-3 py-2 text-gray-300">South Asia (detail)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-primary-400">
                Why Multiple Units Exist
              </h3>
              <p className="leading-relaxed">
                Different regions developed their own weight systems for gold trading over centuries. While the metric system is now standard internationally, many traditional markets continue using their historical units, making conversion essential for global commerce.
              </p>

              <h3 className="text-2xl font-bold text-primary-400">
                Our Converters
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>✓ <Link href="/" className="text-primary-400 hover:text-primary-300">Tola to Grams</Link> - The most common conversion</li>
                <li>✓ <Link href="/grams-to-tola" className="text-primary-400 hover:text-primary-300">Grams to Tola</Link> - Reverse conversion</li>
                <li>✓ <Link href="/tola-to-masha" className="text-primary-400 hover:text-primary-300">Tola to Masha</Link> - For detailed specifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 md:py-20 bg-dark-900">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500 mb-10 text-center">
            Quick Links to Converters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link href="/" className="p-6 border-2 border-primary-800 rounded-lg hover:border-primary-500 hover:bg-dark-800 transition group">
              <h3 className="text-lg font-bold text-primary-400 mb-2">Tola → Grams</h3>
              <p className="text-gray-400 text-sm mb-3">Main converter</p>
              <span className="text-primary-400 font-bold text-sm">Use Tool →</span>
            </Link>
            <Link href="/grams-to-tola" className="p-6 border-2 border-primary-800 rounded-lg hover:border-primary-500 hover:bg-dark-800 transition group">
              <h3 className="text-lg font-bold text-primary-400 mb-2">Grams → Tola</h3>
              <p className="text-gray-400 text-sm mb-3">Reverse converter</p>
              <span className="text-primary-400 font-bold text-sm">Use Tool →</span>
            </Link>
            <Link href="/tola-to-masha" className="p-6 border-2 border-primary-800 rounded-lg hover:border-primary-500 hover:bg-dark-800 transition group">
              <h3 className="text-lg font-bold text-primary-400 mb-2">Tola → Masha</h3>
              <p className="text-gray-400 text-sm mb-3">Detailed measurements</p>
              <span className="text-primary-400 font-bold text-sm">Use Tool →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
