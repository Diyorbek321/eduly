import { useState } from 'react';
import { Layers, Target, BarChart3, Wallet, Bell, Smartphone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useLanguage();
  const tFeatures = t('features');

  const features = [
    {
      id: "systematization",
      icon: <Layers className="w-6 h-6" />,
      title: tFeatures.tabs[0].title,
      desc: tFeatures.tabs[0].desc,
      mockup: (
        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-border-light)] p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[var(--color-heading)] text-lg">Groups Management</h3>
            <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm font-medium">+ New Group</button>
          </div>
          <div className="flex-1 space-y-4">
            {['IELTS Intensive', 'General English', 'Math Olympiad'].map((group, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary)]/30 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-soft-bg)] flex items-center justify-center text-[var(--color-primary)] font-bold">
                    {group.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-heading)] group-hover:text-[var(--color-primary)] transition-colors">{group}</h4>
                    <p className="text-sm text-[var(--color-muted)]">Mon, Wed, Fri • 15:00</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-[var(--color-heading)]">12/15</div>
                  <div className="text-xs text-[var(--color-muted)]">Students</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "crm",
      icon: <Target className="w-6 h-6" />,
      title: tFeatures.tabs[1].title,
      desc: tFeatures.tabs[1].desc,
      mockup: (
        <div className="bg-gray-50 rounded-2xl shadow-xl border border-[var(--color-border-light)] p-6 h-full flex flex-col overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[var(--color-heading)] text-lg">Sales Pipeline</h3>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded bg-white border border-gray-200"></div>
              <div className="w-8 h-8 rounded bg-white border border-gray-200"></div>
            </div>
          </div>
          <div className="flex gap-4 flex-1 overflow-x-auto hide-scrollbar pb-4">
            {['New Leads', 'Contacted', 'Trial Lesson'].map((stage, i) => (
              <div key={i} className="min-w-[240px] bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-sm text-[var(--color-heading)]">{stage}</h4>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{3-i}</span>
                </div>
                {[1, 2].map(card => (
                  <div key={card} className="bg-white border border-gray-100 shadow-sm rounded-lg p-3 cursor-grab hover:border-[var(--color-primary)]/50 transition-colors">
                    <div className="font-medium text-sm text-[var(--color-heading)] mb-1">Student Name</div>
                    <div className="text-xs text-[var(--color-muted)] mb-3">+1 234 567 890</div>
                    <div className="flex justify-between items-center">
                      <span className={`text-[10px] px-2 py-1 rounded-full ${i === 0 ? 'bg-blue-100 text-blue-700' : i === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                        {i === 0 ? 'Hot' : i === 1 ? 'Warm' : 'Trial'}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "assessment",
      icon: <BarChart3 className="w-6 h-6" />,
      title: tFeatures.tabs[2].title,
      desc: tFeatures.tabs[2].desc,
      mockup: (
        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-border-light)] p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[var(--color-heading)] text-lg">Leaderboard</h3>
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none">
              <option>This Month</option>
            </select>
          </div>
          <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 text-[var(--color-muted)]">
                <tr>
                  <th className="px-4 py-3 font-medium">Rank</th>
                  <th className="px-4 py-3 font-medium">Student</th>
                  <th className="px-4 py-3 font-medium text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { rank: 1, name: 'Emma Watson', score: 98, color: 'text-yellow-500' },
                  { rank: 2, name: 'Liam Smith', score: 95, color: 'text-gray-400' },
                  { rank: 3, name: 'Olivia Davis', score: 92, color: 'text-amber-600' },
                  { rank: 4, name: 'Noah Wilson', score: 88, color: 'text-[var(--color-muted)]' },
                ].map((student) => (
                  <tr key={student.rank} className="hover:bg-white transition-colors">
                    <td className={`px-4 py-3 font-bold ${student.color}`}>#{student.rank}</td>
                    <td className="px-4 py-3 font-medium text-[var(--color-heading)]">{student.name}</td>
                    <td className="px-4 py-3 text-right font-semibold text-[var(--color-primary)]">{student.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "finance",
      icon: <Wallet className="w-6 h-6" />,
      title: tFeatures.tabs[3].title,
      desc: tFeatures.tabs[3].desc,
      mockup: (
        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-border-light)] p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[var(--color-heading)] text-lg">Financial Overview</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm font-medium bg-[var(--color-soft-bg)] text-[var(--color-primary)] rounded-lg">Income</button>
              <button className="px-3 py-1.5 text-sm font-medium text-[var(--color-muted)] hover:bg-gray-50 rounded-lg">Expense</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-green-100 bg-green-50">
              <div className="text-green-600 text-xs font-semibold uppercase tracking-wider mb-1">Total Income</div>
              <div className="text-2xl font-bold text-green-700">$24,500</div>
            </div>
            <div className="p-4 rounded-xl border border-red-100 bg-red-50">
              <div className="text-red-600 text-xs font-semibold uppercase tracking-wider mb-1">Total Expense</div>
              <div className="text-2xl font-bold text-red-700">$8,200</div>
            </div>
          </div>
          <div className="flex-1 border border-gray-100 rounded-xl p-4 flex flex-col justify-end gap-2 relative">
            <div className="absolute top-4 left-4 text-sm font-medium text-[var(--color-heading)]">Net Profit Trend</div>
            <div className="flex items-end justify-between h-32 mt-8 gap-2">
              {[40, 55, 45, 70, 60, 85, 95].map((h, i) => (
                <div key={i} className="w-full bg-[var(--color-primary)]/20 rounded-t-md hover:bg-[var(--color-primary)] transition-colors cursor-pointer relative group" style={{ height: `${h}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--color-heading)] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ${h * 100}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "reminders",
      icon: <Bell className="w-6 h-6" />,
      title: tFeatures.tabs[4].title,
      desc: tFeatures.tabs[4].desc,
      mockup: (
        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-border-light)] p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[var(--color-heading)] text-lg">My Tasks</h3>
            <button className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">+</button>
          </div>
          <div className="space-y-6 flex-1 overflow-y-auto hide-scrollbar pr-2">
            <div>
              <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">Overdue</h4>
              <div className="p-3 rounded-lg border border-red-100 bg-red-50 flex gap-3 items-start">
                <div className="w-5 h-5 rounded border-2 border-red-300 mt-0.5 flex-shrink-0"></div>
                <div>
                  <div className="font-medium text-red-900 text-sm">Call John regarding payment</div>
                  <div className="text-xs text-red-500 mt-1">Yesterday, 14:00</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-3">Today</h4>
              <div className="space-y-2">
                {[
                  { title: 'Prepare materials for IELTS group', time: '10:00' },
                  { title: 'Meeting with new teachers', time: '15:30' }
                ].map((task, i) => (
                  <div key={i} className="p-3 rounded-lg border border-gray-100 hover:border-[var(--color-primary)]/30 transition-colors flex gap-3 items-start group cursor-pointer">
                    <div className="w-5 h-5 rounded border-2 border-gray-300 mt-0.5 flex-shrink-0 group-hover:border-[var(--color-primary)] transition-colors"></div>
                    <div>
                      <div className="font-medium text-[var(--color-heading)] text-sm group-hover:text-[var(--color-primary)] transition-colors">{task.title}</div>
                      <div className="text-xs text-[var(--color-muted)] mt-1">Today, {task.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-6 h-6" />,
      title: tFeatures.tabs[5].title,
      desc: tFeatures.tabs[5].desc,
      mockup: (
        <div className="bg-[var(--color-soft-bg)] rounded-2xl shadow-xl border border-[var(--color-border-light)] p-6 h-full flex items-center justify-center relative overflow-hidden">
          {/* Phone 1 (Back) */}
          <div className="absolute left-8 top-8 w-48 h-96 bg-white rounded-[2rem] shadow-2xl border-4 border-gray-800 p-2 transform -rotate-6 opacity-80">
            <div className="w-full h-full rounded-[1.5rem] border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-12 bg-[var(--color-primary)] flex items-center justify-center text-white text-xs font-bold">Teacher App</div>
              <div className="p-3 space-y-3 flex-1 bg-gray-50">
                <div className="h-16 bg-white rounded-xl shadow-sm border border-gray-100 p-2">
                  <div className="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-24 bg-gray-300 rounded"></div>
                </div>
                <div className="h-16 bg-white rounded-xl shadow-sm border border-gray-100 p-2">
                  <div className="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-24 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phone 2 (Front) */}
          <div className="absolute right-8 top-12 w-48 h-96 bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border-4 border-gray-900 p-2 transform rotate-3 z-10">
            <div className="w-full h-full rounded-[1.5rem] border border-gray-100 overflow-hidden flex flex-col relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl z-20"></div>
              
              <div className="h-32 bg-[var(--color-primary)] p-4 pt-8 text-white">
                <div className="text-[10px] opacity-80 mb-1">Welcome back,</div>
                <div className="font-bold text-sm">Alex Student</div>
                <div className="mt-4 bg-white/20 rounded-lg p-2 backdrop-blur-sm border border-white/10">
                  <div className="text-[10px] opacity-80">Next Class</div>
                  <div className="font-bold text-xs mt-0.5">Mathematics • 14:00</div>
                </div>
              </div>
              <div className="p-3 space-y-3 flex-1 bg-gray-50">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100"></div>
                    <div className="text-[10px] font-medium">Schedule</div>
                  </div>
                  <div className="aspect-square bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-green-100"></div>
                    <div className="text-[10px] font-medium">Grades</div>
                  </div>
                </div>
                <div className="h-20 bg-white rounded-xl shadow-sm border border-gray-100 p-3">
                  <div className="text-[10px] font-bold text-gray-400 uppercase mb-2">Recent Homework</div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-yellow-100"></div>
                    <div>
                      <div className="text-xs font-medium">Algebra Basics</div>
                      <div className="text-[9px] text-gray-400">Due tomorrow</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--color-primary)] text-[11px] font-bold uppercase tracking-[2px] mb-4">{tFeatures.tag}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-heading)] mb-6 tracking-tight">
            {tFeatures.title}
          </h2>
          <p className="text-lg text-[var(--color-body)] leading-relaxed">
            {tFeatures.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side - Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border-l-4 ${
                  activeTab === index
                    ? 'bg-[var(--color-soft-bg)] border-[var(--color-primary)] shadow-sm'
                    : 'bg-transparent border-transparent hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${
                    activeTab === index 
                      ? 'bg-[var(--color-primary)] text-white shadow-md shadow-blue-500/20' 
                      : 'bg-[var(--color-icon-bg)] text-[var(--color-primary)]'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 transition-colors ${
                      activeTab === index ? 'text-[var(--color-heading)]' : 'text-gray-700'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors ${
                      activeTab === index ? 'text-[var(--color-body)]' : 'text-[var(--color-muted)]'
                    }`}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Mockups */}
          <div className="lg:col-span-7 h-[500px] lg:h-[600px] lg:sticky lg:top-32">
            <div className="w-full h-full relative">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-all duration-500 transform ${
                    activeTab === index
                      ? 'opacity-100 translate-y-0 scale-100 z-10'
                      : 'opacity-0 translate-y-8 scale-95 z-0 pointer-events-none'
                  }`}
                >
                  {feature.mockup}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
