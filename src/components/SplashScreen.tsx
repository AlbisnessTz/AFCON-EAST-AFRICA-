import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Trophy, Shield, ArrowRight, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onDismiss: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onDismiss }) => {
  const [countdown, setCountdown] = useState({ days: 342, hours: 14, mins: 28, secs: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, secs: 59, mins: prev.mins > 0 ? prev.mins - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-gradient-to-b from-emerald-950 via-green-900 to-black text-white p-6 overflow-hidden select-none"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Branding */}
      <div className="w-full flex justify-between items-center text-xs font-semibold tracking-wider text-emerald-300/80 pt-4">
        <span className="flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-amber-400" /> AFCON OFFICIAL COMPANION
        </span>
        <span className="bg-emerald-800/60 backdrop-blur-md px-2.5 py-1 rounded-full text-emerald-200 border border-emerald-700/50">
          v1.0.0 M1
        </span>
      </div>

      {/* Hero Visual Logo & Title */}
      <div className="flex flex-col items-center text-center my-auto space-y-6 max-w-sm">
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="relative"
        >
          <div className="w-28 h-28 rounded-3xl bg-gradient-to-tr from-amber-500 via-emerald-600 to-green-400 p-1 shadow-2xl shadow-emerald-500/30 flex items-center justify-center">
            <div className="w-full h-full bg-emerald-950 rounded-[22px] flex items-center justify-center relative overflow-hidden">
              <Trophy className="w-14 h-14 text-amber-400 drop-shadow-[0_4px_10px_rgba(245,158,11,0.5)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -bottom-2 -right-2 bg-amber-400 text-black p-2 rounded-full shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-amber-300 via-emerald-200 to-white bg-clip-text text-transparent">
            KickOff Africa
          </h1>
          <p className="text-sm text-emerald-200/80 font-medium">
            The Ultimate Football & AFCON Visitor Guide
          </p>
        </div>

        {/* Live Countdown Badge */}
        <div className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-700/50 rounded-2xl p-4 space-y-2">
          <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
            Countdown to AFCON Kick-Off
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-emerald-950/80 p-2 rounded-xl border border-emerald-800/50">
              <span className="text-xl font-black text-white">{countdown.days}</span>
              <span className="block text-[10px] text-emerald-300/70 uppercase">Days</span>
            </div>
            <div className="bg-emerald-950/80 p-2 rounded-xl border border-emerald-800/50">
              <span className="text-xl font-black text-white">{countdown.hours}</span>
              <span className="block text-[10px] text-emerald-300/70 uppercase">Hours</span>
            </div>
            <div className="bg-emerald-950/80 p-2 rounded-xl border border-emerald-800/50">
              <span className="text-xl font-black text-white">{countdown.mins}</span>
              <span className="block text-[10px] text-emerald-300/70 uppercase">Mins</span>
            </div>
            <div className="bg-emerald-950/80 p-2 rounded-xl border border-emerald-800/50">
              <span className="text-xl font-black text-amber-400">{countdown.secs}</span>
              <span className="block text-[10px] text-emerald-300/70 uppercase">Secs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action & Developer Tag */}
      <div className="w-full space-y-4 pb-2 max-w-sm">
        <button
          onClick={onDismiss}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Enter Application <ArrowRight className="w-4 h-4" />
        </button>

        <div className="text-center text-[11px] text-emerald-300/80 font-medium">
          KickOff Africa • Official Host Nation Companion
        </div>
      </div>
    </motion.div>
  );
};
