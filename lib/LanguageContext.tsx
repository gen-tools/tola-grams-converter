'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LangCode, Translation, translations } from './translations';

interface LanguageContextType {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations['en'],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>('en');

  useEffect(() => {
    const saved = localStorage.getItem('preferred-lang') as LangCode | null;
    if (saved && translations[saved]) {
      setLangState(saved);
    }
  }, []);

  const setLang = (code: LangCode) => {
    setLangState(code);
    localStorage.setItem('preferred-lang', code);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
