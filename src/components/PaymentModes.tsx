import { CalendarDays, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function PaymentModes() {
  const { t } = useLanguage();
  const tPayment = t('payment');

  const modes = [
    {
      icon: <CalendarDays className="w-6 h-6 text-[var(--color-heading)]" />,
      title: tPayment.modes[0].title,
      desc: tPayment.modes[0].desc,
      advantages: [
        "Predictable revenue stream",
        "Easy for parents to budget",
        "Automated monthly invoices",
        "Clear financial forecasting"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[var(--color-heading)]" />,
      title: tPayment.modes[1].title,
      desc: tPayment.modes[1].desc,
      advantages: [
        "Fair pricing for students",
        "Automatic attendance tracking",
        "No disputes over missed classes",
        "Flexible scheduling support"
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[var(--color-heading)]" />,
      title: tPayment.modes[2].title,
      desc: tPayment.modes[2].desc,
      advantages: [
        "Upfront cash flow",
        "Higher commitment from students",
        "Simplified accounting",
        "Discount options available"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-soft-bg)] border-y border-[var(--color-border-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--color-primary)] text-[11px] font-bold uppercase tracking-[2px] mb-4">{tPayment.tag}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 tracking-tight">
            {tPayment.title}
          </h2>
          <p className="text-lg text-[var(--color-body)] leading-relaxed">
            {tPayment.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modes.map((mode, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-[var(--color-border-light)] shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {mode.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-heading)] mb-2">{mode.title}</h3>
              <p className="text-[var(--color-muted)] mb-8">{mode.desc}</p>
              
              <ul className="space-y-4">
                {mode.advantages.map((adv, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-body)] text-sm">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
