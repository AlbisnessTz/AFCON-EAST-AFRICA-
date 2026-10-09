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
      className="fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden bg-[#06130f] p-6 text-white select-none"
    >
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      <div className="z-10 flex w-full max-w-sm items-center justify-between pt-4 text-xs font-semibold tracking-wider text-emerald-200/70">
        <span className="flex items-center gap-2">
          <Globe2 className="h-4 w-4 text-amber-400" /> GLOBAL SPORTS PLATFORM
        </span>
        <span className="rounded-full border border-emerald-800/70 bg-emerald-950/70 px-2.5 py-1 text-emerald-200">
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
          <div className="flex h-28 w-28 items-center justify-center rounded-[30px] border border-emerald-400/20 bg-gradient-to-tr from-emerald-700 via-emerald-500 to-amber-400 p-1 shadow-2xl shadow-emerald-500/20">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[26px] bg-[#06130f]">
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
          <h1 className="bg-gradient-to-r from-white via-emerald-200 to-amber-300 bg-clip-text text-4xl font-black tracking-tight text-transparent">
            SportsLab Africa
          </h1>
          <p className="text-sm font-medium text-emerald-200/80">
            Your Home for Global Sports
          </p>
        </div>

        <div className="w-full rounded-2xl border border-emerald-800/60 bg-emerald-950/50 p-4 backdrop-blur-md">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-amber-300">
            Building the future of global sports
          </div>
          <p className="text-xs leading-5 text-emerald-100/65">
            Football first, followed by global sports scores, teams, news, tournaments, travel and fan experiences.
          </p>
        </div>
      </div>

      <div className="z-10 w-full max-w-sm space-y-4 pb-2">
        <button
          onClick={onDismiss}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/15 transition-all hover:from-amber-300 hover:to-amber-400 active:scale-[0.98]"
        >
          Enter SportsLab Africa <ArrowRight className="h-4 w-4" />
        </button>
        <div className="text-center text-[11px] font-medium text-emerald-300/60">
          {seconds > 0 ? `Launching in ${seconds}…` : 'Sports • Data • Fans • Africa'}
        </div>
      </div>
    </motion.div>
  );
};
