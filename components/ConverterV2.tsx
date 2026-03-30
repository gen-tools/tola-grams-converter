'use client';

import { useState, useEffect, useRef } from 'react';
import { tolaToGrams, gramsToTola } from '@/lib/conversions';

interface ConverterV2Props {
  type?: 'tola-to-grams' | 'grams-to-tola';
  title: string;
  subtitle?: string;
  regions?: Array<{ name: string; link: string }>;
  asH1?: boolean;
}

export default function ConverterV2({
  type = 'tola-to-grams',
  title,
  subtitle,
  regions,
  asH1 = false
}: ConverterV2Props) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [decimals, setDecimals] = useState(4);
  const lastEdited = useRef<1 | 2>(1);

  const isTolaToGrams = type === 'tola-to-grams';
  const label1 = isTolaToGrams ? 'Tola' : 'Grams';
  const label2 = isTolaToGrams ? 'Grams' : 'Tola';
  const CONVERSION_CONSTANT = 11.6638038;

  const doConvert = (val: string, fromTola: boolean, dp: number): string => {
    const num = parseFloat(val);
    if (isNaN(num) || num < 0) return '';
    const result = fromTola ? tolaToGrams(num) : gramsToTola(num);
    return result.toFixed(dp);
  };

  useEffect(() => {
    if (lastEdited.current === 1) {
      setInput2(doConvert(input1, isTolaToGrams, decimals));
    } else {
      setInput1(doConvert(input2, !isTolaToGrams, decimals));
    }
  }, [decimals]);

  const handleInput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    lastEdited.current = 1;
    setInput1(val);
    setInput2(doConvert(val, isTolaToGrams, decimals));
  };

  const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    lastEdited.current = 2;
    setInput2(val);
    setInput1(doConvert(val, !isTolaToGrams, decimals));
  };

  const handleQuickPick = (val: number) => {
    lastEdited.current = 1;
    const str = String(val);
    setInput1(str);
    setInput2(doConvert(str, isTolaToGrams, decimals));
  };

  const hasResult = input1 !== '' && input2 !== '';

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Calculator */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl md:p-8">
          <div className="mb-8">
            {asH1 ? (
              <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-1">{title}</h1>
            ) : (
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-1">{title}</h2>
            )}
            {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
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
                {label1}
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={input1}
                onChange={handleInput1}
                placeholder="0"
                className="premium-input px-4 w-full py-4 rounded-xl text-lg"
                suppressHydrationWarning
              />
              <p className="text-xs text-slate-500 mt-2">Enter amount in {label1}</p>
            </div>

            <div>
              <label className="text-slate-300 font-medium block mb-2 text-sm">
                {label2}
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={input2}
                onChange={handleInput2}
                placeholder="0"
                className="premium-input px-4 w-full py-4 rounded-xl text-lg"
                suppressHydrationWarning
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
                  <p className="text-slate-400 text-xs uppercase tracking-wide mb-3">{label1}</p>
                  <p className="text-white font-bold text-3xl md:text-4xl">{input1}</p>
                  <p className="text-slate-500 text-xs mt-2">{input1} {label1}</p>
                </div>
                <div className="glass-card-light p-6 rounded-xl text-center flex items-center justify-center border border-white/5">
                  <p className="text-slate-400 text-xl">↔</p>
                </div>
                <div className="glass-card-light p-6 rounded-xl text-center border border-white/5">
                  <p className="text-slate-400 text-xs uppercase tracking-wide mb-3">{label2}</p>
                  <p className="text-white font-bold text-3xl md:text-4xl">{input2}</p>
                  <p className="text-slate-500 text-xs mt-2">{input2} {label2}</p>
                </div>
              </div>

              <div className="glass-card-light p-6 rounded-xl border border-white/5">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-3">Formula</p>
                <div className="space-y-2 text-center">
                  <p className="text-slate-300 text-sm">
                    {isTolaToGrams ? (
                      <>{label1} × <span className="text-cyan-400 font-semibold">{CONVERSION_CONSTANT}</span> = {label2}</>
                    ) : (
                      <>{label1} ÷ <span className="text-cyan-400 font-semibold">{CONVERSION_CONSTANT}</span> = {label2}</>
                    )}
                  </p>
                  <p className="text-white font-mono text-sm font-semibold">
                    {input1} {isTolaToGrams ? '×' : '÷'} {CONVERSION_CONSTANT} = {input2}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Result Card - Always Visible */}
          <div className="glass-card p-6 rounded-2xl glow-gold border border-amber-500/20">
            <h3 className="text-amber-400 font-semibold mb-3 text-sm uppercase tracking-wide">Result</h3>
            {hasResult ? (
              <>
                <p className="text-white font-bold md:text-5xl text-4xl leading-tight">{input2}</p>
                <p className="text-slate-300 text-sm mt-3 font-medium">{input1} {label1} = {input2} {label2}</p>
              </>
            ) : (
              <div className="flex items-center justify-center py-8">
                <p className="text-slate-500 text-sm">Enter an amount to see result</p>
              </div>
            )}
          </div>

          {/* Other Regions Card */}
          {regions && (
            <div className="glass-card p-6 rounded-2xl text-sm">
              <h3 className="text-amber-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                {isTolaToGrams ? 'Regional Rates' : 'Other Regions'}
              </h3>
              <div className="space-y-2 text-slate-300">
                {regions.map((r, i) => (
                  <a
                    key={i}
                    href={r.link}
                    className="flex items-center gap-2 transition-colors hover:text-amber-400"
                  >
                    <span className="text-amber-300 opacity-60">✦</span> {r.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
