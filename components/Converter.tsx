'use client';

import { useState } from 'react';
import { tolaToGrams, gramsToTola, formatNumber, parseInput } from '@/lib/conversions';

interface ConverterProps {
  type?: 'tola-to-grams' | 'grams-to-tola';
  title?: string;
}

export default function Converter({ type = 'tola-to-grams', title }: ConverterProps) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    
    const num = parseInput(value);
    if (num > 0) {
      if (type === 'tola-to-grams') {
        setResult(formatNumber(tolaToGrams(num)));
      } else {
        setResult(formatNumber(gramsToTola(num)));
      }
    } else {
      setResult(null);
    }
  };

  const handleQuickConvert = (value: number) => {
    setInput(String(value));
    if (type === 'tola-to-grams') {
      setResult(formatNumber(tolaToGrams(value)));
    } else {
      setResult(formatNumber(gramsToTola(value)));
    }
  };

  const inputLabel = type === 'tola-to-grams' ? 'Tola' : 'Grams';
  const outputLabel = type === 'tola-to-grams' ? 'Grams' : 'Tola';
  const quickValues = type === 'tola-to-grams' 
    ? [1, 5, 10, 50, 100]
    : [11.66, 58.32, 116.64, 583.19, 1166.38];

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in-up">
      <div className="bg-dark-800 rounded-2xl shadow-lg-custom overflow-hidden border border-primary-900 hover:border-primary-700 transition duration-350">
        {title && (
          <div className="gradient-primary p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 animate-pulse"></div>
            <h2 className="text-3xl font-bold text-white text-center relative z-10">{title}</h2>
          </div>
        )}
        
        <div className="p-8 md:p-12 space-y-8">
          {/* Input Section */}
          <div className="group">
            <label className="block text-sm font-bold text-primary-400 mb-3 uppercase tracking-wide">
              Enter {inputLabel}
            </label>
            <div className="relative">
              <input
                type="number"
                value={input}
                onChange={handleInputChange}
                placeholder={`0 ${inputLabel}`}
                className="w-full px-6 py-4 text-lg bg-dark-700 border-2 border-primary-800 rounded-lg focus:outline-none focus:border-primary-400 text-gray-100 placeholder-gray-500 transition duration-350 hover:border-primary-600"
              />
              <span className="absolute right-6 top-4 text-primary-400 font-bold text-lg">
                {inputLabel}
              </span>
            </div>
          </div>

          {/* Quick Conversion Buttons */}
          <div className="group">
            <label className="block text-sm font-bold text-primary-400 mb-4 uppercase tracking-wide">
              Quick Conversion
            </label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {quickValues.map((value, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickConvert(value)}
                  className="px-4 py-3 bg-dark-700 hover:bg-primary-700 text-gray-300 hover:text-white border border-primary-800 hover:border-primary-500 rounded-lg transition duration-350 text-sm font-bold hover:shadow-md-custom hover:scale-105 transform"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Output Section */}
          {result && (
            <div className="group p-8 bg-dark-700 rounded-xl border-2 border-primary-600 shadow-md-custom animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-transparent opacity-5"></div>
              <div className="relative z-10 text-center">
                <p className="text-primary-400 text-sm font-bold mb-3 uppercase tracking-wider">Result</p>
                <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500 mb-2">
                  {result}
                </p>
                <p className="text-gray-400 text-sm font-semibold">{outputLabel}</p>
              </div>
            </div>
          )}

          {/* Formula */}
          <div className="p-6 bg-dark-700 rounded-lg border border-primary-800 hover:border-primary-600 transition duration-350">
            <p className="text-sm text-gray-300">
              <span className="font-bold text-primary-400">Formula:</span>{' '}
              <span className="text-gray-200 font-mono">
                {type === 'tola-to-grams' 
                  ? 'grams = tola × 11.6638038'
                  : 'tola = grams ÷ 11.6638038'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
