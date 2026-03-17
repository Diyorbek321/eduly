import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();
  const tFaq = t('faq');

  const faqs = tFaq.items as { q: string, a: string }[];

  return (
    <section className="py-24 bg-[var(--color-soft-bg)] border-y border-[var(--color-border-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--color-primary)] text-[11px] font-bold uppercase tracking-[2px] mb-4">{tFaq.tag}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-heading)] mb-6 tracking-tight">
            {tFaq.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-[var(--color-primary)] shadow-md shadow-blue-500/10' 
                  : 'border-[var(--color-border-light)] hover:border-[var(--color-primary)]/30 hover:shadow-sm'
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg transition-colors ${
                  openIndex === index ? 'text-[var(--color-primary)]' : 'text-[var(--color-heading)] group-hover:text-[var(--color-primary)]'
                }`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ml-4 ${
                  openIndex === index 
                    ? 'bg-[var(--color-primary)] text-white' 
                    : 'bg-[var(--color-soft-bg)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white'
                }`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[var(--color-body)] leading-relaxed border-t border-[var(--color-border-light)] pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
