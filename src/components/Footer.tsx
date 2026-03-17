import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const tFooter = t('footer');
  const tNav = t('nav');

  return (
    <footer className="bg-[var(--color-footer-bg)] text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <div className="text-2xl font-bold font-heading tracking-tight">
                <span className="text-white">Edu</span>
                <span className="text-[var(--color-accent)]">ly</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              {tFooter.desc}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{tFooter.product}</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">{tNav.features}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">{tNav.pricing}</a></li>
              <li><a href="#access" className="text-gray-400 hover:text-white transition-colors text-sm">{tNav.access}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.mobileApp}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.integrations}</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{tFooter.company}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.aboutUs}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.blog}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.careers}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.press}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.partners}</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{tFooter.support}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.helpCenter}</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white transition-colors text-sm">{tNav.support}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.apiDocs}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.privacy}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{tFooter.links.terms}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Eduly. {tFooter.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
