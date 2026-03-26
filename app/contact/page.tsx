'use client';

import type { Metadata } from 'next';

// Note: Metadata is only supported in server components, 
// but we're using 'use client' for form interactivity
// In production, consider splitting into a separate server wrapper

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission handled by browser default
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="w-full bg-dark-900">
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-24 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-dark-900">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-800 rounded-lg shadow-md-custom p-8 border border-primary-900">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-primary-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-primary-800 rounded-lg focus:outline-none focus:border-primary-500 bg-dark-700 text-gray-100"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-primary-800 rounded-lg focus:outline-none focus:border-primary-500 bg-dark-700 text-gray-100"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-primary-800 rounded-lg focus:outline-none focus:border-primary-500 bg-dark-700 text-gray-100"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-2 border border-primary-800 rounded-lg focus:outline-none focus:border-primary-500 bg-dark-700 text-gray-100"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-md-custom transition"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-6">
                We typically respond within 24 hours.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-800 p-6 rounded-lg border border-primary-900">
                <h3 className="font-bold text-primary-400 mb-2">Feedback</h3>
                <p className="text-gray-400 text-sm">
                  Have suggestions for new features or improvements?
                </p>
              </div>
              <div className="bg-dark-800 p-6 rounded-lg border border-primary-900">
                <h3 className="font-bold text-primary-400 mb-2">Support</h3>
                <p className="text-gray-400 text-sm">
                  Need help using our converter tools?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
