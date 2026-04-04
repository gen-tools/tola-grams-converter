import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tola vs Grams | Complete Comparison Guide',
  description: 'Compare tola and grams. Understand the differences, history, and practical usage of both weight units.',
  keywords: 'tola vs grams, weight comparison, traditional vs metric',
  alternates: {
    canonical: 'https://tola-to-grams-converter.vercel.app/tola-vs-grams',
  },
};

export default function TolaVsGrams() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-24 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tola vs Grams
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Understanding the differences between traditional and metric weight units.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-gray-700 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Key Differences
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tola</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Traditional unit</li>
                  <li>• Used in South Asia</li>
                  <li>• 11.6638038 grams</li>
                  <li>• Historical system</li>
                  <li>• Still used in gold trading</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gram</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Metric unit</li>
                  <li>• Used worldwide</li>
                  <li>• 1/1000 of a kilogram</li>
                  <li>• International standard</li>
                  <li>• Official measurements</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              Historical Context
            </h2>
            <p>
              The tola emerged from ancient South Asian commerce and represents centuries of trade tradition. The gram, developed as part of the metric system in 18th-century France, represents modern international standardization efforts.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              Where Each is Used
            </h2>
            
            <h3 className="text-2xl font-bold text-gray-900">Tola Usage</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Gold markets in India, Pakistan, Nepal, Bangladesh</li>
              <li>Traditional jewelry stores</li>
              <li>Precious metals trading in South Asia</li>
              <li>Cultural and ceremonial gold transactions</li>
              <li>Some regions of the Middle East with South Asian communities</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6">Gram Usage</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>International gold trading and commodities</li>
              <li>Government and official records worldwide</li>
              <li>Scientific and laboratory work</li>
              <li>Jewelry certificates and hallmarking</li>
              <li>Official price quotations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              Practical Comparison
            </h2>
            <p>
              If you're buying gold, the weight standard used depends on your location and seller:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Scenario</th>
                    <th className="border border-gray-300 px-4 py-2">Unit Used</th>
                    <th className="border border-gray-300 px-4 py-2">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Jewelry in Delhi</td>
                    <td className="border border-gray-300 px-4 py-2">Tola</td>
                    <td className="border border-gray-300 px-4 py-2">Traditional practice</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">London Bullion</td>
                    <td className="border border-gray-300 px-4 py-2">Grams</td>
                    <td className="border border-gray-300 px-4 py-2">International standard</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Pakistan Market</td>
                    <td className="border border-gray-300 px-4 py-2">Tola</td>
                    <td className="border border-gray-300 px-4 py-2">Local tradition</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Certificate</td>
                    <td className="border border-gray-300 px-4 py-2">Grams</td>
                    <td className="border border-gray-300 px-4 py-2">Official record</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              When You Need Conversion
            </h2>
            <p>
              Understanding both units and being able to convert between them is essential when:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Buying jewelry in one unit and importing internationally</li>
              <li>Comparing prices across different markets</li>
              <li>Working in jewelry manufacturing with diverse suppliers</li>
              <li>Trading gold across regional boundaries</li>
              <li>Documenting gold in international commerce</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              The Bottom Line
            </h2>
            <p>
              Neither unit is "better" – they serve different purposes and contexts. Tola represents the rich commercial heritage of South Asia, while grams represent global standardization. In our interconnected world, knowing both and being able to convert between them is valuable knowledge.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary-600 mt-8">
              <p className="font-semibold text-lg text-gray-900 mb-4">
                Quick Conversion
              </p>
              <p className="text-gray-700">
                1 Tola = 11.6638038 Grams
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Use our <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">converter tool</Link> for instant calculations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Convert Now
          </h2>
          <Link
            href="/"
            className="inline-block gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-md-custom transition"
          >
            Tola to Grams Converter
          </Link>
        </div>
      </section>
    </div>
  );
}
