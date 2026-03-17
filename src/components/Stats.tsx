import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const tStats = t('stats');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 2000, label: tStats.centers, suffix: "+" },
    { value: 5000, label: tStats.branches, suffix: "+" },
    { value: 50000, label: tStats.groups, suffix: "+" },
    { value: 500000, label: tStats.students, suffix: "+" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-primary)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight flex items-baseline">
                {isVisible ? <Counter end={stat.value} duration={2000} /> : "0"}
                <span className="text-[var(--color-accent)] ml-1">{stat.suffix}</span>
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-bold uppercase tracking-[2px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ end, duration }: { end: number, duration: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}
