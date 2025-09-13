'use client';
import { motion } from 'framer-motion';
import cn from 'classnames';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'accent'; };

export default function GlowyButton({ variant = 'primary', children, className, ...props }: Props) {
  const base = 'relative inline-flex items-center justify-center px-5 py-2 rounded-xl font-medium focus:outline-none focus:ring-4';
  const styles = variant === 'primary'
    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:scale-[1.02]'
    : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md hover:scale-[1.02]';

  return (
    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className={cn(base, styles, className)} {...props}>
      <span className="absolute -inset-0.5 rounded-xl blur-md opacity-30" style={{ boxShadow: variant === 'primary' ? '0 8px 30px rgba(59,130,246,0.35)' : '0 8px 30px rgba(236,72,153,0.35)', zIndex: -1 }} />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}