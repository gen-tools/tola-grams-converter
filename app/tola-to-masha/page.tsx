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

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-2xl font-bold gradient-text mb-6">
              Understanding Tola to Masha
            </h2>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                Tola and masha are two traditional weight units used in South Asia. While tola is the more commonly used unit for larger quantities, masha is used for smaller measurements.
              </p>
              <p>
                <span className="text-amber-400 font-semibold">1 Tola = 12 Masha</span>
              </p>
              <p>
                Masha is particularly useful for measuring small quantities or for detailed jewelry specifications. Understanding the relationship between these units is important for jewelry and precious metals work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
