'use client';

import { useState, useRef } from 'react';
import { tolaToGrams, gramsToTola } from '@/lib/conversions';

interface RegionalConverterProps {
  title: string;
  subtitle?: string;
  regionName: string;
  currency: string;
  currencySymbol: string;
  approxRatePerTola: number;
  regions: Array<{ name: string; link: string }>;
}

const CONVERSION_CONSTANT = 11.6638038;

export default function RegionalConverter({
  title,
  subtitle,
  regionName,
  currency,
  currencySymbol,
  approxRatePerTola,
  regions,
}: RegionalConverterProps) {
  const [tola, setTola] = useState('');
  const [grams, setGrams] = useState('');
  const [decimals, setDecimals] = useState(4);
  const lastEdited = useRef<'tola' | 'grams'>('tola');

  const [goldTola, setGoldTola] = useState('');
  const [pricePerTola, setPricePerTola] = useState(String(approxRatePerTola));

  const recompute = (field: 'tola' | 'grams', val: string, dp: number) => {
    const num = parseFloat(val);
    if (isNaN(num) || num < 0) return '';
    return field === 'tola'
      ? tolaToGrams(num).toFixed(dp)
      : gramsToTola(num).toFixed(dp);
  };

  const handleTolaChange = (val: string) => {
    lastEdited.current = 'tola';
    setTola(val);
    setGrams(recompute('tola', val, decimals));
  };

  const handleGramsChange = (val: string) => {
    lastEdited.current = 'grams';
    setGrams(val);
    setTola(recompute('grams', val, decimals));
  };

  const handleDecimals = (delta: number) => {
    const nd = Math.min(10, Math.max(0, decimals + delta));
    setDecimals(nd);
    if (lastEdited.current === 'tola' && tola !== '') {
      setGrams(recompute('tola', tola, nd));
    } else if (grams !== '') {
      setTola(recompute('grams', grams, nd));
    }
  };

  const handleQuickPick = (val: number) => {
    handleTolaChange(String(val));
  };

  const hasWeightResult = tola !== '' && grams !== '';

  const goldTolaNum = parseFloat(goldTola);
  const priceNum = parseFloat(pricePerTola);
  const totalValue =
    !isNaN(goldTolaNum) && !isNaN(priceNum) && goldTolaNum > 0 && priceNum > 0
      ? (goldTolaNum * priceNum).toLocaleString('en', { maximumFractionDigits: 2 })
      : null;

  const gramsValue =
    !isNaN(goldTolaNum) && goldTolaNum > 0
      ? tolaToGrams(goldTolaNum).toFixed(4)
      : null;

  return (
    <div className="w-full space-y-6">
      {/* ── Weight Converter ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-1">{title}</h2>
            {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
          </div>

          {/* Decimal Control */}
          <div className="flex gap-3 items-center mb-8 bg-slate-800/30 rounded-lg p-4 w-fit">
            <button
              onClick={() => handleDecimals(-1)}
              className="pill-btn px-3 py-1.5 rounded-lg text-lg hover:text-amber-400 font-semibold cursor-pointer active:scale-95"
              type="button"
            >
              −
            </button>
            <div className="text-amber-400 font-semibold bg-amber-500/20 px-4 py-1.5 rounded-lg min-w-12 text-center">
              {decimals}
            </div>
            <button
              onClick={() => handleDecimals(1)}
              className="pill-btn px-3 py-1.5 rounded-lg text-lg hover:text-amber-400 font-semibold cursor-pointer active:scale-95"
              type="button"
            >
              +
            </button>
          </div>

          {/* Inputs */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 mb-8">
            <div>
              <label className="text-slate-300 font-medium block mb-2 text-sm">Tola</label>
              <input
                type="text"
                inputMode="decimal"
                value={tola}
                onChange={(e) => handleTolaChange(e.target.value)}
                placeholder="0"
                className="premium-input px-4 w-full py-4 rounded-xl text-lg"
                suppressHydrationWarning
              />
              <p className="text-xs text-slate-500 mt-2">Enter amount in Tola</p>
            </div>
            <div>
              <label className="text-slate-300 font-medium block mb-2 text-sm">Grams</label>
              <input
                type="text"
                inputMode="decimal"
                value={grams}
                onChange={(e) => handleGramsChange(e.target.value)}
                placeholder="0"
                className="premium-input px-4 w-full py-4 rounded-xl text-lg"
                suppressHydrationWarning
              />
              <p className="text-xs text-slate-500 mt-2">Converted amount</p>
            </div>
          </div>

          {/* Quick Picks */}
          <div className="flex gap-2 items-center text-sm flex-wrap mb-8">
            {[1, 5, 10, 50].map((val) => (
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
          {hasWeightResult && (
            <div className="mt-8 space-y-4">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                <div className="glass-card-light p-6 rounded-xl text-center border border-white/5">
                  <p className="text-slate-400 text-xs uppercase tracking-wide mb-3">Tola</p>
                  <p className="text-white font-bold text-3xl md:text-4xl">{tola}</p>
                  <p className="text-slate-500 text-xs mt-2">{tola} Tola</p>
                </div>
                <div className="glass-card-light p-6 rounded-xl text-center flex items-center justify-center border border-white/5">
                  <p className="text-slate-400 text-xl">↔</p>
                </div>
                <div className="glass-card-light p-6 rounded-xl text-center border border-white/5">
                  <p className="text-slate-400 text-xs uppercase tracking-wide mb-3">Grams</p>
                  <p className="text-white font-bold text-3xl md:text-4xl">{grams}</p>
                  <p className="text-slate-500 text-xs mt-2">{grams} g</p>
                </div>
              </div>

              <div className="glass-card-light p-6 rounded-xl border border-white/5">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-3">Formula</p>
                <div className="space-y-2 text-center">
                  <p className="text-slate-300 text-sm">
                    Tola × <span className="text-cyan-400 font-semibold">{CONVERSION_CONSTANT}</span> = Grams
                  </p>
                  <p className="text-white font-mono text-sm font-semibold">
                    {tola} × {CONVERSION_CONSTANT} = {grams}
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
            {hasWeightResult ? (
              <>
                <p className="text-white font-bold md:text-5xl text-4xl leading-tight">{grams}</p>
                <p className="text-slate-300 text-sm mt-3 font-medium">{tola} Tola = {grams} Grams</p>
              </>
            ) : (
              <div className="flex items-center justify-center py-8">
                <p className="text-slate-500 text-sm">Enter an amount to see result</p>
              </div>
            )}
          </div>

          {/* Gold Rate Reference */}
          <div className="glass-card p-6 rounded-2xl text-sm border border-amber-500/10">
            <h3 className="text-amber-400 font-semibold mb-3 text-sm uppercase tracking-wide">
              Gold Rate — {regionName}
            </h3>
            <div className="space-y-2 text-slate-300">
              <div className="flex justify-between items-center">
                <span>Per Tola</span>
                <span className="text-amber-300 font-semibold">
                  {currencySymbol} {approxRatePerTola.toLocaleString('en')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Per Gram</span>
                <span className="text-amber-300 font-semibold">
                  {currencySymbol} {(approxRatePerTola / CONVERSION_CONSTANT).toLocaleString('en', { maximumFractionDigits: 0 })}
                </span>
              </div>
              <p className="text-slate-500 text-xs pt-2 border-t border-white/5">
                Approximate rate. Use value calculator below for exact totals.
              </p>
            </div>
          </div>

          {/* Other Regions */}
          <div className="glass-card p-6 rounded-2xl text-sm">
            <h3 className="text-amber-400 font-semibold mb-3 text-sm uppercase tracking-wide">Other Regions</h3>
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
        </div>
      </div>

      {/* ── Gold Value Calculator ── */}
      <div className="glass-card p-6 rounded-2xl md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold gradient-text mb-1">
            Gold Value Calculator — {regionName}
          </h2>
          <p className="text-sm text-slate-400">
            Enter tola amount and today's gold rate to calculate total value in {currency}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {/* Tola Amount */}
          <div>
            <label className="text-slate-300 font-medium block mb-2 text-sm">
              Gold Amount (Tola)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={goldTola}
              onChange={(e) => setGoldTola(e.target.value)}
              placeholder="e.g. 10"
              className="premium-input px-4 w-full py-4 rounded-xl text-lg"
              suppressHydrationWarning
            />
            <p className="text-xs text-slate-500 mt-2">How many tola of gold?</p>
          </div>

          {/* Price Per Tola */}
          <div>
            <label className="text-slate-300 font-medium block mb-2 text-sm">
              Price per Tola ({currency})
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={pricePerTola}
              onChange={(e) => setPricePerTola(e.target.value)}
              placeholder={String(approxRatePerTola)}
              className="premium-input px-4 w-full py-4 rounded-xl text-lg"
              suppressHydrationWarning
            />
            <p className="text-xs text-slate-500 mt-2">Today's gold rate in {currency}</p>
          </div>

          {/* Total Value Output */}
          <div className="md:col-span-2 lg:col-span-1">
            <label className="text-slate-300 font-medium block mb-2 text-sm">
              Total Value ({currency})
            </label>
            <div className="glass-card-light px-4 w-full py-4 rounded-xl text-lg border border-amber-500/20 min-h-[60px] flex items-center">
              {totalValue ? (
                <span className="text-amber-400 font-bold text-xl">
                  {currencySymbol} {totalValue}
                </span>
              ) : (
                <span className="text-slate-500">Enter values above</span>
              )}
            </div>
            {gramsValue && (
              <p className="text-xs text-slate-500 mt-2">= {gramsValue} grams of gold</p>
            )}
          </div>
        </div>

        {/* Result summary tiles */}
        {totalValue && gramsValue && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="glass-card-light p-5 rounded-xl text-center border border-white/5">
              <p className="text-slate-400 text-xs uppercase tracking-wide mb-2">Gold Amount</p>
              <p className="text-white font-bold text-2xl">{goldTola}</p>
              <p className="text-slate-500 text-xs mt-1">Tola</p>
            </div>
            <div className="glass-card-light p-5 rounded-xl text-center border border-white/5">
              <p className="text-slate-400 text-xs uppercase tracking-wide mb-2">Weight</p>
              <p className="text-white font-bold text-2xl">{gramsValue}</p>
              <p className="text-slate-500 text-xs mt-1">Grams</p>
            </div>
            <div className="glass-card-light p-5 rounded-xl text-center border border-white/5">
              <p className="text-slate-400 text-xs uppercase tracking-wide mb-2">Rate per Tola</p>
              <p className="text-amber-400 font-bold text-2xl">
                {currencySymbol} {parseFloat(pricePerTola).toLocaleString('en')}
              </p>
              <p className="text-slate-500 text-xs mt-1">{currency}</p>
            </div>
            <div className="glass-card-light p-5 rounded-xl text-center border border-amber-500/20 glow-gold">
              <p className="text-slate-400 text-xs uppercase tracking-wide mb-2">Total Value</p>
              <p className="text-amber-400 font-bold text-2xl">
                {currencySymbol} {totalValue}
              </p>
              <p className="text-slate-500 text-xs mt-1">{currency}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
