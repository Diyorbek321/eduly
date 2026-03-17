import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const tNav = t('nav');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-[var(--color-border-light)] shadow-sm py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <div className="text-2xl font-bold font-heading tracking-tight">
              <span className="text-[var(--color-heading)]">Edu</span>
              <span className="text-[var(--color-accent)]">ly</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[var(--color-body)] hover:text-[var(--color-primary)] font-medium transition-colors">{tNav.features}</a>
            <a href="#pricing" className="text-[var(--color-body)] hover:text-[var(--color-primary)] font-medium transition-colors">{tNav.pricing}</a>
            <a href="#access" className="text-[var(--color-body)] hover:text-[var(--color-primary)] font-medium transition-colors">{tNav.access}</a>
            <a href="#support" className="text-[var(--color-body)] hover:text-[var(--color-primary)] font-medium transition-colors">{tNav.support}</a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 text-[var(--color-heading)] font-medium hover:text-[var(--color-primary)] transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{language}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-white border border-[var(--color-border-light)] shadow-lg rounded-lg overflow-hidden py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === lang.code ? 'font-bold text-[var(--color-primary)]' : 'text-[var(--color-body)]'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 text-[var(--color-heading)] font-medium">
              <Phone className="w-4 h-4 text-[var(--color-primary)]" />
              <span>+1 (555) 123-4567</span>
            </div>
            <button className="bg-[var(--color-primary)] hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
              {tNav.bookDemo}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[var(--color-heading)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[var(--color-border-light)] shadow-lg py-4 px-4 flex flex-col gap-4">
          <a href="#features" className="text-[var(--color-body)] font-medium py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>{tNav.features}</a>
          <a href="#pricing" className="text-[var(--color-body)] font-medium py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>{tNav.pricing}</a>
          <a href="#access" className="text-[var(--color-body)] font-medium py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>{tNav.access}</a>
          <a href="#support" className="text-[var(--color-body)] font-medium py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>{tNav.support}</a>
          
          <div className="flex gap-2 py-2 border-b border-gray-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as any);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded-md text-sm ${language === lang.code ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100 text-[var(--color-body)]'}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2 text-[var(--color-heading)] font-medium py-2">
              <Phone className="w-4 h-4 text-[var(--color-primary)]" />
              <span>+1 (555) 123-4567</span>
            </div>
            <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-medium w-full text-center">
              {tNav.bookDemo}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
