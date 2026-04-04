import type { Metadata } from "next";
import RegionalConverter from "@/components/RegionalConverterDynamic";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tola to Grams Converter India | Gold Rate in INR",
  description:
    "Convert tola to grams in India and calculate gold value in INR. Instant tola weight conversion and gold price calculator for Indian gold market.",
  keywords:
    "tola to grams india, gold tola india, gold rate india inr, tola converter",
  alternates: {
    canonical: "https://tola-to-grams-converter.vercel.app/india",
  },
};

export default function IndiaPage() {
  return (
    <div className="w-full bg-slate-900">
      {/* Converter */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <RegionalConverter
            title="Tola to Grams India"
            subtitle="Accurate conversion and gold value calculator for Indian gold market"
            regionName="India"
            currency="INR"
            currencySymbol="₹"
            approxRatePerTola={94000}
            regions={[
              { name: "Pakistan", link: "/pakistan" },
              { name: "Nepal", link: "/nepal" },
              { name: "Dubai", link: "/dubai" },
              { name: "UAE", link: "/uae" },
              { name: "UK", link: "/uk" },
            ]}
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Tola to Grams Converter India – Complete Guide for Accurate Gold Conversion
            </h1>
            <h2 className="text-xl font-semibold text-amber-400 mb-4">
              Introduction: Why This Still Matters in India
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                In India, gold is more than just a metal. People buy it for weddings, save it for the future, and trust it as a safe form of money. Even today, when someone goes to a jewellery shop, they often speak in "tola." But when the bill is made, everything is written in grams.
              </p>
              <p>
                This creates a simple but real confusion.
              </p>
              <p>
                You might hear the shopkeeper say one thing, see something else online, and then feel unsure about the final price. That's why many people search questions like "1 tola to grams India" or "how many grams in one tola in India." They just want to be sure before spending money.
              </p>
              <p>
                This guide is written in a simple way to clear that confusion. You will understand the exact value, how to convert, and how to avoid mistakes when buying gold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              The Problem: Why People Get Confused
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                The confusion comes from using two systems at the same time.
              </p>
              <p>
                Grams are the standard unit used everywhere in the world. But in India, especially in gold markets, people still use tola. Because of this, buyers often get mixed up.
              </p>
              <p>
                For example, you might check the gold price online in grams, but the jeweller talks in tola. Or you may hear a price in tola and try to compare it with gram rates. Without conversion, it becomes difficult to understand the real cost.
              </p>
              <p>
                Another issue is wrong assumptions. Many people think that 1 tola is equal to 10 grams. This is not correct. Even a small mistake like this can lead to paying more money than expected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Simple Truth */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              The Simple Truth: Exact Value of Tola
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                To avoid all confusion, you only need to remember one thing:
              </p>
              <p className="text-center text-2xl font-bold text-amber-400 py-4">
                1 tola = 11.66 grams
              </p>
              <p>
                This is the fixed value used in India.
              </p>
              <p>No matter what question you ask, whether it is:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300">
                <li>how much gram in 1 tola</li>
                <li>how many grams make tola</li>
                <li>how much is tola in grams</li>
              </ul>
              <p>
                The answer will always be 11.66 grams.
              </p>
              <p>
                This value does not change. It stays the same every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Conversion Really Matters */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Why This Conversion Really Matters
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                This is not just about learning a formula. It directly affects your money.
              </p>
              <p>
                Gold prices are always given per gram. But if you are thinking in tola, you need to convert it first. Without that, you cannot check if the price is right.
              </p>
              <p>
                Think about buying gold for a wedding. The shopkeeper tells you the weight is 3 tola. If you don't know how many grams that is, you are depending completely on the seller's calculation.
              </p>
              <p>
                The same thing happens when people invest in gold coins or bars. Even a small mistake in weight can change the total price.
              </p>
              <p>
                That is why using a{" "}
                <Link href="/gold-weight-converter" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  tola to grams converter India
                </Link>{" "}
                is helpful. It gives you a clear answer in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Conversion Works */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              How Conversion Works (Very Easy Method)
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                The method is simple. You just multiply the number of tola by 11.66.
              </p>
              <p>For example:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base border-collapse mt-2">
                  <thead>
                    <tr className="bg-slate-700/50">
                      <th className="text-left p-3 text-amber-400 font-semibold rounded-tl-lg">Tola</th>
                      <th className="text-left p-3 text-amber-400 font-semibold">Calculation</th>
                      <th className="text-left p-3 text-amber-400 font-semibold rounded-tr-lg">Grams</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/40">
                    <tr className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 text-slate-300">2 tola</td>
                      <td className="p-3 text-slate-400">2 × 11.66</td>
                      <td className="p-3 text-amber-300 font-medium">23.32 grams</td>
                    </tr>
                    <tr className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 text-slate-300">5 tola</td>
                      <td className="p-3 text-slate-400">5 × 11.66</td>
                      <td className="p-3 text-amber-300 font-medium">58.30 grams</td>
                    </tr>
                    <tr className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 text-slate-300">10 tola</td>
                      <td className="p-3 text-slate-400">10 × 11.66</td>
                      <td className="p-3 text-amber-300 font-medium">116.6 grams</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Once you understand this, you can easily handle any conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Life Example */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Real-Life Example from a Jewellery Shop
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Let's look at a simple real-life situation.
              </p>
              <p>
                A person goes to buy a gold necklace. The shopkeeper says the weight is 2 tola. The buyer checks the gold price online, which is ₹6,200 per gram.
              </p>
              <p>Now the buyer needs to calculate the total cost.</p>
              <div className="bg-slate-800/60 rounded-xl p-4 md:p-6 space-y-3 border border-slate-700/40">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">Step 1 – Conversion</span>
                  <span className="text-slate-300">2 tola = 23.32 grams</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">Step 2 – Price</span>
                  <span className="text-slate-300">23.32 × 6200 = ₹144,584</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">Step 3 – Making charges (~10%)</span>
                  <span className="text-slate-300">Final price becomes close to ₹159,000</span>
                </div>
              </div>
              <p>
                Now imagine if the buyer thought 1 tola is 10 grams. The total weight would be taken as 20 grams, which is wrong. This would create confusion and a wrong expectation about the price.
              </p>
              <p>
                This is why correct conversion is important.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tola is Still Used */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Why Tola is Still Used
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Even today, many people in India prefer using tola. The reason is simple: habit.
              </p>
              <p>
                For many years, gold was bought and sold in tola. Older generations are used to it. In small towns and local markets, people still speak in tola because it feels familiar.
              </p>
              <p>
                Even though grams are official, tola continues to be used in daily conversation.
              </p>
              <p>
                If you'd like to learn more about its history and meaning, read our guide on{" "}
                <Link href="/what-is-tola" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  what is tola
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How a Converter Makes Things Easy */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              How a Converter Makes Things Easy
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                A{" "}
                <Link href="/gold-weight-converter" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  tola to grams converter India
                </Link>{" "}
                is a simple tool that saves time and avoids mistakes.
              </p>
              <p>
                Instead of doing the math yourself, you just enter the number of tola and get the answer in grams instantly.
              </p>
              <p>This is helpful for:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300">
                <li>buyers who want to check price</li>
                <li>sellers who want to explain clearly</li>
                <li>anyone who wants quick and correct results</li>
              </ul>
              <p>
                The best part is accuracy. Since gold is expensive, even a small mistake can cost money. A converter removes that risk.
              </p>
              <p>
                You can also use our{" "}
                <Link href="/grams-to-tola" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  grams to tola converter
                </Link>{" "}
                if you want to convert in the reverse direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Gold Price with Conversion */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Understanding Gold Price with Conversion
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Gold price is always based on grams. So when you know how to convert tola into grams, everything becomes easy.
              </p>
              <p>For example, if gold rate is ₹6,000 per gram and you are buying 1 tola gold:</p>
              <div className="bg-slate-800/60 rounded-xl p-4 md:p-6 space-y-3 border border-slate-700/40">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">First – Convert</span>
                  <span className="text-slate-300">1 tola = 11.66 grams</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">Then – Calculate</span>
                  <span className="text-slate-300">11.66 × 6000 = ₹69,960</span>
                </div>
              </div>
              <p>
                After that, making charges and GST are added.
              </p>
              <p>
                Without conversion, you cannot get this correct value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Doubts */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Common Doubts People Have
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Many people search similar questions online like "1 tola to grams India" or "how many grams in one tola in India."
              </p>
              <p>
                The answer is always the same because the value is fixed.
              </p>
              <p>
                Some people also ask if the value of tola changes. The answer is no. Only gold price changes daily. The weight of tola stays the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Between Tola and Gram */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Difference Between Tola and Gram
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Tola and gram are both units of weight, but they come from different systems.
              </p>
              <p>
                Gram is used worldwide and is part of the standard measurement system. Tola is a traditional unit used mainly in India and nearby regions.
              </p>
              <p>
                Even though grams are official, tola is still used because people are comfortable with it.
              </p>
              <p>
                For a deeper look at the differences, visit our{" "}
                <Link href="/tola-vs-grams" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  tola vs grams
                </Link>{" "}
                comparison page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Tips Before Buying Gold */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Simple Tips Before Buying Gold
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>When you go to buy gold, keep a few things in mind.</p>
              <p>
                Always ask for the weight in grams on the bill. Even if the shopkeeper talks in tola, the final weight should be clear in grams.
              </p>
              <p>
                Check the current gold rate before going to the shop. This helps you understand the price better.
              </p>
              <p>
                If you are unsure, use a{" "}
                <Link href="/gold-weight-converter" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  tola to grams converter India
                </Link>
                . It gives you confidence and helps you avoid mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "How many grams in one tola in India?",
                  a: "One tola is equal to 11.66 grams.",
                },
                {
                  q: "What is 1 tola to grams India conversion?",
                  a: "1 tola equals 11.66 grams.",
                },
                {
                  q: "How many grams make one tola?",
                  a: "11.66 grams make one tola.",
                },
                {
                  q: "How much gram in 1 tola gold?",
                  a: "1 tola gold equals 11.66 grams.",
                },
                {
                  q: "Is tola still used in India?",
                  a: "Yes, many jewellery shops still use it in daily conversation.",
                },
                {
                  q: "Why do we convert tola to grams?",
                  a: "Because gold price is given per gram, and conversion helps in correct calculation.",
                },
                {
                  q: "How to convert tola to grams easily?",
                  a: "Multiply tola value by 11.66 or use a converter.",
                },
                {
                  q: "What is 10 tola in grams?",
                  a: "10 tola equals 116.6 grams.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-slate-700/40 pb-5 last:border-0 last:pb-0">
                  <h3 className="text-amber-400 font-semibold mb-2">{q}</h3>
                  <p className="text-slate-300 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Words */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Final Words
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Tola to grams conversion is very simple, but it is very useful.
              </p>
              <p>
                In India, both tola and grams are used together. So understanding this conversion helps you stay clear and confident when buying gold.
              </p>
              <p>Just remember one line:</p>
              <p className="text-center text-2xl font-bold text-amber-400 py-4">
                1 tola = 11.66 grams
              </p>
              <p>
                With this, you can calculate correctly, avoid confusion, and make better decisions. It is a small piece of knowledge, but it can save you money and stress.
              </p>
              <p>
                You can also read our full{" "}
                <Link href="/gold-weight-guide" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  gold weight guide
                </Link>{" "}
                to learn more about gold measurement units used across different countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Countries */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <h2 className="text-2xl font-bold gradient-text mb-8 text-center">
            Other Countries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/pakistan"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                Pakistan
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in PKR · Tola converter
              </p>
            </Link>
            <Link
              href="/nepal"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                Nepal
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in NPR · Tola converter
              </p>
            </Link>
            <Link
              href="/dubai"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                Dubai
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in AED · Tola converter
              </p>
            </Link>
            <Link
              href="/uae"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                UAE
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in AED · Tola converter
              </p>
            </Link>
            <Link
              href="/uk"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                UK
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in GBP · Tola converter
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
