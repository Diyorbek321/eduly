import { Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const tTestimonials = t('testimonials');

  const testimonials = tTestimonials.items as { name: string, role: string, quote: string, initials: string }[];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="text-[var(--color-primary)] text-[11px] font-bold uppercase tracking-[2px] mb-4">{tTestimonials.tag}</div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-heading)] mb-6 tracking-tight">
          {tTestimonials.title}
        </h2>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-container py-4">
          <div className="marquee-content gap-6 pr-6" style={{ animationDuration: '40s' }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl p-8 border border-[var(--color-border-light)] shadow-[0_4px_20px_-4px_rgba(27,63,228,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(27,63,228,0.15)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <p className="text-[var(--color-body)] leading-relaxed mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-soft-bg)] flex items-center justify-center text-[var(--color-primary)] font-bold text-lg border border-[var(--color-border-light)]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-heading)]">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--color-muted)]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
