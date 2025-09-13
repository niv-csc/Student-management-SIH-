export default function AnalyticsCard({ title, value, trend }: { title: string; value: string; trend?: string }) {
  return (
    <div className="bg-white/80 rounded-xl shadow-lg p-4 flex flex-col items-center gap-1 hover:scale-[1.02] transition-transform">
      <div className="text-xs text-gray-500 mb-1">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
      {trend && <div className={`text-sm ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{trend}</div>}
    </div>
  );
}
