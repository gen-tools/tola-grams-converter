'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500 mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border border-primary-800 rounded-lg overflow-hidden bg-dark-800 hover:border-primary-600 transition duration-350">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-dark-700 transition duration-350 group"
            >
              <span className="font-bold text-gray-200 text-left group-hover:text-primary-400 transition duration-350">
                {item.question}
              </span>
              <ChevronDown
                size={22}
                className={`text-primary-400 transition-all duration-350 transform group-hover:text-primary-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-5 bg-dark-700 border-t border-primary-800 text-gray-300 leading-relaxed animate-fade-in-up">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
