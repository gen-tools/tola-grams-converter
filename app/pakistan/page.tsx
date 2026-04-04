import type { Metadata } from "next";
import RegionalConverter from "@/components/RegionalConverterDynamic";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tola to Grams Converter Pakistan | Gold Rate in PKR",
  description:
    "Convert tola to grams in Pakistan instantly. 1 tola = 11.6638 grams. Free tola to gram calculator Pakistan for gold buyers, sellers, and investors.",
  keywords:
    "tola to gram converter pakistan, tola to gram calculator pakistan, tola to grams pakistan, gold tola to gram pakistan, pakistani tola to grams, how much gram in 1 tola pakistan, 21 tola to grams pakistan",
  alternates: {
    canonical: "https://tola-to-grams-converter.vercel.app/pakistan",
  },
};

export default function PakistanPage() {
  return (
    <div className="w-full bg-slate-900">
      {/* Converter Tool */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <RegionalConverter
            title="Tola to Grams Pakistan"
            subtitle="Accurate conversion and gold value calculator for Pakistani gold market"
            regionName="Pakistan"
            currency="PKR"
            currencySymbol="₨"
            approxRatePerTola={270000}
            regions={[
              { name: "India", link: "/india" },
              { name: "Nepal", link: "/nepal" },
              { name: "Dubai", link: "/dubai" },
              { name: "UAE", link: "/uae" },
              { name: "UK", link: "/uk" },
            ]}
          />
        </div>
      </section>

      {/* Article Hero */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 md:p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6 leading-tight">
              Tola to Grams Converter Pakistan – Simple, Accurate and Complete Guide
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-4">
              Problem: Why People Search "Tola to Gram Converter Pakistan"
            </h3>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-4">
              In Pakistan, gold is still measured in tola, but most of the world uses grams. This creates a real problem for buyers, sellers, and even normal users who just want to understand gold value.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-4">
              When you visit a jewellery shop, the rate is usually given per tola. But when you check online gold prices, they are shown in grams or ounces. Because of this difference, many people get confused and cannot compare prices properly.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-3">
              That is why people search:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
                "tola to gram converter pakistan",
                "tola to gram calculator pakistan",
                "how much gram in 1 tola pakistan",
                "gold tola to gram pakistan",
              ].map((term) => (
                <div key={term} className="glass-card p-3 rounded-xl flex items-center gap-2">
                  <span className="text-amber-400">›</span>
                  <span className="text-slate-300 text-sm">{term}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              The need is simple. People want a quick and correct way to convert tola into grams without doing hard calculations.
            </p>
          </div>
        </div>
      </section>

      {/* Agitation */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Agitation: What Goes Wrong Without a Converter
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              The real issue is not just confusion. It is the mistakes people make when they try to calculate manually.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Many people still think that 1 tola is equal to 10 grams. This is not correct. The actual value used in Pakistan is:
            </p>
            <div className="glass-card p-5 rounded-xl text-center">
              <p className="text-2xl md:text-3xl font-black text-amber-400">1 tola = 11.6638 grams</p>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Now imagine someone buying gold using the wrong value. Even a small difference becomes a big loss when the price of gold is high.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Another problem happens when people try to compare prices. Local markets in Pakistan use tola, but international markets use grams and ounces. Without conversion, you cannot understand if you are getting a fair price.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Manual calculation is also not easy for everyone. If someone wants to find 21 tola to grams pakistan, they must multiply 21 by 11.6638. Doing this again and again is slow and sometimes incorrect.
            </p>
            <p className="text-amber-400 font-semibold">
              This is where most people feel stuck.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Solution: Tola to Grams Converter Pakistan
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              A <strong className="text-amber-400">tola to grams converter pakistan</strong> solves this problem in seconds. It is a simple tool where you enter the value in tola and instantly get the result in grams.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              There is no need to remember formulas or worry about mistakes. The tool uses the correct standard and gives you accurate results every time.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              This makes it useful for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "People buying gold",
                "People selling jewellery",
                "Investors checking gold prices",
                "Students learning conversions",
              ].map((use) => (
                <div key={use} className="glass-card p-4 rounded-xl flex items-center gap-3">
                  <span className="text-amber-400 font-black">›</span>
                  <p className="text-slate-300 text-sm">{use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standard Conversion */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Standard Conversion Used in Pakistan
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              To understand everything clearly, you only need one value:
            </p>
            <div className="glass-card p-5 rounded-xl text-center">
              <p className="text-2xl md:text-3xl font-black text-amber-400">1 tola = 11.6638 grams</p>
              <p className="text-slate-400 text-sm mt-2">Official value used in Pakistan's gold market</p>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Here are some common conversions people search:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm glass-card rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="text-left px-4 py-3 text-amber-400 font-semibold">Tola</th>
                    <th className="text-left px-4 py-3 text-amber-400 font-semibold">Grams</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {[
                    ["1 tola", "11.66 grams"],
                    ["2 tola", "23.33 grams"],
                    ["5 tola", "58.32 grams"],
                    ["10 tola", "116.64 grams"],
                    ["21 tola", "244.94 grams"],
                  ].map(([tola, grams]) => (
                    <tr key={tola} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-3 text-slate-300">{tola}</td>
                      <td className="px-4 py-3 text-amber-300 font-mono">{grams}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              This answers queries like: how much gram in 1 tola pakistan, 21 tola to grams pakistan, pakistani tola to grams.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8 rounded-2xl space-y-5 border-l-4 border-amber-500">
              <h2 className="text-2xl md:text-3xl font-bold gradient-text">
                Real Case Study: A Buyer in Pakistan
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Let's look at a real situation.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Ali wants to buy gold jewellery. The shopkeeper tells him the price is Rs. 240,000 per tola. At the same time, Ali checks online and sees gold prices in grams.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Now he is confused. He wants to compare both prices but does not know how to convert properly.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                First, he tries manual calculation. He divides the price by 11.6638 to get the per gram value. But he is not sure if his answer is correct.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Then he uses a <strong className="text-amber-400">tola to gram converter pakistan</strong>. Within seconds, he gets the exact value in grams. Now he can easily compare prices and understand if the deal is fair.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Because of this tool, Ali avoids confusion and makes a better decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Accuracy Matters */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Why Accuracy is Important in Gold Conversion
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Gold is expensive. Even a small mistake in calculation can cost money.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              For example, if someone buys 10 tola gold and uses a wrong conversion, the difference can be several grams. That difference can mean thousands of rupees.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              That is why guessing or using rough numbers is not safe. A proper <strong className="text-amber-400">tola to gram calculator pakistan</strong> ensures that every value is correct.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Life Usage */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Tola to Gram Conversion in Daily Life
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              This conversion is used in many situations in Pakistan. When people buy jewellery, they want to know the exact weight in grams. This helps them compare prices and understand value.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Sellers also use conversion to deal with customers who prefer gram-based pricing. Investors need it to compare local gold rates with global markets.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Students also use it when learning about units and measurements.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              So this is not just a tool for one group. It is useful for everyone. You can also use our{' '}
              <Link href="/grams-to-tola" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Grams to Tola</Link>{' '}
              converter for the reverse calculation.
            </p>
          </div>
        </div>
      </section>

      {/* Ounce Conversion */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Converting Tola to Ounce in Pakistan
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Some people also search for ounce conversion, especially when comparing international gold prices.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              The standard value is:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl text-center">
                <p className="text-xl font-black text-amber-400 mb-1">0.375 troy ounce</p>
                <p className="text-slate-400 text-sm">1 tola</p>
              </div>
              <div className="glass-card p-5 rounded-xl text-center">
                <p className="text-xl font-black text-amber-400 mb-1">0.75 ounce</p>
                <p className="text-slate-400 text-sm">2 tola</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              This answers queries like: 2 tola to ounce pakistan, 2 tola to ounce pakistan calculator.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Using a converter makes this process quick and accurate.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Example */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Simple Example for Easy Understanding
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Let's take a simple example.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              If you want to convert 5 tola into grams, you multiply:
            </p>
            <div className="bg-slate-800 rounded-xl p-4 font-mono text-sm space-y-1">
              <p className="text-slate-300">5 × 11.6638 = <span className="text-amber-300 font-bold">58.319 grams</span></p>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              So, 5 tola is equal to about 58.32 grams.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              A <strong className="text-amber-400">tola to gram converter pakistan</strong> does this instantly without any effort from you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Tola is Still Used */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Why Tola is Still Used in Pakistan
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Even today, tola is widely used in Pakistan because it is part of tradition. Gold markets have used it for many years, and people are comfortable with it.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              However, modern systems use grams. That is why conversion is necessary when dealing with online prices or international markets. You can also read our{' '}
              <Link href="/tola-vs-grams" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Tola vs Grams</Link>{' '}
              guide to understand both systems better.
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Common Mistakes to Avoid
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Many people make simple mistakes while converting:
            </p>
            <div className="space-y-3">
              {[
                "Using wrong conversion value",
                "Rounding numbers too early",
                "Mixing grams with ounces",
                "Guessing instead of calculating",
              ].map((mistake) => (
                <div key={mistake} className="glass-card p-4 rounded-xl flex items-center gap-3">
                  <span className="text-red-400 font-black">✕</span>
                  <p className="text-slate-300 text-sm">{mistake}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              These mistakes can lead to wrong pricing. Using a proper tool helps avoid all these issues.
            </p>
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              When You Should Use a Converter
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              You should use a <strong className="text-amber-400">tola to gram converter pakistan</strong> whenever you are dealing with gold. It helps you stay accurate and confident.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              It is useful when:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Buying gold jewellery",
                "Selling gold",
                "Checking daily gold rates",
                "Comparing local and international prices",
              ].map((use) => (
                <div key={use} className="glass-card p-4 rounded-xl flex items-center gap-3">
                  <span className="text-green-400 font-black">✓</span>
                  <p className="text-slate-300 text-sm">{use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              FAQs – Tola to Grams Pakistan
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "How much gram in 1 tola pakistan?",
                  a: "1 tola equals 11.6638 grams.",
                },
                {
                  q: "What is 21 tola to grams pakistan?",
                  a: "21 tola equals about 244.94 grams.",
                },
                {
                  q: "What is 2 tola to ounce pakistan?",
                  a: "2 tola equals 0.75 ounce.",
                },
                {
                  q: "Why should I use a converter?",
                  a: "It saves time and gives accurate results without mistakes.",
                },
                {
                  q: "Is tola still used in Pakistan?",
                  a: "Yes, it is still commonly used in gold markets.",
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

      {/* Final Thoughts */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Final Thoughts
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Understanding gold measurement becomes easy when you use the right tool. A tola to grams converter pakistan removes confusion and helps you make better decisions.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Instead of doing manual calculations, you can get instant and correct results. Whether you are dealing with 1 tola or 21 tola, the conversion becomes simple and clear.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              This tool is not just about numbers. It helps you avoid mistakes, save time, and understand the real value of gold in Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Other Countries */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <h2 className="text-2xl font-bold gradient-text mb-8 text-center">
            Other Countries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/india" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">India</h3>
              <p className="text-slate-400 text-sm">Gold rate in INR · Tola converter</p>
            </Link>
            <Link href="/nepal" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Nepal</h3>
              <p className="text-slate-400 text-sm">Gold rate in NPR · Tola converter</p>
            </Link>
            <Link href="/dubai" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Dubai</h3>
              <p className="text-slate-400 text-sm">Gold rate in AED · Tola converter</p>
            </Link>
            <Link href="/uae" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">UAE</h3>
              <p className="text-slate-400 text-sm">Gold rate in AED · Tola converter</p>
            </Link>
            <Link href="/uk" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">UK</h3>
              <p className="text-slate-400 text-sm">Gold rate in GBP · Tola converter</p>
            </Link>
            <Link href="/grams-to-tola" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Grams to Tola</h3>
              <p className="text-slate-400 text-sm">Reverse converter</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
