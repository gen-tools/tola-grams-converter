import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Tola to Grams Converter',
  description: 'Learn about our mission to provide accurate, free conversion tools for traditional and modern weight units.',
  alternates: {
    canonical: 'https://tola-to-grams-converter.vercel.app/about',
  },
};

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-24 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Tola Converter
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted source for accurate weight conversions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Tola to Grams Converter is dedicated to providing accurate, free conversion tools for those working with traditional weight units used in South Asia. We believe that in our interconnected world, easy access to reliable conversion tools is essential for commerce, education, and cultural preservation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Why This Tool Exists
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Despite the global adoption of the metric system, traditional weight units like tola remain in widespread use in South Asia, particularly in jewelry and precious metals trading. Conversion between tola and grams is essential for:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg mb-6">
              <li>Gold traders and jewelry retailers</li>
              <li>International precious metals commerce</li>
              <li>Jewelry manufacturers and designers</li>
              <li>Gemstone and diamond traders</li>
              <li>Students and researchers</li>
              <li>Anyone doing business across regional markets</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Our Accuracy
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We use the precise, internationally recognized conversion factor:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary-600 mb-6">
              <p className="font-semibold text-lg text-gray-900">
                1 Tola = 11.6638038 Grams
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              This conversion factor is used by traders, governments, and institutions worldwide. Our tool provides results accurate to two decimal places, suitable for all practical purposes including high-value precious metals transactions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Free and Accessible
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              All our tools are completely free to use. We believe essential utilities like unit conversion should be accessible to everyone, regardless of their economic situation. No accounts, no ads cluttering the interface, no hidden fees.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Educational Content
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Beyond the converter tool itself, we provide extensive educational content about:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg mb-6">
              <li>The history and origin of the tola</li>
              <li>How tola is used in different South Asian countries</li>
              <li>Understanding the relationship between traditional and metric units</li>
              <li>Practical guides for jewelry and precious metals trading</li>
              <li>Common conversion scenarios and examples</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Contact & Support
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Have questions or suggestions? We'd love to hear from you. You can reach us through our <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">contact page</Link>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Privacy & Security
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Your privacy is important to us. We don't collect personal information, don't track your conversions, and don't use cookies for analytics. All conversions happen locally in your browser.
            </p>
            <p className="text-lg text-gray-700">
              For more details, please see our <Link href="/privacy-policy" className="text-primary-600 hover:text-primary-700 font-semibold">privacy policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start Converting
          </h2>
          <Link
            href="/"
            className="inline-block gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-md-custom transition"
          >
            Use the Converter
          </Link>
        </div>
      </section>
    </div>
  );
}
