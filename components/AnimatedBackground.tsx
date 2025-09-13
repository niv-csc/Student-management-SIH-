'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      mouseX.set((e.clientX - left - width / 2) / width);
      mouseY.set((e.clientY - top - height / 2) / height);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transforms
  const parallax1 = {
    x: useTransform(mouseX, (v: number) => v * 60),
    y: useTransform(mouseY, (v: number) => v * 60),
  };
  const parallax2 = {
    x: useTransform(mouseX, (v: number) => v * -40),
    y: useTransform(mouseY, (v: number) => v * 40),
  };

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ y: [0, -60, 0], x: [0, 30, 0], rotate: [0, 2, -2, 0] }}
        style={parallax1}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-40 top-10 w-[42rem] h-[42rem] rounded-full blur-[80px] opacity-30 bg-gradient-to-r from-indigo-400 via-rose-300 to-amber-300"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [0, -2, 2, 0] }}
        style={parallax2}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 bottom-[-8rem] w-[32rem] h-[32rem] rounded-full blur-[60px] opacity-25 bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500"
      />
      {/* Extra animated layers for depth */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-20 bg-gradient-to-r from-pink-400 via-indigo-300 to-amber-200"
      />
      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/3 top-1/4 w-[30rem] h-[30rem] rounded-full blur-[80px] opacity-10 bg-gradient-to-r from-amber-400 via-pink-300 to-indigo-400"
      />
    </div>
  );
}