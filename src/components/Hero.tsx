import { ArrowRight, PlayCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const tHero = t('hero');

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-semibold text-sm mb-8 border border-[var(--color-primary)]/20">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
              {tHero.tag}
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-[1.1] tracking-tight text-[var(--color-heading)] mb-8">
              {tHero.title1}<span className="text-[var(--color-primary)]">{tHero.title2}</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[var(--color-body)] mb-10 leading-relaxed max-w-xl">
              {tHero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[var(--color-primary)] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group">
                {tHero.btn1}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-[var(--color-heading)] border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5 text-[var(--color-primary)]" />
                {tHero.btn2}
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-[var(--color-muted)]">
              <div className="flex -space-x-2">
                {['JD', 'AM', 'RK', 'SL'].map((initials, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white ${
                    i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-indigo-500' : i === 2 ? 'bg-purple-500' : 'bg-pink-500'
                  }`}>
                    {initials}
                  </div>
                ))}
              </div>
              <p>{tHero.join} <span className="font-semibold text-[var(--color-heading)]">2,000+</span> {tHero.centers}</p>
            </div>
          </div>

          {/* Right Content - Floating Cards Mockup */}
          <div className="relative h-[500px] lg:h-[600px] w-full mt-10 lg:mt-0 perspective-1000">
            
            {/* Card 1: Dashboard Overview (Back) */}
            <div className="absolute top-0 right-0 w-[85%] bg-white rounded-2xl shadow-2xl border border-[var(--color-border-light)] p-5 transform rotate-6 translate-x-4 translate-y-4 opacity-60 transition-transform hover:rotate-3 hover:translate-y-2 duration-500">
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-sm bg-[var(--color-primary)]"></div>
                  </div>
                  <div>
                    <div className="h-3 w-24 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="h-6 w-20 bg-green-100 rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 bg-gray-50 rounded-xl border border-gray-100 p-3">
                    <div className="h-2 w-12 bg-gray-200 rounded mb-2"></div>
                    <div className="h-5 w-16 bg-[var(--color-heading)] rounded opacity-80"></div>
                  </div>
                ))}
              </div>
              <div className="h-32 bg-gray-50 rounded-xl border border-gray-100 flex items-end p-4 gap-2">
                 {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                   <div key={i} className="flex-1 bg-blue-200 rounded-t-sm" style={{ height: `${h}%` }}></div>
                 ))}
              </div>
            </div>

            {/* Card 2: Student List (Middle) */}
            <div className="absolute top-12 right-8 w-[85%] bg-white rounded-2xl shadow-2xl border border-[var(--color-border-light)] p-5 transform rotate-3 translate-x-2 translate-y-2 opacity-80 transition-transform hover:rotate-1 hover:translate-y-0 duration-500 z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="h-4 w-32 bg-[var(--color-heading)] rounded opacity-80"></div>
                <div className="h-8 w-24 bg-[var(--color-primary)] rounded-lg opacity-90"></div>
              </div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                      <div>
                        <div className="h-3 w-24 bg-gray-800 rounded mb-1.5 opacity-70"></div>
                        <div className="h-2 w-32 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    <div className="h-6 w-16 bg-[var(--color-accent)]/20 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Analytics (Front) */}
            <div className="absolute top-24 right-16 w-[85%] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(27,63,228,0.25)] border border-[var(--color-border-light)] p-6 transform transition-transform hover:-translate-y-2 duration-500 z-20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-[var(--color-heading)] font-bold text-lg mb-1">Revenue Overview</h3>
                  <p className="text-[var(--color-muted)] text-xs">Monthly performance</p>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">+24.5%</div>
              </div>
              
              <div className="flex items-end gap-4 h-40 mb-6 border-b border-gray-100 pb-2">
                {[30, 45, 25, 60, 40, 85, 70].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="w-full bg-[var(--color-primary)] rounded-t-md transition-all duration-500 group-hover:bg-blue-500 relative" style={{ height: `${h}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--color-heading)] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        ${h}k
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">M{i+1}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[var(--color-soft-bg)] border border-[var(--color-border-light)]">
                  <div className="text-[var(--color-muted)] text-xs font-medium mb-1">Total Students</div>
                  <div className="text-[var(--color-heading)] font-bold text-xl">1,248</div>
                </div>
                <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-100">
                  <div className="text-yellow-700 text-xs font-medium mb-1">Active Groups</div>
                  <div className="text-[var(--color-heading)] font-bold text-xl">84</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
