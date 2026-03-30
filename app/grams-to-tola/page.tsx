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
            asH1={true}
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

      {/* Article Hero */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 md:p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6 leading-tight">
              Gram to Tola Converter – Fast, Accurate, and Easy to Use
            </h2>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              If you deal with gold in any way, you already know one thing: weight matters a lot. Even a small difference can change the total price. That's why converting between grams and tola correctly is so important.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mt-4">
              Our gram to tola converter is built to make this process simple. You don't need to remember formulas or do manual calculations. Just enter the value, and you get the result instantly.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mt-4">
              This tool is designed for real people who want quick and correct answers without confusion.
            </p>
          </div>
        </div>
      </section>

      {/* Why You Need */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Why You Need a Gram to Tola Converter
            </h2>
            <div className="text-slate-300 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                In many countries like{' '}
                <Link href="/pakistan" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Pakistan</Link>{' '}
                and{' '}
                <Link href="/india" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">India</Link>,
                gold is still measured in tola, while most modern systems use grams. Because of this, people often face problems when buying or selling gold.
              </p>
              <p>
                You might check gold prices online in grams, but when you visit a shop, the rate is given per tola. Now you have to convert the value just to understand what you are paying.
              </p>
              <p>This creates a gap.</p>
              <p>
                Most people try to solve this by guessing or using rough numbers. But guessing is risky, especially when gold prices are high.
              </p>
              <p>
                Our <strong className="text-amber-400">gram to tola converter online</strong> removes this confusion completely. It gives you the exact value within seconds so you can make better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formula */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Simple and Accurate Conversion Formula
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Behind the tool, there is a standard formula used in gold markets:
            </p>
            <div className="bg-slate-800 rounded-xl p-4 font-mono text-sm space-y-2">
              <p className="text-amber-300">1 tola = 11.66 grams</p>
              <p className="text-slate-300">So when you convert:</p>
              <p className="text-amber-300">Tola = Grams ÷ 11.66</p>
              <p className="text-slate-300">And for reverse:</p>
              <p className="text-amber-300">Grams = Tola × 11.66</p>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              You don't need to calculate this yourself. The tool does it instantly and gives you the correct result every time.
            </p>
          </div>
        </div>
      </section>

      {/* Common Conversions */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Common Conversions You Can Check Instantly
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              People often search for quick conversions like:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                '1 gram tola',
                '10 gram tola',
                '100 gram to tola',
                '1 gram gold into tola',
                '10 tola to gram',
              ].map((term) => (
                <div key={term} className="glass-card p-3 rounded-xl text-center">
                  <span className="text-amber-400 text-sm font-medium">{term}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Instead of searching again and again, you can use this tool to get all these values in one place.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">For example:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm glass-card rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="text-left px-4 py-3 text-amber-400 font-semibold">Conversion</th>
                    <th className="text-left px-4 py-3 text-amber-400 font-semibold">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {[
                    ['1 gram', '0.0857 tola'],
                    ['10 grams', '0.857 tola'],
                    ['100 grams', '8.57 tola'],
                    ['10 tola', '116.6 grams'],
                  ].map(([from, to]) => (
                    <tr key={from} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-3 text-slate-300">{from}</td>
                      <td className="px-4 py-3 text-amber-300 font-mono">{to}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              These numbers may look simple, but doing them manually every time is not easy. That's why a converter is helpful.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Real-Life Use */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Built for Real-Life Use
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              This gram to tola converter is not just for theory. It is made for everyday use.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-400 mb-3">When Buying Gold</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  When you buy gold jewelry, the weight is usually shown in grams, but the price is based on tola. Without conversion, you cannot clearly understand if the price is fair.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  This tool helps you check everything quickly and avoid overpaying.
                </p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-400 mb-3">When Selling Gold</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  If you are selling gold, accuracy is very important. Even a small mistake can reduce the amount you receive.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  With this converter, you can check the exact value before making any deal.
                </p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-400 mb-3">For Gold Investment</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  If you track gold prices, you will notice that some platforms use grams while others use tola. To compare prices correctly, you need accurate conversion.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  This tool helps you stay updated and make better decisions.
                </p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-400 mb-3">For Online Shopping</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Online gold stores usually list weight in grams. But if you think in tola, it becomes hard to understand the value.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  Using this converter, you can quickly convert gram into tola and understand what you are buying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy to Use */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Easy to Use for Everyone
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              One of the best things about this tool is its simplicity.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              You don't need any technical knowledge. Just:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl flex items-start gap-3">
                <span className="text-amber-400 font-black text-lg leading-none mt-0.5">1.</span>
                <p className="text-slate-300 text-sm">Enter the value in grams</p>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-start gap-3">
                <span className="text-amber-400 font-black text-lg leading-none mt-0.5">2.</span>
                <p className="text-slate-300 text-sm">Get the result in tola instantly</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              There is no need to install anything or sign up. It works directly in your browser and gives you results in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Avoid Common Mistakes */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Avoid Common Mistakes
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Many people make simple mistakes when converting grams to tola. These mistakes can cost money.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Here are some common ones:
            </p>
            <div className="space-y-3">
              {[
                'Thinking that 1 tola equals 10 grams (this is wrong)',
                'Rounding numbers too early',
                'Mixing different units like grams and ounces',
              ].map((mistake, i) => (
                <div key={i} className="glass-card p-4 rounded-xl flex items-start gap-3">
                  <span className="text-red-400 font-black text-lg leading-none mt-0.5">✕</span>
                  <p className="text-slate-300 text-sm">{mistake}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Our converter helps you avoid all these issues by giving exact results based on the correct formula.
            </p>
          </div>
        </div>
      </section>

      {/* Why Accuracy Matters */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Why Accuracy Matters More Today
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Gold prices are higher than ever. This means even a small mistake can make a big difference.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              For example, if you make a mistake of just 0.1 tola, it can change the final price depending on the current gold rate.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              That's why using a reliable <strong className="text-amber-400">gram to tola converter</strong> is important. It keeps your calculations correct and protects your money.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Conversion Table */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Quick Conversion Table
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              For a quick idea, here are some basic values:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm glass-card rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="text-left px-4 py-3 text-amber-400 font-semibold">Grams</th>
                    <th className="text-left px-4 py-3 text-amber-400 font-semibold">Tola</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {[
                    ['1 gram', '0.0857 tola'],
                    ['5 grams', '0.428 tola'],
                    ['10 grams', '0.857 tola'],
                    ['20 grams', '1.714 tola'],
                    ['50 grams', '4.286 tola'],
                    ['100 grams', '8.57 tola'],
                  ].map(([grams, tola]) => (
                    <tr key={grams} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-3 text-slate-300">{grams}</td>
                      <td className="px-4 py-3 text-amber-300 font-mono">{tola}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              You can use this table for rough estimates, but for exact numbers, the tool is always better.
            </p>
          </div>
        </div>
      </section>

      {/* Fast, Reliable, Always Available */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Fast, Reliable, and Always Available
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              This <strong className="text-amber-400">gram to tola converter online</strong> is designed to work anytime you need it. Whether you are at home, in a shop, or checking prices online, you can use it instantly.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              It saves time, reduces confusion, and helps you stay accurate.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              There is no waiting, no complex steps, and no risk of wrong calculations.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Use */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Who Should Use This Tool
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              This tool is useful for anyone dealing with gold:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'People buying jewelry',
                'People selling gold',
                'Investors tracking gold prices',
                'Shop owners',
                'Students learning conversions',
              ].map((user) => (
                <div key={user} className="glass-card p-4 rounded-xl flex items-center gap-3">
                  <span className="text-amber-400 font-black">›</span>
                  <p className="text-slate-300 text-sm">{user}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              If you need to convert grams to tola, this tool is made for you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: 'What is 1 gram in tola?',
                  a: '1 gram is equal to 0.0857 tola based on the standard conversion.',
                },
                {
                  q: 'How many grams are in 1 tola?',
                  a: '1 tola is equal to 11.66 grams. This is the official value used in gold markets.',
                },
                {
                  q: 'How to convert gram to tola easily?',
                  a: 'The easiest way is to use a gram to tola converter online. You just enter the value and get the result instantly without calculation.',
                },
                {
                  q: 'What is 10 gram tola?',
                  a: '10 grams is equal to 0.857 tola.',
                },
                {
                  q: 'What is 100 gram to tola?',
                  a: '100 grams is equal to 8.57 tola.',
                },
                {
                  q: 'How much is 10 tola in grams?',
                  a: '10 tola is equal to 116.6 grams.',
                },
                {
                  q: 'Why is tola still used in Pakistan?',
                  a: 'Tola is a traditional unit that has been used for many years in gold markets. Even today, gold prices are often announced per tola.',
                },
                {
                  q: 'Is gram or tola more accurate?',
                  a: 'Both are accurate units, but grams are used globally. Tola is mainly used in local markets. The important thing is to convert correctly between them.',
                },
                {
                  q: 'Can I use this converter for gold and silver?',
                  a: 'Yes, this converter works for any material measured in grams and tola, including gold and silver.',
                },
              ].map((faq, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl">
                  <h3 className="font-bold text-white mb-2 text-sm md:text-base">
                    Q{i + 1}: {faq.q}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <span className="text-amber-400 font-semibold">A{i + 1}:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Words */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Final Words
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Understanding the difference between grams and tola is very important when dealing with gold. Many people still make mistakes because they guess or use the wrong formula.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              A gram to tola converter solves this problem in the easiest way. It gives you fast, accurate results and helps you make better decisions.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Whether you want to convert 1 gram tola, 10 gram tola, 100 gram to tola, or even 10 tola to gram, this tool does everything in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Other Tools */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <h2 className="text-2xl font-bold gradient-text mb-8 text-center">
            Other Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Tola to Grams</h3>
              <p className="text-slate-400 text-sm">Main converter</p>
            </Link>
            <Link href="/tola-to-masha" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Tola to Masha</h3>
              <p className="text-slate-400 text-sm">Traditional units</p>
            </Link>
            <Link href="/gold-weight-converter" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Gold Weight Converter</h3>
              <p className="text-slate-400 text-sm">All weight units</p>
            </Link>
            <Link href="/tola-vs-grams" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Tola vs Grams</h3>
              <p className="text-slate-400 text-sm">Understand the difference</p>
            </Link>
            <Link href="/pakistan" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Pakistan Gold Rates</h3>
              <p className="text-slate-400 text-sm">Regional pricing</p>
            </Link>
            <Link href="/india" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">India Gold Rates</h3>
              <p className="text-slate-400 text-sm">Regional pricing</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
