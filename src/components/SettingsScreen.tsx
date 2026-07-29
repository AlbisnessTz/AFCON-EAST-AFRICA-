import React, { useState } from 'react';
import { AppSettings, TabType } from '../types';
import { 
  Settings, 
  Moon, 
  Sun, 
  Bell, 
  Globe, 
  Database, 
  ShieldCheck, 
  MessageSquare, 
  Info, 
  X,
  Send,
  CheckCircle2
} from 'lucide-react';

interface SettingsScreenProps {
  settings: AppSettings;
  onUpdateSettings: (updated: Partial<AppSettings>) => void;
  onSelectTab: (tab: TabType) => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  settings,
  onUpdateSettings,
  onSelectTab
}) => {
  const [activeModal, setActiveModal] = useState<'about' | 'privacy' | 'feedback' | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackSent(false);
      setActiveModal(null);
      setFeedbackText('');
    }, 2000);
  };

  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      <div>
        <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Settings className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> System Settings & Preferences
        </h2>
        <p className="text-xs text-slate-500 dark:text-emerald-300/80">
          Configure notifications, dark mode, data saver & privacy options
        </p>
      </div>

      {/* Main Settings Group */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-4 shadow-sm space-y-4">
        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
              {settings.darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-bold text-xs text-slate-900 dark:text-white">Dark Mode Theme</h3>
              <p className="text-[11px] text-slate-500 dark:text-emerald-300/80">
                Eye-friendly dark palette for night viewing
              </p>
            </div>
          </div>
          <button
            onClick={() => onUpdateSettings({ darkMode: !settings.darkMode })}
            className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
              settings.darkMode ? 'bg-amber-400' : 'bg-slate-300 dark:bg-slate-700'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                settings.darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Notifications Toggles */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Push Notifications
          </h4>

          {/* Match Reminders */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-700 dark:text-emerald-100">
              <Bell className="w-4 h-4 text-emerald-600" /> Match Kick-Off Reminders
            </div>
            <input
              type="checkbox"
              checked={settings.pushMatchReminders}
              onChange={(e) => onUpdateSettings({ pushMatchReminders: e.target.checked })}
              className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
            />
          </div>

          {/* Goal Alerts */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-700 dark:text-emerald-100">
              <Bell className="w-4 h-4 text-amber-500" /> Instant Goal & VAR Alerts
            </div>
            <input
              type="checkbox"
              checked={settings.pushGoalAlerts}
              onChange={(e) => onUpdateSettings({ pushGoalAlerts: e.target.checked })}
              className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
            />
          </div>

          {/* Breaking News */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-700 dark:text-emerald-100">
              <Bell className="w-4 h-4 text-blue-500" /> Breaking News & Lineups
            </div>
            <input
              type="checkbox"
              checked={settings.pushBreakingNews}
              onChange={(e) => onUpdateSettings({ pushBreakingNews: e.target.checked })}
              className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
            />
          </div>
        </div>

        {/* Data Saver Mode */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between py-1">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xs text-slate-900 dark:text-white">Data Saver Mode</h3>
              <p className="text-[11px] text-slate-500 dark:text-emerald-300/80">
                Compress images & conserve mobile data
              </p>
            </div>
          </div>
          <button
            onClick={() => onUpdateSettings({ dataSaver: !settings.dataSaver })}
            className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
              settings.dataSaver ? 'bg-amber-400' : 'bg-slate-300 dark:bg-slate-700'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                settings.dataSaver ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Information & Links Group */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-4 shadow-sm space-y-2">
        <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
          Support & Information
        </h4>

        <button
          onClick={() => setActiveModal('about')}
          className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs font-semibold text-slate-800 dark:text-emerald-100 transition-colors"
        >
          <span className="flex items-center gap-2"><Info className="w-4 h-4 text-emerald-600" /> About KickOff Africa</span>
          <span className="text-slate-400">→</span>
        </button>

        <button
          onClick={() => setActiveModal('feedback')}
          className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs font-semibold text-slate-800 dark:text-emerald-100 transition-colors"
        >
          <span className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-amber-500" /> Send App Feedback</span>
          <span className="text-slate-400">→</span>
        </button>

        <button
          onClick={() => setActiveModal('privacy')}
          className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs font-semibold text-slate-800 dark:text-emerald-100 transition-colors"
        >
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-blue-500" /> Privacy Policy & Terms</span>
          <span className="text-slate-400">→</span>
        </button>
      </div>

      {/* Modals */}
      {activeModal === 'about' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-5 w-full max-w-sm border border-slate-200 dark:border-emerald-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-600" /> About KickOff Africa
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-emerald-200/90 leading-relaxed">
              KickOff Africa is a premier official companion application designed for football fans, host nation visitors, and media covering AFCON 2027 in Tanzania 🇹🇿, Kenya 🇰🇪, and Uganda 🇺🇬.
            </p>
            <div className="text-[11px] p-3 bg-emerald-950 text-emerald-100 rounded-xl space-y-1">
              <div>App Release: <span className="font-bold text-amber-400">v1.0.0 Official Production</span></div>
              <div>Coverage: <span className="font-bold text-amber-400">Tanzania • Kenya • Uganda</span></div>
              <div>Platform: <span className="font-bold text-emerald-300">Android PWA & Web Client</span></div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {activeModal === 'feedback' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-5 w-full max-w-sm border border-slate-200 dark:border-emerald-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-500" /> Send Feedback
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleFeedbackSubmit} className="space-y-3">
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Share your thoughts, bug reports, or feature suggestions..."
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 h-28 focus:outline-none focus:border-amber-400"
                required
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Submit Feedback
              </button>
              {feedbackSent && (
                <div className="p-2 bg-emerald-100 text-emerald-900 text-xs text-center font-bold rounded-lg flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Thank you! Feedback sent.
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-5 w-full max-w-sm border border-slate-200 dark:border-emerald-800 shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500" /> Privacy Policy
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-emerald-200/90 leading-relaxed">
              KickOff Africa respects user privacy. No personal data is transmitted to unauthorized third parties. All profile preferences are safely persisted on your client device.
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
            >
              Understand & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
