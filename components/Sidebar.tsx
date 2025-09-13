'use client';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/student/dashboard', label: 'Student' },
  { href: '/teacher/dashboard', label: 'Teacher' },
  { href: '/parent/dashboard', label: 'Parent' },
  { href: '/admin/dashboard', label: 'Admin' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={`fixed left-0 top-0 h-full bg-white/90 shadow-lg z-20 transition-all duration-300 ${collapsed ? 'w-16' : 'w-56'}`}>
      <button
        className="absolute top-4 right-2 p-2 rounded bg-indigo-100 hover:bg-indigo-200"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? '→' : '←'}
      </button>
      <nav className="mt-16 flex flex-col gap-4 px-4">
        {links.map(link => (
          <Link key={link.href} href={link.href} className="py-2 px-3 rounded hover:bg-indigo-50 text-indigo-700 font-medium text-sm">
            {collapsed ? link.label.charAt(0) : link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
