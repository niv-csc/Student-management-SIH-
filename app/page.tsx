import Link from 'next/link';
import GlowyButton from '../components/GlowyButton';

export default function HomePage() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">Select Your Role</h1>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/auth/student"><GlowyButton>Student</GlowyButton></Link>
          <Link href="/auth/teacher"><GlowyButton>Teacher</GlowyButton></Link>
          <Link href="/auth/parent"><GlowyButton>Parent</GlowyButton></Link>
          <Link href="/auth/admin"><GlowyButton>Admin</GlowyButton></Link>
        </div>
      </div>
    </div>
  );
}