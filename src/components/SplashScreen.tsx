import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe2, Trophy, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onDismiss: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onDismiss }) => {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((value) => Math.max(0, value - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden bg-[#030406] p-6 text-white select-none"
    >
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sky-400/[0.13] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/[0.08] blur-3xl pointer-events-none" />

      <div className="z-10 flex w-full max-w-sm items-center justify-between pt-4 text-xs font-semibold tracking-wider text-slate-400">
        <span className="flex items-center gap-2">
          <Globe2 className="h-4 w-4 text-sky-300" /> GLOBAL SPORTS PLATFORM
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-slate-300">
          v0.2.0
        </span>
      </div>

      <div className="z-10 my-auto flex max-w-sm flex-col items-center space-y-7 text-center">
        <motion.div
          initial={{ scale: 0.8, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="relative"
        >
          <div className="flex h-28 w-28 items-center justify-center rounded-[30px] border border-sky-300/20 bg-gradient-to-br from-sky-300 via-cyan-500 to-slate-200 p-1 shadow-[0_0_65px_rgba(56,189,248,0.15)]">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[26px] bg-[#030406]">
              <Trophy className="h-14 w-14 text-amber-400" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -bottom-2 -right-2 rounded-full bg-amber-400 p-2 text-black shadow-lg"
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>
        </motion.div>

        <div className="space-y-2">
          <h1 className="bg-gradient-to-r from-white via-slate-100 to-sky-300 bg-clip-text text-4xl font-black tracking-tight text-transparent">
            SportsLab Africa
          </h1>
          <p className="text-sm font-medium text-slate-400">
            Your Home for Global Sports
          </p>
        </div>

        <div className="w-full rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-sky-300">
            Building the future of global sports
          </div>
          <p className="text-xs leading-5 text-slate-400">
            Football first, followed by global sports scores, teams, news, tournaments, travel and fan experiences.
          </p>
        </div>
      </div>

      <div className="z-10 w-full max-w-sm space-y-4 pb-2">
        <button
          onClick={onDismiss}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-300 to-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(56,189,248,0.2)] transition-all hover:from-sky-200 hover:to-cyan-300 active:scale-[0.98]"
        >
          Enter SportsLab Africa <ArrowRight className="h-4 w-4" />
        </button>
        <div className="text-center text-[11px] font-medium text-slate-600">
          {seconds > 0 ? `Launching in ${seconds}…` : 'Sports • Data • Fans • Africa'}
        </div>
      </div>
    </motion.div>
  );
};
