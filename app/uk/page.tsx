import type { Metadata } from "next";
import RegionalConverter from "@/components/RegionalConverterDynamic";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tola to Grams Converter UK | Gold Rate in GBP",
  description:
    "Convert tola to grams in UK and calculate gold value in GBP. Instant tola weight conversion and gold price calculator for UK gold trading.",
  keywords:
    "tola to grams uk, gold rate uk gbp, gold converter uk, precious metals",
  alternates: {
    canonical: "https://tola-to-grams.com/uk",
  },
};

export default function UKPage() {
  return (
    <div className="w-full bg-slate-900">
      {/* Converter */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <RegionalConverter
            title="Tola to Grams UK"
            subtitle="Gold weight conversion and value calculator for UK gold trading"
            regionName="UK"
            currency="GBP"
            currencySymbol="£"
            approxRatePerTola={885}
            regions={[
              { name: "Pakistan", link: "/pakistan" },
              { name: "India", link: "/india" },
              { name: "Nepal", link: "/nepal" },
              { name: "Dubai", link: "/dubai" },
              { name: "UAE", link: "/uae" },
            ]}
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Tola to Grams UK – Accurate Converter & Complete Guide
            </h1>
            <h2 className="text-xl font-semibold text-amber-400 mb-4">
              Introduction: Why This Conversion Matters in the UK
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                In the UK, gold buying and selling follow international standards, which means everything is measured in grams. But for many people—especially those from South Asian backgrounds—gold is still understood in tola. This difference creates confusion.
              </p>
              <p>
                Imagine you walk into a jewellery shop in London and ask for "1 tola gold." The shopkeeper will respond in grams. If you don't know the exact conversion, you may not fully understand the price or weight.
              </p>
              <p>
                This is where a{" "}
                <Link href="/gold-weight-converter" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  Tola to Grams UK converter
                </Link>{" "}
                becomes useful. It removes confusion, helps you make better decisions, and ensures you don't lose money due to incorrect calculations.
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
              The Problem: Confusion Between Tola and Grams
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Many people in the UK face this issue:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Gold rates are displayed in grams",
                  "Family traditions use tola",
                  "Online gold prices are mostly per gram or per ounce",
                  "Jewellery shops rarely mention tola",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>This mix of systems leads to problems like:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Overpaying for gold",
                  "Misunderstanding weight",
                  "Difficulty comparing prices",
                  "Errors during buying or selling",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Even a small mistake in gold weight can lead to financial loss because gold prices are high.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Agitation */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              The Agitation: Real Impact of Wrong Conversion
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Let's take a simple example.</p>
              <p>You want to buy 2 tola gold jewellery in the UK.</p>
              <p>If you don't know the correct conversion, you might assume:</p>
              <p className="text-red-400">1 tola = 10 grams (which is wrong)</p>
              <p>But the actual value is:</p>
              <p className="text-green-400 font-semibold">1 tola = 11.66 grams</p>
              <p>Now calculate the difference:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/60 rounded-xl p-4 border border-red-700/30">
                  <p className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-2">Wrong assumption</p>
                  <p>2 tola = 20 grams</p>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-4 border border-green-700/30">
                  <p className="text-green-400 font-semibold text-sm uppercase tracking-wide mb-2">Correct value</p>
                  <p>2 tola = 23.32 grams</p>
                </div>
              </div>
              <p>You are missing 3.32 grams.</p>
              <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 space-y-1">
                <p>If gold price is £60 per gram:</p>
                <p className="text-red-400 font-bold">Loss = 3.32 × 60 = £199.2</p>
              </div>
              <p>This shows how a small mistake can cost a lot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              The Solution: Use a Tola to Grams UK Converter
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>The easiest way to avoid mistakes is by using a simple and accurate converter.</p>
              <p className="font-semibold text-slate-200">Standard Formula</p>
              <p className="text-center text-2xl font-bold text-amber-400 py-4">
                1 Tola = 11.66 Grams
              </p>
              <p className="font-semibold text-slate-200">Conversion Formula</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40">
                  <p className="text-amber-400 font-semibold mb-1">Tola → Grams</p>
                  <p className="font-mono text-slate-300">Multiply by 11.66</p>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40">
                  <p className="text-amber-400 font-semibold mb-1">
                    <Link href="/grams-to-tola" className="hover:text-amber-300 underline underline-offset-2">
                      Grams → Tola
                    </Link>
                  </p>
                  <p className="font-mono text-slate-300">Divide by 11.66</p>
                </div>
              </div>
              <p className="font-semibold text-slate-200">Quick Conversion Table</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-700/50">
                      <th className="text-left p-3 text-amber-400 font-semibold rounded-tl-lg">Tola</th>
                      <th className="text-left p-3 text-amber-400 font-semibold rounded-tr-lg">Grams</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/40">
                    {[
                      { t: "1", g: "11.66" },
                      { t: "2", g: "23.32" },
                      { t: "5", g: "58.30" },
                      { t: "10", g: "116.60" },
                      { t: "20", g: "233.20" },
                    ].map(({ t, g }) => (
                      <tr key={t} className="hover:bg-slate-700/20 transition-colors">
                        <td className="p-3 text-slate-300">{t}</td>
                        <td className="p-3 text-amber-300 font-medium">{g}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>This table helps for quick understanding, but for accurate calculations, always use a converter tool.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How the UK Gold Market Works */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              How the UK Gold Market Works
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>In the UK, gold is traded using:</p>
              <ul className="space-y-2 pl-2">
                {["Grams (g)", "Kilograms (kg)", "Troy ounces (oz)"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Tola is not officially used in the UK market. However, it is still popular among:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Pakistani communities", link: "/pakistan" },
                  { label: "Indian communities", link: "/india" },
                  { label: "Bangladeshi families", link: null },
                ].map(({ label, link }) => (
                  <div key={label} className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/40 text-center">
                    {link ? (
                      <Link href={link} className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                        {label}
                      </Link>
                    ) : (
                      <span className="text-amber-400 text-sm font-medium">{label}</span>
                    )}
                  </div>
                ))}
              </div>
              <p>Because of this, people often need to convert between systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Case Study: Real Example from Birmingham
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>A buyer in Birmingham wanted to purchase gold for a wedding.</p>
              <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 space-y-1">
                <p>Requirement: 5 tola gold</p>
                <p>Shop price: £58 per gram</p>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40">
                  <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-2">Step 1: Convert to grams</p>
                  <p>5 × 11.66 = 58.3 grams</p>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40">
                  <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-2">Step 2: Calculate cost</p>
                  <p className="text-amber-300 font-bold">58.3 × 58 = £3,381.4</p>
                </div>
              </div>
              <p>If the buyer had assumed 1 tola = 10 grams:</p>
              <div className="bg-slate-800/60 rounded-xl p-4 border border-red-700/30 space-y-1">
                <p>5 tola = 50 grams</p>
                <p className="text-red-400">Cost = £2,900</p>
              </div>
              <p>Difference:</p>
              <p className="text-red-400 font-bold">£3,381.4 – £2,900 = £481.4</p>
              <p>This shows how important correct conversion is.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tola Is Still Used */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Why Tola Is Still Used
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Even in the UK, tola remains popular due to:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Cultural habits",
                  "Family traditions",
                  "Jewellery buying practices",
                  "Communication with relatives abroad",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Many people think in tola, even if they pay in grams. Learn more in our{" "}
                <Link href="/what-is-tola" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  what is tola
                </Link>{" "}
                guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Benefits of Using a Tola to Grams Converter
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Using a proper tool gives you:</p>
              <div className="space-y-3">
                {[
                  { n: "1. Accuracy", desc: "You get exact values without guessing." },
                  { n: "2. Time Saving", desc: "No need to calculate manually." },
                  { n: "3. Better Decision Making", desc: "You can compare prices easily." },
                  { n: "4. Transparency", desc: "You understand what you are paying for." },
                ].map(({ n, desc }) => (
                  <div key={n} className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 flex gap-3">
                    <span className="text-amber-400 font-semibold flex-shrink-0">{n}</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Step-by-Step Guide to Use the Converter
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Using the tool is simple:</p>
              <ol className="space-y-2 pl-2">
                {[
                  "Enter value in tola",
                  "Click convert",
                  "Get result in grams instantly",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p>Or:</p>
              <ol className="space-y-2 pl-2">
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">1.</span>
                  <span>Enter grams</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">2.</span>
                  <span>
                    <Link href="/grams-to-tola" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                      Convert to tola
                    </Link>
                  </span>
                </li>
              </ol>
              <p>No complex steps, no confusion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Purity in UK */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Understanding Gold Purity in the UK
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Weight is not the only factor. Purity also matters.</p>
              <p>Common gold purity levels in the UK:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { k: "24K", p: "99.9% pure" },
                  { k: "22K", p: "91.6% pure" },
                  { k: "18K", p: "75% pure" },
                ].map(({ k, p }) => (
                  <div key={k} className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 text-center">
                    <p className="text-amber-400 font-bold text-lg">{k}</p>
                    <p className="text-slate-400 text-sm mt-1">{p}</p>
                  </div>
                ))}
              </div>
              <p>Even if weight is correct, purity affects price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tola vs Gram vs Ounce */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Tola vs Gram vs Ounce
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Let's compare all three:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-700/50">
                      <th className="text-left p-3 text-amber-400 font-semibold rounded-tl-lg">Unit</th>
                      <th className="text-left p-3 text-amber-400 font-semibold rounded-tr-lg">Value in Grams</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/40">
                    <tr className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 text-slate-300">1 Tola</td>
                      <td className="p-3 text-amber-300 font-medium">11.66 grams</td>
                    </tr>
                    <tr className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 text-slate-300">1 Ounce</td>
                      <td className="p-3 text-amber-300 font-medium">31.1035 grams</td>
                    </tr>
                    <tr className="hover:bg-slate-700/20 transition-colors">
                      <td className="p-3 text-slate-300">1 Tola</td>
                      <td className="p-3 text-amber-300 font-medium">≈ 0.375 ounce</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                This helps if you are checking international gold prices. For a full breakdown, see our{" "}
                <Link href="/tola-vs-grams" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  tola vs grams
                </Link>{" "}
                guide.
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
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Many people make these errors:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Assuming 1 tola = 10 grams",
                  "Ignoring purity differences",
                  "Not checking current gold rate",
                  "Using rough estimates instead of tools",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Avoiding these mistakes saves money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Conversion */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              When You Need Tola to Grams Conversion
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>You will need this conversion in many situations:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Buying gold jewellery",
                  "Selling old gold",
                  "Checking gold rates",
                  "Sending gold value abroad",
                  "Investment planning",
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

      {/* How Gold Prices Are Calculated */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              How Gold Prices Are Calculated in the UK
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Gold price depends on:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "International market rate",
                  "Currency exchange rate",
                  "Purity",
                  "Dealer margin",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-slate-200">Example:</p>
              <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 space-y-1">
                <p>If gold price = £60 per gram</p>
                <p>Then:</p>
                <p className="text-amber-300 font-bold">1 tola = 11.66 × 60 = £699.6</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Tips for Safe Gold Buying in the UK
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Before buying gold, follow these tips:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Always check weight in grams",
                  "Confirm purity (hallmark)",
                  "Compare prices from multiple shops",
                  "Use a converter tool",
                  "Ask for a proper bill",
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

      {/* Digital Tools vs Manual */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Digital Tools vs Manual Calculation
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/60 rounded-xl p-4 border border-red-700/30">
                  <p className="text-red-400 font-semibold mb-2">Manual Calculation</p>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li className="flex gap-2"><span>•</span> Risk of mistakes</li>
                    <li className="flex gap-2"><span>•</span> Takes time</li>
                  </ul>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-4 border border-green-700/30">
                  <p className="text-green-400 font-semibold mb-2">Digital Tool</p>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li className="flex gap-2"><span>•</span> Instant results</li>
                    <li className="flex gap-2"><span>•</span> Accurate values</li>
                    <li className="flex gap-2"><span>•</span> Easy to use</li>
                  </ul>
                </div>
              </div>
              <p>
                That's why most people now prefer online converters. Try our{" "}
                <Link href="/gold-weight-converter" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  gold weight converter
                </Link>{" "}
                for instant results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Trend */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Future Trend: Standardization in Gold Measurement
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Globally, grams are becoming the standard.</p>
              <p>However:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Tola will continue in cultural use",
                  "Conversion tools will remain important",
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

      {/* FAQ */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-xl md:text-2xl font-bold gradient-text mb-6">
              FAQs – Tola to Grams UK
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "What is 1 tola in grams in the UK?",
                  a: "1 tola equals 11.66 grams.",
                },
                {
                  q: "Is tola used officially in the UK?",
                  a: "No, the UK uses grams, but tola is used informally.",
                },
                {
                  q: "How do I convert tola to grams?",
                  a: "Multiply the value by 11.66.",
                },
                {
                  q: "Why is correct conversion important?",
                  a: "Because gold is expensive, even small errors cost money.",
                },
                {
                  q: "Can I use the same formula everywhere?",
                  a: "Yes, 1 tola = 11.66 grams globally.",
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
              Conclusion: Make Smart Gold Decisions
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>Understanding Tola to Grams UK conversion is not just about numbers. It is about making smart financial decisions.</p>
              <p>When you know:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "The correct formula",
                  "The real weight",
                  "The current price",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>You avoid confusion and protect your money.</p>
              <p>Using a simple converter tool ensures:</p>
              <ul className="space-y-2 pl-2">
                {["Accuracy", "Clarity", "Confidence"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Whether you are buying jewellery, investing in gold, or selling old items, always convert correctly.
              </p>
              <p>
                Read the full{" "}
                <Link href="/gold-weight-guide" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  gold weight guide
                </Link>{" "}
                for more insights, or check rates for{" "}
                <Link href="/dubai" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  Dubai
                </Link>{" "}
                and{" "}
                <Link href="/uae" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                  UAE
                </Link>
                .
              </p>
              <div className="bg-slate-800/60 rounded-xl p-4 border border-amber-500/20 mt-4">
                <p className="font-semibold text-slate-200">Final Thought</p>
                <p className="mt-1">Gold is valuable. A small mistake in weight can lead to a big loss.</p>
              </div>
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
            <Link href="/pakistan" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Pakistan</h3>
              <p className="text-slate-400 text-sm">Gold rate in PKR · Tola converter</p>
            </Link>
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
          </div>
        </div>
      </section>
    </div>
  );
}
