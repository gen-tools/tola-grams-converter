import type { Metadata } from "next";
import RegionalConverter from "@/components/RegionalConverterDynamic";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tola to Grams Converter Nepal | Gold Rate in NPR",
  description:
    "Convert tola to grams in Nepal and calculate gold value in NPR. Instant tola weight conversion and gold price calculator for Nepali gold market.",
  keywords:
    "tola to grams nepal, gold tola nepal, gold rate nepal npr, tola converter",
  alternates: {
    canonical: "https://tola-to-grams-converter.vercel.app/nepal",
  },
};

export default function NepalPage() {
  return (
    <div className="w-full bg-slate-900">
      {/* Converter */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <RegionalConverter
            title="Tola to Grams Nepal"
            subtitle="Accurate conversion and gold value calculator for Nepali gold market"
            regionName="Nepal"
            currency="NPR"
            currencySymbol="रू"
            approxRatePerTola={149000}
            regions={[
              { name: "Pakistan", link: "/pakistan" },
              { name: "India", link: "/india" },
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
              Tola to Grams Nepal – Simple Guide & Easy Converter
            </h1>
            <h2 className="text-xl font-semibold text-amber-400 mb-4">
              Introduction: Why Converting Tola to Grams Matters
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                In Nepal, gold and silver are so much more than just fancy bits of metal you wear to weddings or festivals - for many people, they're also a way to save some cash, make some smart investments, and keep the family traditions alive.
              </p>
              <p>
                But here's the thing: gold is still being sold in tolas, but most shops and banks and online stores are all about dealing in grams. And this little difference between the two is causing all sorts of confusion for buyers and sellers alike. Get the numbers wrong and you could end up paying over the odds or getting short changed - and that can cost you some serious cash. Luckily, a simple{" "}
                <Link href="/gold-weight-converter" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  tola to grams converter Nepal
                </Link>{" "}
                can sort all this out in an instant, giving you the right answer and saving you from making silly mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Tola */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              What is a Tola and How Does It Relate to Grams
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                The tola is an old unit of weight that's been used in Nepal,{" "}
                <Link href="/india" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  India
                </Link>
                , and{" "}
                <Link href="/pakistan" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  Pakistan
                </Link>{" "}
                for donkey's years - and we're still using it to measure gold and silver today.
              </p>
              <p>
                Now, of course, grams have become the standard way of weighing things out - and that's why being able to convert tolas to grams is such a big deal.
              </p>
              <p className="font-semibold text-slate-200">Key Fact:</p>
              <p className="text-center text-2xl font-bold text-amber-400 py-4">
                1 Tola = 11.66 grams
              </p>
              <p>
                The thing is, even a tiny error can cost you money - so making sure you've got the correct conversion is really, really important.
              </p>
              <p>
                Want to learn more about this unit? Read our guide on{" "}
                <Link href="/what-is-tola" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  what is tola
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Common Mistakes People Make
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Loads of people get this one wrong, even though it's actually pretty simple. Here are the biggest mistakes they make:
              </p>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                  <span><span className="text-slate-200 font-semibold">Using old numbers:</span> Some still believe 1 tola equals 12 grams. That is not right and can cost you.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                  <span><span className="text-slate-200 font-semibold">Doing math in your head:</span> Quick mental calculations often go wrong.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                  <span><span className="text-slate-200 font-semibold">Mixing up units:</span> People confuse tola with smaller sizes like ratti or masha.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                  <span><span className="text-slate-200 font-semibold">Trusting what someone says:</span> A shopkeeper might quote in tola but charge in grams. Without checking, you lose money.</span>
                </li>
              </ul>
              <p>
                These errors are easy to avoid if you use a{" "}
                <Link href="/gold-weight-converter" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  converter tool
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How a Converter Works */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              How a Tola to Grams Converter Works
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>The converter tool is fast and always correct.</p>
              <ol className="space-y-2 pl-2">
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">1.</span>
                  <span>Just type in the number of tolas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">2.</span>
                  <span>The tool multiplies it by 11.66.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">3.</span>
                  <span>You get the weight in grams right away.</span>
                </li>
              </ol>
              <p className="font-semibold text-slate-200">Example:</p>
              <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40">
                <p className="text-slate-300">If you put in 2 tola:</p>
                <p className="text-amber-400 font-bold text-lg mt-1">2 × 11.66 = 23.32 grams</p>
              </div>
              <p>
                No hard math, no mistakes, and the answer comes in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Formula */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Conversion Formula for Manual Use
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>If you want to calculate it yourself, here is the easy formula:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40">
                  <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">Tola → Grams</p>
                  <p className="text-slate-200 font-mono">Grams = Tola × 11.66</p>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40">
                  <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">Grams → Tola</p>
                  <p className="text-slate-200 font-mono">Tola = Grams ÷ 11.66</p>
                </div>
              </div>
              <p>
                This is the same formula used all over Nepal and other South Asian countries.
              </p>
              <p>
                You can also use our{" "}
                <Link href="/grams-to-tola" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  grams to tola converter
                </Link>{" "}
                if you need to convert in the opposite direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Quick Reference Table for Tola to Grams
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base border-collapse">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="text-left p-3 text-amber-400 font-semibold rounded-tl-lg">Tola</th>
                    <th className="text-left p-3 text-amber-400 font-semibold rounded-tr-lg">Grams</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/40">
                  {[
                    { tola: "1", grams: "11.66" },
                    { tola: "2", grams: "23.32" },
                    { tola: "5", grams: "58.30" },
                    { tola: "10", grams: "116.60" },
                    { tola: "20", grams: "233.20" },
                  ].map(({ tola, grams }) => (
                    <tr key={tola} className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 text-slate-300">{tola}</td>
                      <td className="p-3 text-amber-300 font-medium">{grams}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              You can check quick numbers here. For exact amounts, the converter tool is still better.
            </p>
          </div>
        </div>
      </section>

      {/* Real-Life Example */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Real-Life Example: Buying Gold in Nepal
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Let's see how it works in real life.</p>
              <p className="text-slate-200 font-semibold">
                Scenario: You want to buy 3 tola of gold. The price is NPR 9,500 per gram.
              </p>
              <div className="bg-slate-800/60 rounded-xl p-4 md:p-6 space-y-3 border border-slate-700/40">
                <div>
                  <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-1">Step 1: Convert Tola to Grams</p>
                  <p className="text-slate-300">3 × 11.66 = 34.98 grams</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-1">Step 2: Calculate Total Price</p>
                  <p className="text-slate-300">34.98 × 9,500 = NPR 332,310</p>
                </div>
              </div>
              <p className="text-slate-200 font-semibold">Now, if you make a mistake and use the old number:</p>
              <div className="bg-red-900/20 rounded-xl p-4 border border-red-700/30 space-y-1">
                <p>Someone thinks 1 tola = 12 grams, so 3 × 12 = 36 grams.</p>
                <p>36 × 9,500 = NPR 342,000</p>
                <p className="text-red-400 font-bold mt-2">You lose NPR 9,690!</p>
              </div>
              <p>This is why the right conversion is so important.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nepal Still Uses Tola */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Why Nepal Still Uses Tola
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Even though grams are used everywhere in the world, Nepal still uses tola because:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "It is part of our old gold trading ways",
                  "Older people feel comfortable with tola",
                  "Weddings and cultural events follow tradition",
                  "Local markets like it",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                But banks, online shops, and world prices always use grams. So you need to know how to convert.
              </p>
              <p>
                Explore our{" "}
                <Link href="/tola-vs-grams" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  tola vs grams
                </Link>{" "}
                guide to understand the difference between these two units in more detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Use */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Who Can Use a Tola to Grams Converter
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>This tool helps many people:</p>
              <ul className="space-y-2 pl-2">
                {[
                  { label: "Gold buyers", desc: "to know the real weight and price" },
                  { label: "Jewelry sellers", desc: "to make correct bills" },
                  { label: "Investors", desc: "to compare prices" },
                  { label: "Students", desc: "to see how math works in daily life" },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span><span className="text-slate-200 font-semibold">{label}</span> – {desc}</span>
                  </li>
                ))}
              </ul>
              <p>Anyone who buys or sells gold or silver in Nepal can use it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Benefits of Using a Converter Tool
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>A tola to grams converter gives you many good things:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Fast and correct results",
                  "No mistakes from doing math by hand",
                  "Works with any number of tolas",
                  "Helps you set fair prices",
                  "Saves time and keeps you stress-free",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Step-by-Step Guide to Using the Tool
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <ol className="space-y-3 pl-2">
                {[
                  "Open the converter on your phone or computer.",
                  "Type the number of tolas.",
                  "Click convert.",
                  "See the grams value right away.",
                  "Use the grams to check price or compare.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p>It is very easy, quick, and safe.</p>
              <p>
                You can use our{" "}
                <Link href="/gold-weight-converter" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  gold weight converter
                </Link>{" "}
                tool right at the top of this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Tips for Safe Gold Buying in Nepal
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <ul className="space-y-2 pl-2">
                {[
                  "Always check the weight in grams, not just tola.",
                  "Use a converter tool before you pay.",
                  "Look at the daily gold price.",
                  "Keep a calculator handy.",
                  "Never trust only what someone tells you.",
                ].map((tip) => (
                  <li key={tip} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "What is a tola in grams in Nepal?",
                  a: "1 tola = 11.66 grams",
                },
                {
                  q: "Is the tola the same in other countries?",
                  a: "Yep, in Nepal, India, and Pakistan, 1 tola = 11.66 grams - good to know.",
                },
                {
                  q: "How do I use the tola to grams converter?",
                  a: "Just open the tool, type the number of tolas, click convert, and you get the exact grams in one second. No hard math needed.",
                },
                {
                  q: "Does the converter work for any amount of tola?",
                  a: "Yes! You can put in 1 tola, 10 tola, 50 tola, or even more. It always gives the correct answer.",
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

      {/* Conclusion */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Conclusion: Accurate Conversion is the Key to Success
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                The thing is, using tolas and grams in Nepal can be confusing - but it doesn't have to be. A small slip-up can mean a lot of cash lost - so the fix is simple: just remember 1 tola = 11.66 grams and use a{" "}
                <Link href="/gold-weight-converter" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  tola to grams Nepal converter
                </Link>{" "}
                to get the right answer every single time. Whether you're buying gold, selling some jewellery or just trying to get your head around this - this tool saves you time, stops you making mistakes and makes everything run smoothly and safely.
              </p>
              <p>
                You can also read our full{" "}
                <Link href="/gold-weight-guide" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  gold weight guide
                </Link>{" "}
                or the{" "}
                <Link href="/tola-to-masha" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  tola to masha converter
                </Link>{" "}
                for more gold measurement tools.
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
              href="/india"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                India
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in INR · Tola converter
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
