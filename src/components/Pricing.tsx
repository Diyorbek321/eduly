import { CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();
  const tPricing = t('pricing');

  const plans = [
    {
      name: tPricing.plans[0].name,
      price: "$100",
      period: tPricing.period,
      who: tPricing.plans[0].who,
      color: "blue",
      features: [
        ...tPricing.plans[0].features.map((f: string) => ({ name: f, included: true })),
        ...tPricing.notIncluded[0].map((f: string) => ({ name: f, included: false }))
      ],
      cta: tPricing.plans[0].cta,
      ctaStyle: "outline"
    },
    {
      name: tPricing.plans[1].name,
      price: "$150",
      period: tPricing.period,
      who: tPricing.plans[1].who,
      color: "primary",
      featured: true,
      badge: tPricing.plans[1].badge,
      features: [
        ...tPricing.plans[1].features.map((f: string) => ({ name: f, included: true })),
        ...tPricing.notIncluded[1].map((f: string) => ({ name: f, included: false }))
      ],
      cta: tPricing.plans[1].cta,
      ctaStyle: "filled"
    },
    {
      name: tPricing.plans[2].name,
      price: "$179",
      period: tPricing.period,
      who: tPricing.plans[2].who,
      color: "yellow",
      features: [
        ...tPricing.plans[2].features.map((f: string) => ({ name: f, included: true }))
      ],
      cta: tPricing.plans[2].cta,
      ctaStyle: "yellow"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--color-primary)] text-[11px] font-bold uppercase tracking-[2px] mb-4">{tPricing.tag}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-heading)] mb-6 tracking-tight">
            {tPricing.title}
          </h2>
          <p className="text-lg text-[var(--color-body)] leading-relaxed">
            {tPricing.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                plan.featured 
                  ? 'border-2 border-[var(--color-primary)] shadow-xl shadow-blue-500/10 z-10 scale-105' 
                  : `border ${plan.color === 'yellow' ? 'border-[var(--color-accent)]' : 'border-[var(--color-primary)]/30'} shadow-sm hover:shadow-md`
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-heading)] text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-sm">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--color-heading)] mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-[var(--color-heading)] tracking-tight">{plan.price}</span>
                  <span className="text-[var(--color-muted)] font-medium">{plan.period}</span>
                </div>
                <div className="text-sm font-medium text-[var(--color-primary)] bg-[var(--color-soft-bg)] py-2 px-3 rounded-lg inline-block">
                  For: {plan.who}
                </div>
              </div>
              
              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5 fill-blue-50" />
                    ) : (
                      <XCircle className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-[var(--color-body)] font-medium' : 'text-[var(--color-muted)] line-through'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
              
              <button 
                className={`w-full py-4 rounded-xl font-semibold text-center transition-all ${
                  plan.ctaStyle === 'filled' 
                    ? 'bg-[var(--color-primary)] hover:bg-blue-700 text-white shadow-md shadow-blue-500/20' 
                    : plan.ctaStyle === 'yellow'
                    ? 'bg-[var(--color-accent)] hover:bg-yellow-500 text-[var(--color-heading)] shadow-sm'
                    : 'bg-white hover:bg-gray-50 text-[var(--color-primary)] border-2 border-[var(--color-primary)]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
