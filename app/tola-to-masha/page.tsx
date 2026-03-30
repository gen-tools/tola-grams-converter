'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const TOLA_TO_MASHA = 12;

export default function TolaToMashaPage() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [decimals, setDecimals] = useState(4);
  const lastEdited = useRef<1 | 2>(1);

  const doConvert = (val: string, toMasha: boolean, dp: number): string => {
    const num = parseFloat(val);
    if (isNaN(num) || num < 0) return '';
    const result = toMasha ? num * TOLA_TO_MASHA : num / TOLA_TO_MASHA;
    return result.toFixed(dp);
  };

  const handleInput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    lastEdited.current = 1;
    setInput1(val);
    setInput2(doConvert(val, true, decimals));
  };

  const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    lastEdited.current = 2;
    setInput2(val);
    setInput1(doConvert(val, false, decimals));
  };

  const handleQuickPick = (val: number) => {
    lastEdited.current = 1;
    const str = String(val);
    setInput1(str);
    setInput2(doConvert(str, true, decimals));
  };

  const hasResult = input1 !== '' && input2 !== '';

  return (
    <div className="w-full bg-slate-900">
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Calculator */}
              <div className="lg:col-span-2 glass-card p-6 rounded-2xl md:p-8">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    Tola to Masha
                  </h2>
                  <p className="text-sm text-slate-400">Convert tola to masha and vice versa</p>
                </div>

                {/* Decimals Control */}
                <div className="flex gap-3 items-center mb-8 bg-slate-800/30 rounded-lg p-4 w-fit">
                  <button
                    onClick={() => setDecimals(d => Math.max(0, d - 1))}
                    className="pill-btn px-3 py-1.5 rounded-lg text-lg hover:text-amber-400 font-semibold cursor-pointer active:scale-95"
                    type="button"
                  >
                    −
                  </button>
                  <div className="text-amber-400 font-semibold bg-amber-500/20 px-4 py-1.5 rounded-lg min-w-12 text-center">
                    {decimals}
                  </div>
                  <button
                    onClick={() => setDecimals(d => Math.min(10, d + 1))}
                    className="pill-btn px-3 py-1.5 rounded-lg text-lg hover:text-amber-400 font-semibold cursor-pointer active:scale-95"
                    type="button"
                  >
                    +
                  </button>
                </div>

                {/* Input Fields */}
                <div className="mt-8 grid gap-6 md:grid-cols-2 mb-8">
                  <div>
                    <label className="text-slate-300 font-medium block mb-2 text-sm">
                      Tola
                    </label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={input1}
                      onChange={handleInput1}
                      placeholder="0"
                      className="premium-input px-4 w-full py-4 rounded-xl text-lg"
                    />
                    <p className="text-xs text-slate-500 mt-2">Enter amount in Tola</p>
                  </div>

                  <div>
                    <label className="text-slate-300 font-medium block mb-2 text-sm">
                      Masha
                    </label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={input2}
                      onChange={handleInput2}
                      placeholder="0"
                      className="premium-input px-4 w-full py-4 rounded-xl text-lg"
                    />
                    <p className="text-xs text-slate-500 mt-2">Converted amount</p>
                  </div>
                </div>

                {/* Quick Picks */}
                <div className="flex gap-2 items-center text-sm flex-wrap mb-8">
                  {[1, 5, 10, 50].map(val => (
                    <button
                      key={val}
                      onClick={() => handleQuickPick(val)}
                      className="px-4 pill-btn py-2 rounded-full hover:text-amber-400 font-medium cursor-pointer active:scale-95 transition-all"
                      type="button"
                    >
                      {val}
                    </button>
                  ))}
                </div>

                {/* Output Tiles */}
                {hasResult && (
                  <div className="mt-8 space-y-4">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                      <div className="glass-card-light p-6 rounded-xl text-center border border-white/5">
                        <p className="text-slate-400 text-xs uppercase tracking-wide mb-3">Tola</p>
                        <p className="text-white font-bold text-3xl md:text-4xl">{input1}</p>
                        <p className="text-slate-500 text-xs mt-2">{input1} Tola</p>
                      </div>
                      <div className="glass-card-light p-6 rounded-xl text-center flex items-center justify-center border border-white/5">
                        <p className="text-slate-400 text-xl">↔</p>
                      </div>
                      <div className="glass-card-light p-6 rounded-xl text-center border border-white/5">
                        <p className="text-slate-400 text-xs uppercase tracking-wide mb-3">Masha</p>
                        <p className="text-white font-bold text-3xl md:text-4xl">{input2}</p>
                        <p className="text-slate-500 text-xs mt-2">{input2} Masha</p>
                      </div>
                    </div>

                    <div className="glass-card-light p-6 rounded-xl border border-white/5">
                      <p className="text-slate-400 text-xs uppercase tracking-wide mb-3">Formula</p>
                      <div className="space-y-2 text-center">
                        <p className="text-slate-300 text-sm">
                          Tola × <span className="text-cyan-400 font-semibold">{TOLA_TO_MASHA}</span> = Masha
                        </p>
                        <p className="text-white font-mono text-sm font-semibold">
                          {input1} × {TOLA_TO_MASHA} = {input2}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Result Card */}
                <div className="glass-card p-6 rounded-2xl glow-gold border border-amber-500/20">
                  <h3 className="text-amber-400 font-semibold mb-3 text-sm uppercase tracking-wide">Result</h3>
                  {hasResult ? (
                    <>
                      <p className="text-white font-bold md:text-5xl text-4xl leading-tight">{input2}</p>
                      <p className="text-slate-300 text-sm mt-3 font-medium">{input1} Tola = {input2} Masha</p>
                    </>
                  ) : (
                    <div className="flex items-center justify-center py-8">
                      <p className="text-slate-500 text-sm">Enter an amount to see result</p>
                    </div>
                  )}
                </div>

                {/* Related Tools */}
                <div className="glass-card p-6 rounded-2xl text-sm">
                  <h3 className="text-amber-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                    Related Tools
                  </h3>
                  <div className="space-y-2 text-slate-300">
                    <Link href="/" className="flex items-center gap-2 transition-colors hover:text-amber-400">
                      <span className="text-amber-300 opacity-60">✦</span> Tola to Grams
                    </Link>
                    <Link href="/grams-to-tola" className="flex items-center gap-2 transition-colors hover:text-amber-400">
                      <span className="text-amber-300 opacity-60">✦</span> Grams to Tola
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Hero */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 md:p-10 rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-6 leading-tight">
              Tola to Masha Converter – Clear, Accurate, and Easy to Use
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-4">
              The Real Problem People Face
            </h2>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-4">
              In{' '}
              <Link href="/pakistan" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Pakistan</Link>{' '}
              and across South Asia, traditional weight units are still part of daily life—especially in gold markets. You'll often hear prices and weights in tola and masha, not grams.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-4">
              That's where confusion begins.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-4">
              Most people understand grams because they're used globally. But when someone says, "This ring is 3 masha" or "Gold rate per tola is this," it forces you to switch between systems in your head.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-4">
              And honestly, that's not easy.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-3">
              Even today, many buyers and sellers:
            </p>
            <div className="space-y-2 mb-4">
              {['Pause to calculate', 'Ask others for confirmation', 'Or just trust the shopkeeper'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-amber-400">›</span>
                  <p className="text-slate-300 text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              This uncertainty creates a gap. You might feel unsure about the actual value of what you're buying or selling.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Confusion Matters */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Why This Confusion Matters More Than You Think
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Gold is not a small purchase. Even tiny differences in weight can change the total price significantly.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Let's say you misunderstand the conversion slightly. That small mistake could mean:
            </p>
            <div className="space-y-3">
              {[
                'Paying more than the actual value',
                'Accepting a lower price while selling',
                'Misjudging your investment',
              ].map((risk) => (
                <div key={risk} className="glass-card p-4 rounded-xl flex items-center gap-3">
                  <span className="text-red-400 font-black">✕</span>
                  <p className="text-slate-300 text-sm">{risk}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base font-semibold text-amber-400">
              These are real risks, not just theory.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Example */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-amber-500 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold gradient-text">
                A Practical Example
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                A customer in a local jewelry market wanted to buy gold worth 1.5 tola. The seller explained the price in masha. The customer tried to convert mentally but got unsure.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Instead of calculating properly, he rounded values and moved forward.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                The result?
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                He ended up agreeing to a price that was slightly higher than expected. It didn't look like a big difference at first—but in gold pricing, even a small mismatch adds up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Solution */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              A Simple Solution That Works Every Time
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Instead of guessing or relying on memory, you can use a simple tool that does the work instantly.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              A tola to masha converter gives you:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Instant results', 'Correct values every time', 'Confidence in your calculations'].map((benefit) => (
                <div key={benefit} className="bg-slate-800 rounded-xl p-4 text-center">
                  <span className="text-amber-400 font-semibold text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              No formulas to remember. No confusion.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Just enter the value and get your answer.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Tola and Masha */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Understanding Tola and Masha in Simple Terms
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Before using any calculator, it helps to understand the basics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-400 mb-3">What is a Tola?</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Tola is a traditional unit of weight commonly used for:
                </p>
                <ul className="space-y-2">
                  {['Gold', 'Silver', 'Jewelry'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="text-amber-400">›</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  It has been used for generations and is still standard in many local markets.
                </p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-400 mb-3">What is a Masha?</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Masha is a smaller unit within the same system. It allows more precise measurement, especially useful when dealing with small quantities of gold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exact Conversion */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              The Exact Conversion You Should Know
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Here is the key fact:
            </p>
            <div className="glass-card p-6 rounded-2xl text-center">
              <p className="text-3xl md:text-4xl font-black text-amber-400">1 tola = 12 masha</p>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              This is the standard used in{' '}
              <Link href="/pakistan" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Pakistan</Link>{' '}
              and neighboring countries. Once you know this, everything becomes easier.
            </p>

            <h3 className="text-xl font-bold text-amber-400">Quick Reference Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm glass-card rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="text-left px-4 py-3 text-amber-400 font-semibold">Tola</th>
                    <th className="text-left px-4 py-3 text-amber-400 font-semibold">Masha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {[
                    ['1', '12'],
                    ['2', '24'],
                    ['3', '36'],
                    ['5', '60'],
                    ['10', '120'],
                  ].map(([tola, masha]) => (
                    <tr key={tola} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-3 text-slate-300">{tola}</td>
                      <td className="px-4 py-3 text-amber-300 font-mono">{masha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              This simple table can solve most everyday questions.
            </p>
          </div>
        </div>
      </section>

      {/* How They Connect to Grams */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              How Tola and Masha Connect to Grams
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              If you want a complete understanding, it helps to link these units with grams.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl text-center">
                <p className="text-amber-400 font-black text-2xl mb-1">≈ 11.66 grams</p>
                <p className="text-slate-400 text-sm">1 tola</p>
              </div>
              <div className="glass-card p-5 rounded-2xl text-center">
                <p className="text-amber-400 font-black text-2xl mb-1">≈ 0.97 grams</p>
                <p className="text-slate-400 text-sm">1 masha</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              This is useful when:
            </p>
            <div className="space-y-2">
              {[
                'Comparing international gold prices',
                'Understanding weight in modern units',
                'Converting between systems',
              ].map((use) => (
                <div key={use} className="flex items-center gap-3">
                  <span className="text-amber-400">›</span>
                  <p className="text-slate-300 text-sm md:text-base">{use}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 text-sm">
              For direct gram conversions, you can also use our{' '}
              <Link href="/" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Tola to Grams</Link>{' '}
              or{' '}
              <Link href="/grams-to-tola" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Grams to Tola</Link>{' '}
              converter.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Examples */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Step-by-Step Examples
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Let's break it down with simple examples.
            </p>
            <div className="space-y-4">
              <div className="glass-card p-5 md:p-6 rounded-2xl border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-400 mb-3">Example 1: Basic Conversion</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  If you have 2 tola:
                </p>
                <div className="bg-slate-800 rounded-lg p-3 font-mono text-sm text-amber-300">
                  2 × 12 = 24 masha
                </div>
              </div>
              <div className="glass-card p-5 md:p-6 rounded-2xl border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-400 mb-3">Example 2: Decimal Value</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  If you have 2.5 tola:
                </p>
                <div className="bg-slate-800 rounded-lg p-3 font-mono text-sm text-amber-300">
                  2.5 × 12 = 30 masha
                </div>
              </div>
              <div className="glass-card p-5 md:p-6 rounded-2xl border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-400 mb-3">Example 3: Smaller Quantity</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  If you have 0.75 tola:
                </p>
                <div className="bg-slate-800 rounded-lg p-3 font-mono text-sm text-amber-300">
                  0.75 × 12 = 9 masha
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Market Case Study */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8 rounded-2xl space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold gradient-text">
                Real Market Case Study
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                To understand how important this is, let's look at a realistic scenario.
              </p>
              <h3 className="text-lg font-bold text-amber-400">Situation</h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                A buyer wants to purchase gold weighing 1.25 tola. The seller provides the rate per masha.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-4 space-y-2">
                  <p className="text-amber-400 font-semibold text-sm">Step 1: Convert Weight</p>
                  <p className="font-mono text-amber-300 text-sm">1.25 × 12 = 15 masha</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 space-y-2">
                  <p className="text-amber-400 font-semibold text-sm">Step 2: Apply Price</p>
                  <p className="text-slate-300 text-sm">If the rate is Rs. 18,500 per masha:</p>
                  <p className="font-mono text-amber-300 text-sm">15 × 18,500 = Rs. 277,500</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-amber-400">What if the buyer didn't convert?</h3>
              <div className="space-y-2">
                {['The buyer might guess', 'Or miscalculate', 'This could easily lead to paying more than necessary.'].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="text-red-400 font-black mt-0.5">✕</span>
                    <p className="text-slate-300 text-sm">{point}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-bold text-amber-400">With a converter?</h3>
              <div className="space-y-2">
                {['The calculation is clear', 'The price is transparent', 'The decision feels confident'].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="text-green-400 font-black mt-0.5">✓</span>
                    <p className="text-slate-300 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
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
              Even experienced people make small errors. Here are a few to watch out for:
            </p>
            <div className="space-y-3">
              {[
                'Assuming the wrong conversion value',
                'Mixing grams with masha incorrectly',
                'Rounding numbers too early',
                'Relying only on memory',
              ].map((mistake) => (
                <div key={mistake} className="glass-card p-4 rounded-xl flex items-center gap-3">
                  <span className="text-red-400 font-black">✕</span>
                  <p className="text-slate-300 text-sm">{mistake}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Using a simple calculator removes all these risks.
            </p>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Who Benefits from This Tool?
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              This tool is useful for more people than you might expect.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Gold Buyers', desc: 'Check weight before making payment.' },
                { title: 'Jewelry Sellers', desc: 'Give accurate information to customers.' },
                { title: 'Investors', desc: 'Track gold holdings with clarity.' },
                { title: 'Students', desc: 'Learn traditional measurement systems easily.' },
              ].map(({ title, desc }) => (
                <div key={title} className="glass-card p-5 rounded-2xl">
                  <h3 className="font-bold text-amber-400 mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Not Manual */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Why Not Just Calculate Manually?
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              You can—but it's not always practical.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl border-l-4 border-red-500">
                <h3 className="font-bold text-red-400 mb-3">Manual calculation:</h3>
                <ul className="space-y-2">
                  {['Takes time', 'Requires focus', 'Leaves room for mistakes'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="text-red-400">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-green-500">
                <h3 className="font-bold text-green-400 mb-3">A converter:</h3>
                <ul className="space-y-2">
                  {['Works instantly', 'Reduces effort', 'Gives reliable results'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="text-green-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              In situations where money is involved, accuracy matters more than anything.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              How to Use the Converter
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              The process is simple:
            </p>
            <div className="space-y-3">
              {[
                'Enter the value in tola',
                'Click convert',
                'See the result in masha',
              ].map((step, i) => (
                <div key={i} className="glass-card p-4 rounded-xl flex items-center gap-4">
                  <span className="text-amber-400 font-black text-lg w-6 text-center">{i + 1}.</span>
                  <p className="text-slate-300 text-sm">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              That's all you need to do.
            </p>
          </div>
        </div>
      </section>

      {/* Helpful Tip */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-amber-500/30 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-amber-400">
                Helpful Tip for Gold Buyers
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Always check two things:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-4 text-center">
                  <p className="text-amber-400 font-semibold text-sm">Weight conversion</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 text-center">
                  <p className="text-amber-400 font-semibold text-sm">Current gold rate</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                When both are clear, you can make better decisions without relying on guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: 'How many masha are in one tola?',
                  a: 'There are 12 masha in 1 tola.',
                },
                {
                  q: 'Is this conversion the same in Pakistan?',
                  a: 'Yes, the standard conversion used in Pakistan is: 1 tola = 12 masha',
                },
                {
                  q: 'Can I convert masha back to tola?',
                  a: 'Yes. Just divide by 12. For example: 24 masha ÷ 12 = 2 tola',
                },
                {
                  q: 'Why not just use grams?',
                  a: 'Grams are used globally, but traditional markets still use tola and masha. That\'s why both systems are important.',
                },
                {
                  q: 'Is the conversion exact?',
                  a: 'Yes, the relationship between tola and masha is fixed. However, gram values are approximate.',
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
              Understanding weight units like tola and masha is not just about numbers—it's about making informed decisions.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              When you rely on guesswork, you leave room for mistakes. But when you use a proper tool, everything becomes clear.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              A simple tola to masha converter can:
            </p>
            <div className="space-y-2">
              {['Save time', 'Prevent confusion', 'Help you make better financial decisions'].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <span className="text-green-400 font-black">✓</span>
                  <p className="text-slate-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Whether you're buying gold, selling jewelry, or just learning, having the right information makes all the difference.
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
            <Link href="/grams-to-tola" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Grams to Tola</h3>
              <p className="text-slate-400 text-sm">Reverse conversion</p>
            </Link>
            <Link href="/gold-weight-converter" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Gold Weight Converter</h3>
              <p className="text-slate-400 text-sm">All weight units</p>
            </Link>
            <Link href="/pakistan" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Pakistan Gold Rates</h3>
              <p className="text-slate-400 text-sm">Regional pricing</p>
            </Link>
            <Link href="/india" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">India Gold Rates</h3>
              <p className="text-slate-400 text-sm">Regional pricing</p>
            </Link>
            <Link href="/tola-vs-grams" className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">Tola vs Grams</h3>
              <p className="text-slate-400 text-sm">Understand the difference</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
