import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './translations';

type Language = 'en' | 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: string, key?: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (section: string, key?: string) => {
    const sectionData = translations[language][section as keyof typeof translations['en']];
    if (!sectionData) return '';
    if (key) {
      return (sectionData as any)[key] || '';
    }
    return sectionData;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
