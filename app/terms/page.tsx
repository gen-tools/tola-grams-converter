import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Tola to Grams Converter',
  description: 'Read our terms of service for using Tola to Grams Converter.',
  alternates: {
    canonical: 'https://tola-to-grams.com/terms',
  },
};

export default function Terms() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-24 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-gray-600">
              Last updated: {new Date().getFullYear()}
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              Terms of Service
            </h2>

            <p>
              These Terms of Service ("Terms") govern your use of the Tola to Grams Converter website and services.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Acceptance of Terms
            </h3>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Use License
            </h3>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose</li>
              <li>Attempting to decompile or reverse engineer any software</li>
              <li>Removing any copyright or other proprietary notations</li>
              <li>Transferring the materials to another person or server</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Disclaimer
            </h3>
            <p>
              The materials on our website are provided "as is." We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Accuracy of Conversions
            </h3>
            <p>
              Our converter uses the standard conversion factor of 1 Tola = 11.6638038 Grams. While we strive for accuracy, we are not responsible for any errors or omissions. Always verify important conversions independently, especially for high-value transactions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Limitations of Liability
            </h3>
            <p>
              In no event shall Tola to Grams Converter or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the site.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Accuracy of Information
            </h3>
            <p>
              We strive to maintain accurate and current information on our website. However, we make no representations or warranties regarding the accuracy, reliability, or completeness of any information on our site.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Modifications to Service
            </h3>
            <p>
              We may modify these Terms at any time. Modifications become effective when published on the website. Your continued use of the site following the posting of modified Terms means you accept and agree to the changes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Governing Law
            </h3>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where our service is operated.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Contact Us
            </h3>
            <p>
              If you have any questions about these Terms, please contact us through our contact form.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
