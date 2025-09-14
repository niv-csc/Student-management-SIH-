"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GlowyButton from './GlowyButton';

interface LoginFormProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
}

const mockAuth = (email: string, password: string, role: string) => {
  // Replace with real auth logic or API call
  return email && password && email.endsWith(`@${role}.erp`);
};

export default function LoginForm({ role }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) {
      setError('Please verify you are not a robot.');
      return;
    }
    if (mockAuth(email, password, role)) {
      router.push(`/${role}/dashboard`);
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <form className="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-center">{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="captcha" checked={captcha} onChange={e => setCaptcha(e.target.checked)} />
        <label htmlFor="captcha" className="text-sm">I’m not a robot (captcha placeholder)</label>
      </div>
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <GlowyButton type="submit" className="w-full">Login</GlowyButton>
    </form>
  );
}
