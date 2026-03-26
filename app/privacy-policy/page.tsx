import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tola to Grams Converter',
  description: 'Read our privacy policy to understand how we protect your data.',
  alternates: {
    canonical: 'https://tola-to-grams.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-24 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
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
              Privacy Policy
            </h2>

            <p>
              At Tola to Grams Converter, we are committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website and services.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Information We Collect
            </h3>
            <p>
              We collect minimal information and only what is necessary to provide our services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Information you voluntarily provide (e.g., through contact forms)</li>
              <li>Technical information about your device and browser (anonymously)</li>
              <li>Server logs for website security and performance</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              What We Don't Collect
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Personal identification information (unless voluntarily provided)</li>
              <li>Conversion data or search history</li>
              <li>Tracking cookies for advertising</li>
              <li>Location data</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              How We Use Information
            </h3>
            <p>
              Any information we collect is used solely to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Respond to your inquiries</li>
              <li>Maintain and improve our services</li>
              <li>Ensure website security</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Data Security
            </h3>
            <p>
              We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure. We encourage you to use secure connections when accessing our site.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Third-Party Links
            </h3>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before sharing any information.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Changes to This Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this policy.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              Contact Us
            </h3>
            <p>
              If you have questions about this Privacy Policy, please contact us through our contact form.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
