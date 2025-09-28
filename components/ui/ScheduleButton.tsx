'use client';

import { Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ScheduleButtonProps {
  className?: string;
}

export function ScheduleButton({ className }: ScheduleButtonProps) {
  const handleScheduleClick = () => {
    // Open the scheduler in a new window/tab
    window.open(
      'https://galloshines.simplybook.me',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <motion.button
      onClick={handleScheduleClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#00f7ff] via-[#4A9EE0] to-[#00f7ff] px-8 py-4 font-bebas-neue text-lg tracking-wider text-white shadow-[0_8px_25px_rgba(0,247,255,0.4)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,247,255,0.6)] ${className}`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A9EE0] via-[#00f7ff] to-[#4A9EE0] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Shimmer effect */}
      <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />

      <div className="relative flex items-center justify-center gap-3">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Calendar className="h-6 w-6" />
        </motion.div>
        <span>Schedule Service</span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Sparkles className="h-5 w-5" />
        </motion.div>
      </div>
    </motion.button>
  );
}
