'use client';

import { useState } from 'react';
import { tolaToGrams, gramsToTola } from '@/lib/conversions';

interface ConverterV2Props {
  type?: 'tola-to-grams' | 'grams-to-tola';
  title: string;
  subtitle?: string;
  regions?: Array<{ name: string; link: string }>;
}

export default function ConverterV2({ 
  type = 'tola-to-grams', 
  title,
  subtitle,
  regions 
}: ConverterV2Props) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [decimals, setDecimals] = useState(2);

  const isTolaToGrams = type === 'tola-to-grams';
  const label1 = isTolaToGrams ? 'Tola' : 'Grams';
  const label2 = isTolaToGrams ? 'Grams' : 'Tola';

  const convert = (val: string, fromTola: boolean) => {
    const num = parseFloat(val);
    if (isNaN(num) || num < 0) return '';
    const result = fromTola ? tolaToGrams(num) : gramsToTola(num);
    return result.toFixed(decimals);
  };

  const handleInput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput1(val);
    setInput2(convert(val, isTolaToGrams));
  };

  const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput2(val);
    setInput1(convert(val, !isTolaToGrams));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-dark-800 rounded-lg border border-primary-900 p-4 md:p-6">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">
              {title}
            </h2>
            {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs font-bold text-primary-400 uppercase">
                {label1}
              </label>
              <input
                type="number"
                value={input1}
                onChange={handleInput1}
                placeholder="0"
                className="w-full mt-2 px-3 py-2 text-base bg-dark-700 border border-primary-800 rounded text-gray-100"
                inputMode="decimal"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-primary-400 uppercase">
                {label2}
              </label>
              <input
                type="number"
                value={input2}
                onChange={handleInput2}
                placeholder="0"
                className="w-full mt-2 px-3 py-2 text-base bg-dark-700 border border-primary-800 rounded text-gray-100"
                inputMode="decimal"
              />
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            {[1, 5, 10, 50].map(val => (
              <button
                key={val}
                onClick={() => {
                  setInput1(String(val));
                  setInput2(convert(String(val), isTolaToGrams));
                }}
                className="px-3 py-1.5 text-xs font-bold bg-dark-700 hover:bg-primary-700 text-gray-300 border border-primary-800 rounded"
              >
                {val}
              </button>
            ))}
          </div>

          {input1 && (
            <div className="p-4 bg-dark-700 rounded border border-primary-600">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-xs text-gray-500 mb-1">From</p>
                  <p className="text-2xl font-bold text-primary-400">{input1}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">To</p>
                  <p className="text-2xl font-bold text-primary-400">{input2}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1 space-y-4">
          {input1 && (
            <div className="bg-dark-800 rounded-lg border border-primary-900 p-4">
              <h3 className="text-xs font-bold text-primary-400 uppercase mb-3">
                Result
              </h3>
              <div className="space-y-2">
                <div className="p-2 bg-dark-700 rounded text-center">
                  <p className="text-xl font-bold text-primary-400">{input1}</p>
                  <p className="text-xs text-gray-400">{label1}</p>
                </div>
                <div className="text-center text-gray-500">⟷</div>
                <div className="p-2 bg-dark-700 rounded text-center">
                  <p className="text-xl font-bold text-primary-300">{input2}</p>
                  <p className="text-xs text-gray-400">{label2}</p>
                </div>
              </div>
            </div>
          )}

          {regions && (
            <div className="bg-dark-800 rounded-lg border border-primary-900 p-4">
              <h3 className="text-xs font-bold text-primary-400 uppercase mb-2">
                Regions
              </h3>
              <div className="space-y-1">
                {regions.slice(0, 3).map((r, i) => (
                  <a key={i} href={r.link} className="block text-xs text-gray-400 hover:text-primary-400 py-1">
                    → {r.name}
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
