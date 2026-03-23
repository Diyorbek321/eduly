import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Support() {
  const { t } = useLanguage();
  const tSupport = t('support');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="support" className="py-24 bg-white border-y border-[var(--color-border-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--color-primary)] text-[11px] font-bold uppercase tracking-[2px] mb-4">{tSupport.tag}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-heading)] mb-6 tracking-tight">
            {tSupport.title}
          </h2>
          <p className="text-lg text-[var(--color-body)] leading-relaxed">
            {tSupport.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[var(--color-heading)] mb-6">{tSupport.contact}</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-icon-bg)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-heading)] mb-1">{tSupport.phone}</h4>
                <p className="text-[var(--color-body)]">+998 93 191 33 08</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-icon-bg)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-heading)] mb-1">{tSupport.email}</h4>
                <p className="text-[var(--color-body)]">dturgunboyev635@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-icon-bg)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-heading)] mb-1">{tSupport.address}</h4>
                <p className="text-[var(--color-body)]">Tashkent, Angren</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border-light)] shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-[var(--color-heading)] mb-2">{tSupport.form.name}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-heading)] mb-2">{tSupport.form.email}</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-heading)] mb-2">{tSupport.form.message}</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors resize-none"
                  placeholder="..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full bg-[var(--color-primary)] hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {tSupport.form.sending}
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    {tSupport.form.success}
                  </>
                ) : (
                  tSupport.form.submit
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
