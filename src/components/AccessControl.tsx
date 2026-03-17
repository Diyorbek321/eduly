import { Check, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function AccessControl() {
  const { t } = useLanguage();
  const tAccess = t('access');

  const roles = [
    { name: tAccess.roles[0], icon: "👤", basic: true, standard: true, advanced: true },
    { name: tAccess.roles[1], icon: "🗂", basic: false, standard: true, advanced: true },
    { name: tAccess.roles[2], icon: "👨‍🏫", basic: false, standard: true, advanced: true },
    { name: tAccess.roles[3], icon: "📱", basic: false, standard: false, advanced: true }
  ];

  return (
    <section id="access" className="py-24 bg-[var(--color-soft-bg)] border-y border-[var(--color-border-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--color-primary)] text-[11px] font-bold uppercase tracking-[2px] mb-4">{tAccess.tag}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-6 tracking-tight">
            {tAccess.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-[var(--color-border-light)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--color-soft-bg)] border-b border-[var(--color-border-light)]">
                <th className="py-5 px-6 font-bold text-[var(--color-heading)] uppercase tracking-wider text-sm w-1/3">{tAccess.role}</th>
                <th className="py-5 px-6 font-bold text-[var(--color-heading)] uppercase tracking-wider text-sm text-center">{tAccess.basic}</th>
                <th className="py-5 px-6 font-bold text-[var(--color-heading)] uppercase tracking-wider text-sm text-center">{tAccess.standard}</th>
                <th className="py-5 px-6 font-bold text-[var(--color-heading)] uppercase tracking-wider text-sm text-center">{tAccess.advanced}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-light)]">
              {roles.map((role, index) => (
                <tr key={index} className="hover:bg-[#F0F4FF] transition-colors group">
                  <td className="py-5 px-6 flex items-center gap-3">
                    <span className="text-xl">{role.icon}</span>
                    <span className="font-semibold text-[var(--color-heading)]">{role.name}</span>
                  </td>
                  <td className="py-5 px-6 text-center">
                    {role.basic ? (
                      <Check className="w-6 h-6 text-[var(--color-primary)] mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-5 px-6 text-center">
                    {role.standard ? (
                      <Check className="w-6 h-6 text-[var(--color-primary)] mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-5 px-6 text-center">
                    {role.advanced ? (
                      <Check className="w-6 h-6 text-[var(--color-primary)] mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
