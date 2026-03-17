import { HeadphonesIcon, MessageCircle, ShieldCheck, MonitorSmartphone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();
  const tBenefits = t('benefits');

  const benefits = [
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-white" />,
      title: tBenefits.items[0].title,
      desc: tBenefits.items[0].desc
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: tBenefits.items[1].title,
      desc: tBenefits.items[1].desc
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: tBenefits.items[2].title,
      desc: tBenefits.items[2].desc
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
      title: tBenefits.items[3].title,
      desc: tBenefits.items[3].desc
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--color-primary)] text-[11px] font-bold uppercase tracking-[2px] mb-4">{tBenefits.tag}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-heading)] mb-6 tracking-tight">
            {tBenefits.title}
          </h2>
          <p className="text-lg text-[var(--color-body)] leading-relaxed">
            {tBenefits.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-[var(--color-border-light)] shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all duration-300 group hover:-translate-y-1 flex gap-6 items-start"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-heading)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">{benefit.title}</h3>
                <p className="text-[var(--color-body)] leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
