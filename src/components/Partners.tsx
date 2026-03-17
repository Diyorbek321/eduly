import { useLanguage } from '../i18n/LanguageContext';

export default function Partners() {
  const { t } = useLanguage();
  const tPartners = t('partners');

  const logos = [
    "Cambridge Academy", "Everest School", "Target Education", "Merit Academy",
    "Pioneer Center", "Global English", "Smart Kids", "Future Leaders",
    "Elite Tutors", "Bright Minds", "Success Institute", "Apex Learning"
  ];

  return (
    <section className="py-20 bg-white border-b border-[var(--color-border-light)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-4 tracking-tight">
          {tPartners.title}
        </h2>
        <p className="text-lg text-[var(--color-body)] max-w-2xl mx-auto">
          {tPartners.subtitle}
        </p>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for smooth fade out on edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* First Row - Scrolls Left */}
        <div className="marquee-container mb-8">
          <div className="marquee-content gap-8 pr-8">
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-20 px-8 bg-gray-50 border border-gray-100 rounded-2xl grayscale hover:grayscale-0 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-soft-bg)] transition-all duration-300 cursor-pointer group"
              >
                <span className="text-xl font-bold text-gray-400 group-hover:text-[var(--color-primary)] transition-colors tracking-tight">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolls Right */}
        <div className="marquee-container">
          <div className="marquee-content reverse gap-8 pr-8">
            {[...logos.reverse(), ...logos].map((logo, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-20 px-8 bg-gray-50 border border-gray-100 rounded-2xl grayscale hover:grayscale-0 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-soft-bg)] transition-all duration-300 cursor-pointer group"
              >
                <span className="text-xl font-bold text-gray-400 group-hover:text-[var(--color-primary)] transition-colors tracking-tight">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
