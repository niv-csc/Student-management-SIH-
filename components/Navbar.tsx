'use client';
import Link from 'next/link';
import GlowyButton from './GlowyButton';

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-transparent">
      <Link href="/" className="text-xl font-semibold">MyDearCoding</Link>
      <nav className="flex items-center gap-3">
        <Link href="/student/dashboard" className="text-sm">Student</Link>
        <Link href="/teacher/dashboard" className="text-sm">Teacher</Link>
        <Link href="/admin/dashboard" className="text-sm">Admin</Link>
        <GlowyButton variant="primary" className="ml-4">Sign In</GlowyButton>
      </nav>
    </header>
  );
}