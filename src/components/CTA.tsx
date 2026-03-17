import { ArrowRight, PhoneCall } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();
  const tCta = t('cta');

  return (
    <section className="py-24 bg-[var(--color-primary)] relative overflow-hidden">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
          {tCta.title}
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          {tCta.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[var(--color-accent)] hover:bg-yellow-500 text-[var(--color-heading)] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2 group">
            {tCta.btn1}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
            <PhoneCall className="w-5 h-5" />
            {tCta.btn2}
          </button>
        </div>
      </div>
    </section>
  );
}
