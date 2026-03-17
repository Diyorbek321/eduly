import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Support() {
  const { t } = useLanguage();
  const tSupport = t('support');

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
                <p className="text-[var(--color-body)]">+1 (555) 123-4567</p>
                <p className="text-[var(--color-body)]">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-icon-bg)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-heading)] mb-1">{tSupport.email}</h4>
                <p className="text-[var(--color-body)]">support@eduly.com</p>
                <p className="text-[var(--color-body)]">sales@eduly.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-icon-bg)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-heading)] mb-1">{tSupport.address}</h4>
                <p className="text-[var(--color-body)]">123 Education Street</p>
                <p className="text-[var(--color-body)]">Tech District, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border-light)] shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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
                className="w-full bg-[var(--color-primary)] hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-md shadow-blue-500/20"
              >
                {tSupport.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
