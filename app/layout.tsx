import './globals.css';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Student ERP', description: 'ERP Student Management System' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}