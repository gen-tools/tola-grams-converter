import type { Metadata } from "next";
import RegionalConverter from "@/components/RegionalConverterDynamic";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tola to Grams Converter Dubai | Gold Rate in AED",
  description:
    "Convert tola to grams in Dubai and calculate gold value in AED. Instant tola weight conversion and gold price calculator for Dubai gold market.",
  keywords:
    "tola to grams dubai, gold rate dubai aed, dubai gold converter, emirates weight",
  alternates: {
    canonical: "https://tola-to-grams.com/dubai",
  },
};

export default function DubaiPage() {
  return (
    <div className="w-full bg-slate-900">
      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <RegionalConverter
            title="Tola to Grams Dubai"
            subtitle="Gold weight conversion and value calculator for Dubai gold trading"
            regionName="Dubai"
            currency="AED"
            currencySymbol="د.إ"
            approxRatePerTola={4100}
            regions={[
              { name: "Pakistan", link: "/pakistan" },
              { name: "India", link: "/india" },
              { name: "Nepal", link: "/nepal" },
              { name: "UAE", link: "/uae" },
              { name: "UK", link: "/uk" },
            ]}
          />
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <div className="glass-card p-6 rounded-2xl md:p-8">
            <h2 className="text-2xl font-bold gradient-text mb-6">
              About Tola in Dubai
            </h2>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                Dubai is a global hub for gold trading and jewelry
                manufacturing. While Dubai uses grams officially, many South
                Asian traders understand tola. Essential for jewelry
                professionals working with international suppliers.
              </p>
              <p>
                <span className="text-amber-400 font-semibold">
                  1 Tola = 11.6638 Grams
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-900">
        <div className="container-max">
          <h2 className="text-2xl font-bold gradient-text mb-8 text-center">
            Other Countries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/pakistan"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                Pakistan
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in PKR · Tola converter
              </p>
            </Link>
            <Link
              href="/india"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                India
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in INR · Tola converter
              </p>
            </Link>
            <Link
              href="/nepal"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                Nepal
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in NPR · Tola converter
              </p>
            </Link>
            <Link
              href="/uae"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                UAE
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in AED · Tola converter
              </p>
            </Link>
            <Link
              href="/uk"
              className="glass-card p-6 rounded-2xl hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-bold text-amber-400 group-hover:text-amber-300 mb-2">
                UK
              </h3>
              <p className="text-slate-400 text-sm">
                Gold rate in GBP · Tola converter
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
