import type { Metadata } from "next";
import ConverterV2 from "@/components/ConverterV2Dynamic";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Gold Weight Converter",
  description:
    "Use our Gold Weight Converter to instantly convert tola, grams, and masha. Accurate, fast, and easy for buying, selling, or checking gold value.",
  keywords: "gold weight converter, gold units, tola grams converter",
  alternates: {
    canonical: "https://tola-to-grams-converter.vercel.app/gold-weight-converter",
  },
};

export default function GoldWeightConverter() {
  const regions = [
    { name: "In Pakistan", link: "/pakistan" },
    { name: "In India", link: "/india" },
    { name: "In Nepal", link: "/nepal" },
    { name: "In UAE", link: "/uae" },
  ];

  return (
    <div className="w-full bg-slate-900">
      {/* Converter Section */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <ConverterV2
            type="tola-to-grams"
            title="Gold Weight Converter"
            subtitle="Convert between all major gold weight units"
            regions={regions}
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Online Gold Weight Converter – Easy and Accurate Results
            </h1>
            <h2 className="text-xl font-semibold text-amber-400 mb-4">
              Introduction: Understand Gold Weight Without Confusion
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Gold isn't just any metal. For most of us, it's our savings, a
                bit of security, and a big part of happy moments like weddings.
                But when it comes to checking the weight of gold, things can get
                really confusing.
              </p>
              <p>
                The reason is pretty simple. Gold gets measured in all sorts of
                units. In our local markets, everyone talks in tola. Online,
                though, prices usually show up in grams or sometimes ounces.
                Because of that mix, it's hard to figure out what your gold is
                actually worth.
              </p>
              <p>
                A lot of people just guess or try a quick calculation in their
                head. That usually ends up with mistakes. That's why a Gold
                Weight Converter is such a big help. It turns the weight from
                one unit to another in seconds, without any stress.
              </p>
              <p>
                If you want to skip the confusion and make better choices, using
                a gold weight calculator online is the easiest way.
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
              The Problem: Different Units Create Confusion
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                When you walk into a jewelry shop, the seller might quote the
                price in tola. But when you check the gold rate on your phone,
                it's shown in grams. Suddenly you're stuck with two different
                numbers and you have to make them match.
              </p>
              <p>This is where most of us get stuck.</p>
              <p>
                A common slip-up is thinking 1 tola is exactly 10 grams.
                Actually,{" "}
                <span className="text-amber-400 font-semibold">
                  1 tola equals 11.66 grams
                </span>
                . That tiny difference can change the whole price, especially
                when gold is so costly.
              </p>
              <p>Because of this mix-up, people often:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Pay more than they really should",
                  "Sell their gold for less than it's worth",
                  "Feel unsure the whole time they're buying or selling",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The real issue isn't the math itself. It's not having a quick,
                trustworthy way to convert the units right when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agitation */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Agitation: How Small Errors Lead to Financial Loss
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Let me paint a quick picture with a real-life example.</p>
              <p>
                Someone goes to buy gold for a family wedding. The shopkeeper
                gives the price in tola. The buyer looks up the rate online in
                grams and tries to convert it fast in his head. He makes a small
                error. Suddenly the total bill looks higher than it should. He
                ends up paying extra without even noticing.
              </p>
              <p>
                Now imagine the other side — selling gold. You take your old
                jewelry to the shop. They weigh it in grams, but you only
                remember the weight in tola. Without a proper gold weight
                calculator, you can't be sure if the offer is fair. A lot of
                times, people just accept a lower price because they don't feel
                confident.
              </p>
              <p>
                These little mistakes happen all the time, and over time they
                add up to real money lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              The Solution: Gold Weight Converter
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                A Gold Weight Converter fixes this whole headache in the easiest
                way possible.
              </p>
              <p>
                You just type in the number and pick the unit. The tool
                instantly shows the correct answer in the unit you want. No
                guessing, no pen and paper, no complicated formulas. Everything
                happens automatically.
              </p>
              <p>This tool is perfect for:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Checking gold weight while you're buying",
                  "Making sure you're getting a fair price when selling",
                  "Comparing local rates with international ones",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Using a gold weight calculator online saves you time and stops
                silly errors before they happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the Calculator Works */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              How the Gold Weight Calculator Works
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                The gold weight calculator online uses the same standard numbers
                that gold markets everywhere accept.
              </p>
              <p>For example:</p>
              <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 space-y-2">
                <p>
                  <span className="text-amber-400 font-semibold">1 tola</span> =
                  11.66 grams
                </p>
                <p>
                  <span className="text-amber-400 font-semibold">1 ounce</span>{" "}
                  = 31.1035 grams
                </p>
              </div>
              <p>
                These numbers never change. When you put in any amount, the tool
                uses these exact values and gives you the result right away.
              </p>
              <p>
                Take 2 tola as an example. The tool instantly shows 23.32 grams.
                Done in a second, no effort needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Example: Calculate Gold Value Easily
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Here's a simple real example.</p>
              <p>
                Suppose you have 3 tola of gold. First, convert it to grams:
              </p>
              <div className="bg-slate-800/60 rounded-xl p-4 md:p-6 border border-slate-700/40 space-y-3">
                <div>
                  <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-1">
                    Step 1 – Convert
                  </p>
                  <p>3 tola = 34.98 grams</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-1">
                    Step 2 – Calculate value
                  </p>
                  <p>
                    Now, if today's gold price is 12,000 PKR per gram, just
                    multiply:
                  </p>
                  <p className="text-amber-300 font-bold mt-1">
                    34.98 × 12,000 = 419,760 PKR
                  </p>
                </div>
              </div>
              <p>That's the real value of your gold.</p>
              <p>
                Without a Gold Weight Converter, you'd spend time doing the math
                and might still make a mistake. With the tool, it's quick, easy,
                and spot on.
              </p>
              <p>
                You can also check gold rates by region —{" "}
                <Link
                  href="/pakistan"
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                >
                  Pakistan gold rate
                </Link>
                ,{" "}
                <Link
                  href="/india"
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                >
                  India gold rate
                </Link>
                , or{" "}
                <Link
                  href="/nepal"
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                >
                  Nepal gold rate
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Online */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Why You Should Use a Gold Weight Calculator Online
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Using a gold weight calculator isn't just about making things
                convenient. It actually helps you make smarter decisions with
                your money.
              </p>
              <p>
                When you know the exact weight, you can quickly work out the
                right price. That means you won't overpay when buying and you
                won't accept too little when selling.
              </p>
              <p>
                It also lets you compare prices between different shops and
                websites easily. You get a clearer picture of what's fair in the
                market.
              </p>
              <p>
                Best part? You feel confident. You don't have to rely only on
                what others tell you. You can check everything yourself and feel
                sure about your choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Manual Is Not Reliable */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Why Manual Conversion Is Not Reliable
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Plenty of people still try to do the conversion in their head or
                on paper. It usually leads to slip-ups.
              </p>
              <p>
                Common problems include using the wrong number (like thinking 1
                tola is 10 grams), rounding off too soon, or mixing up the
                units. Even a tiny error can cost you money because gold is
                expensive.
              </p>
              <p>
                A Gold Weight Converter takes away all those risks and gives you
                the right answer every single time.
              </p>
              <p>
                For a deeper look at how the two units compare, see our{" "}
                <Link
                  href="/tola-vs-grams"
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                >
                  tola vs grams
                </Link>{" "}
                guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How This Tool Helps in Real Life */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              How This Tool Helps in Real Life
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                The Gold Weight Converter fits right into everyday situations.
              </p>
              <p>
                When you're buying gold, it helps you double-check the weight
                and price on the spot. When you're selling, it makes sure you're
                not getting short-changed.
              </p>
              <p>
                For people who invest in gold, it makes it simple to compare
                local prices with rates from other countries. That helps with
                better investment choices.
              </p>
              <p>
                Even students can use it to learn weight conversions in a super
                easy way.
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
              Tips for Using the Tool Effectively
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                To get the best results, always pick the right unit before you
                convert. Type the number carefully and glance at the answer once
                more.
              </p>
              <p>
                If you want the total price, first convert the weight, then
                multiply by today's gold rate.
              </p>
              <p>
                Don't try to guess or rely on memory. Even if the numbers look
                easy, using the tool keeps everything accurate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Gold Weight Reference */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-6">
              Complete Gold Weight Reference
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                When working with gold, you may encounter various measurement
                units depending on your location and market. This comprehensive
                tool covers the main units used in gold trading and jewelry.
              </p>
              <h3 className="text-lg font-bold text-amber-400">
                Primary Gold Weight Units
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-700/50">
                      <th className="text-left p-3 text-amber-400 font-semibold rounded-tl-lg">
                        Unit
                      </th>
                      <th className="text-left p-3 text-amber-400 font-semibold">
                        Grams
                      </th>
                      <th className="text-left p-3 text-amber-400 font-semibold rounded-tr-lg">
                        Usage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/40">
                    <tr className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 font-semibold text-slate-300">Gram</td>
                      <td className="p-3 text-slate-300">1</td>
                      <td className="p-3 text-slate-400">International</td>
                    </tr>
                    <tr className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 font-semibold text-slate-300">Tola</td>
                      <td className="p-3 text-amber-300 font-medium">11.66</td>
                      <td className="p-3 text-slate-400">South Asia</td>
                    </tr>
                    <tr className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 font-semibold text-slate-300">
                        Troy Ounce
                      </td>
                      <td className="p-3 text-slate-300">31.10</td>
                      <td className="p-3 text-slate-400">
                        International trading
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 font-semibold text-slate-300">
                        Masha
                      </td>
                      <td className="p-3 text-slate-300">0.97</td>
                      <td className="p-3 text-slate-400">
                        South Asia (detail)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="text-lg font-bold text-amber-400">
                Why Multiple Units Exist
              </h3>
              <p>
                Different regions developed their own weight systems for gold
                trading over centuries. While the metric system is now standard
                internationally, many traditional markets continue using their
                historical units, making conversion essential for global
                commerce.
              </p>
              <h3 className="text-lg font-bold text-amber-400">
                Our Converters
              </h3>
              <ul className="space-y-2">
                <li>
                  ✓{" "}
                  <Link
                    href="/"
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                  >
                    Tola to Grams
                  </Link>{" "}
                  – The most common conversion
                </li>
                <li>
                  ✓{" "}
                  <Link
                    href="/grams-to-tola"
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                  >
                    Grams to Tola
                  </Link>{" "}
                  – Reverse conversion
                </li>
                <li>
                  ✓{" "}
                  <Link
                    href="/tola-to-masha"
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                  >
                    Tola to Masha
                  </Link>{" "}
                  – For detailed specifications
                </li>
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
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "What is a Gold Weight Converter?",
                  a: "It's a simple tool that changes gold weight from one unit to another — like tola, grams, or ounces.",
                },
                {
                  q: "Is the gold weight calculator accurate?",
                  a: "Yes, it uses the standard values everyone in the gold market follows, so the results are correct.",
                },
                {
                  q: "Can I use it for jewelry?",
                  a: "Absolutely. It works for all kinds of gold — jewelry, coins, bars, anything.",
                },
                {
                  q: "What is 1 tola in grams?",
                  a: "1 tola equals exactly 11.66 grams.",
                },
                {
                  q: "Why should I use a gold weight calculator online?",
                  a: "It saves time, stops mistakes, and helps you clearly see the real value of your gold.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="border-b border-slate-700/40 pb-5 last:border-0 last:pb-0"
                >
                  <h3 className="text-amber-400 font-semibold mb-2">{q}</h3>
                  <p className="text-slate-300 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Final Thoughts: Make Smart Decisions with Confidence
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Gold is valuable, and every little detail counts when you're
                dealing with it. One small mistake in weight conversion can mean
                paying the wrong price and losing money.
              </p>
              <p>
                For more guidance, read our{" "}
                <Link
                  href="/gold-weight-guide"
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                >
                  gold weight guide
                </Link>{" "}
                or learn{" "}
                <Link
                  href="/what-is-tola"
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                >
                  what is tola
                </Link>{" "}
                to better understand gold measurement in South Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <h2 className="text-2xl font-bold gradient-text mb-8 text-center">
            Quick Links to Converters
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              href="/"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                Tola → Grams
              </h3>
              <p className="text-slate-400 text-sm">Main converter</p>
            </Link>
            <Link
              href="/grams-to-tola"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                Grams → Tola
              </h3>
              <p className="text-slate-400 text-sm">Reverse converter</p>
            </Link>
            <Link
              href="/tola-to-masha"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                Tola → Masha
              </h3>
              <p className="text-slate-400 text-sm">Detailed measurements</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
