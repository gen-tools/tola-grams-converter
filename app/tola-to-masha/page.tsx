'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

// Note: Metadata is only supported in server components
// Using 'use client' for form interactivity here

export default function TolaToMashaPage() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [decimals, setDecimals] = useState(2);

  const TOLA_TO_MASHA = 12;

  const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput1(value);
    
    const num = parseFloat(value);
    if (num > 0) {
      const result = num * TOLA_TO_MASHA;
      setInput2(result.toFixed(decimals));
    } else {
      setInput2('');
    }
  };

  const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput2(value);
    
    const num = parseFloat(value);
    if (num > 0) {
      const result = num / TOLA_TO_MASHA;
      setInput1(result.toFixed(decimals));
    } else {
      setInput1('');
    }
  };

  const handleQuickPick = (value: number) => {
    setInput1(String(value));
    const result = value * TOLA_TO_MASHA;
    setInput2(result.toFixed(decimals));
  };

  const quickValues = [1, 5, 10, 50, 100];

  return (
    <div className="w-full bg-dark-900">
      {/* Converter Section - Direct Start */}
      <section className="py-12 md:py-16 bg-dark-900 border-b border-primary-900">
        <div className="container-max">
          <div className="w-full animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Converter */}
              <div className="lg:col-span-2 bg-dark-800 rounded-xl border border-primary-900 p-8 shadow-lg-custom">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 mb-2">
                      Tola to Masha
                    </h2>
                    <p className="text-gray-400 text-sm">Convert tola to masha and vice versa</p>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-dark-700 rounded-lg p-2 border border-primary-800">
                    <button
                      onClick={() => setDecimals(Math.max(0, decimals - 1))}
                      className="p-2 hover:bg-dark-600 rounded transition text-primary-400 hover:text-primary-300"
                    >
                      −
                    </button>
                    <span className="w-12 text-center text-primary-400 font-bold">{decimals}</span>
                    <button
                      onClick={() => setDecimals(Math.min(8, decimals + 1))}
                      className="p-2 hover:bg-dark-600 rounded transition text-primary-400 hover:text-primary-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-primary-400 mb-3 uppercase tracking-wider">
                      Tola
                    </label>
                    <input
                      type="number"
                      value={input1}
                      onChange={handleInput1Change}
                      placeholder="0"
                      className="w-full px-4 py-3 text-lg bg-dark-700 border-2 border-primary-800 rounded-lg focus:outline-none focus:border-primary-500 text-gray-100 placeholder-gray-600 transition"
                    />
                    <p className="text-xs text-gray-500 mt-2">Type here to update tola instantly.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary-400 mb-3 uppercase tracking-wider">
                      Masha
                    </label>
                    <input
                      type="number"
                      value={input2}
                      onChange={handleInput2Change}
                      placeholder="0"
                      className="w-full px-4 py-3 text-lg bg-dark-700 border-2 border-primary-800 rounded-lg focus:outline-none focus:border-primary-500 text-gray-100 placeholder-gray-600 transition"
                    />
                    <p className="text-xs text-gray-500 mt-2">Type here to update masha instantly.</p>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-primary-400 mb-3 uppercase tracking-wider">
                    Quick Picks
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickValues.map((value, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickPick(value)}
                        className="px-4 py-2 bg-dark-700 hover:bg-primary-700 text-gray-300 hover:text-white border border-primary-800 hover:border-primary-500 rounded-lg transition text-sm font-bold hover:shadow-md-custom"
                      >
                        {value} tola
                      </button>
                    ))}
                  </div>
                </div>

                {(input1 || input2) && (
                  <div className="p-6 bg-dark-700 rounded-lg border border-primary-600 grid grid-cols-2 gap-6 animate-fade-in-up">
                    <div className="text-center">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">From</p>
                      <p className="text-3xl font-black text-primary-400">{input1 || '—'}</p>
                      <p className="text-gray-400 text-sm mt-1">tola</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">To</p>
                      <p className="text-3xl font-black text-primary-400">{input2 || '—'}</p>
                      <p className="text-gray-400 text-sm mt-1">masha</p>
                    </div>
                  </div>
                )}

                <div className="mt-6 p-4 bg-dark-700 rounded-lg border border-primary-800 text-xs text-gray-400 font-mono">
                  <p className="mb-1">masha = tola × 12</p>
                  <p>tola = masha ÷ 12</p>
                </div>
              </div>

              {/* Result Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-dark-800 rounded-xl border border-primary-900 p-6 shadow-lg-custom">
                  <h3 className="text-primary-400 font-bold text-sm uppercase tracking-wider mb-4">
                    Result
                  </h3>
                  <div className="space-y-3">
                    {input1 ? (
                      <>
                        <div className="text-center py-4 bg-dark-700 rounded-lg border border-primary-700">
                          <p className="text-2xl font-black text-primary-400">{input1}</p>
                          <p className="text-gray-400 text-sm">tola</p>
                        </div>
                        <div className="text-center text-gray-500">
                          <span className="text-2xl">⟷</span>
                        </div>
                        <div className="text-center py-4 bg-dark-700 rounded-lg border border-primary-700">
                          <p className="text-2xl font-black text-primary-300">{input2}</p>
                          <p className="text-gray-400 text-sm">masha</p>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8 text-gray-600">
                        <p className="text-sm">Enter a value to see results</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-dark-800 rounded-xl border border-primary-900 p-6 shadow-lg-custom">
                  <h3 className="text-primary-400 font-bold text-sm uppercase tracking-wider mb-4">
                    Related Tools
                  </h3>
                  <div className="space-y-2">
                    <Link href="/" className="block px-4 py-2 rounded-lg bg-dark-700 hover:bg-primary-700 text-gray-300 hover:text-white transition text-sm font-medium">
                      → Tola to Grams
                    </Link>
                    <Link href="/grams-to-tola" className="block px-4 py-2 rounded-lg bg-dark-700 hover:bg-primary-700 text-gray-300 hover:text-white transition text-sm font-medium">
                      → Grams to Tola
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-dark-800 border-b border-primary-900">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500 mb-8">
              Understanding Tola to Masha
            </h2>

            <div className="space-y-6 text-gray-300 text-sm">
              <p className="leading-relaxed">
                Tola and masha are two traditional weight units used in South Asia. While tola is the more commonly used unit for larger quantities, masha is used for smaller measurements. Understanding the relationship between these units is important for jewelry and precious metals work.
              </p>

              <h3 className="text-2xl font-bold text-primary-400">
                What is Masha?
              </h3>
              <p className="leading-relaxed">
                Masha is a smaller traditional unit of weight, primarily used in jewelry and precious metals. One tola is equal to 12 masha. Masha is particularly useful for measuring small quantities or for detailed jewelry specifications.
              </p>

              <div className="bg-dark-700 p-4 rounded-lg border-2 border-primary-600">
                <p className="font-bold text-primary-300">1 Tola = 12 Masha</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
