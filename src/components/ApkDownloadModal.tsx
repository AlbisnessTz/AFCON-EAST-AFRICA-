import React, { useState } from 'react';
import { Download, X, CheckCircle2, Copy, Smartphone, ShieldCheck } from 'lucide-react';

interface ApkDownloadModalProps {
  onClose: () => void;
}

export const ApkDownloadModal: React.FC<ApkDownloadModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const gitCommitMessage = `git commit -m "SportsLab Africa PWA install setup"`;

  const copyGitMessage = () => {
    navigator.clipboard.writeText(gitCommitMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-5 w-full max-w-md border border-slate-200 dark:border-emerald-800 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-400 text-slate-950 font-black">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm">SportsLab Africa — Install App</h3>
              <span className="text-[10px] text-amber-500 font-bold">Progressive Web App</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* APK Card */}
        <div className="bg-gradient-to-r from-emerald-900 to-green-950 p-4 rounded-2xl text-white space-y-3 border border-emerald-700">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-amber-300">SportsLab-Africa-PWA</span>
            <span className="text-[10px] bg-emerald-800 px-2 py-0.5 rounded text-emerald-200">Web app</span>
          </div>

          <p className="text-xs text-emerald-200/90 leading-relaxed">
            Install SportsLab Africa from your browser. The PWA manifest and offline shell are being configured; this panel does not represent a published APK.
          </p>

          <div className="flex items-center gap-2 text-[10px] text-amber-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-amber-400" /> No signed APK has been published
          </div>
        </div>

        {/* Installation Steps */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-slate-800 dark:text-emerald-100 uppercase tracking-wider text-[11px]">
            Installation & Mobile Deployment Steps
          </h4>

          <ol className="space-y-2 text-slate-600 dark:text-emerald-200/90 list-decimal list-inside text-[11px] leading-relaxed">
            <li>
              <strong>PWA Add to Home Screen (Instant APK experience):</strong> Open this app in Chrome/Edge on your Android phone and tap <em>&quot;Add to Home Screen&quot;</em> or <em>&quot;Install App&quot;</em>.
            </li>
            <li>
              <strong>Install availability:</strong> Use your browser menu and choose “Install app” or “Add to Home Screen” when offered.
            </li>
            <li>
              <strong>Note:</strong> A native Android APK requires a separate Android build and signing process; this project does not currently publish one.
            </li>
          </ol>
        </div>

        {/* Recommended Git Commit Message */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-700 dark:text-emerald-200 block">
            Project note
          </label>
          <div className="flex items-center justify-between p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl font-mono text-[10px] text-slate-800 dark:text-emerald-300 border border-slate-200 dark:border-slate-700">
            <span className="truncate pr-2">{gitCommitMessage}</span>
            <button
              onClick={copyGitMessage}
              className="p-1 rounded bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shrink-0"
              title="Copy commit message"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
        >
          Close Install Panel
        </button>
      </div>
    </div>
  );
};
