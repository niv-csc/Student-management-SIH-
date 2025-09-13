import AnimatedBackground from '../../../components/AnimatedBackground';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import NotificationsBar from '../../../components/NotificationsBar';

function DashboardCard({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
			<h3 className="font-semibold text-lg mb-2">{title}</h3>
			{children}
		</div>
	);

}

export default function ParentDashboard() {
	return (
		<div className="relative min-h-screen flex">
			<AnimatedBackground />
			<NotificationsBar />
			<Sidebar />
			<div className="flex-1 ml-16 md:ml-56">
				<Navbar />
				<main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<DashboardCard title="Fee Summary & Payment History">
						<div className="text-sm">Total Paid: ₹50,000<br/>Last Payment: 01/09/2025</div>
						<button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">View History</button>
					</DashboardCard>
					<DashboardCard title="Child's Academic Performance">
						<div className="text-sm">Marks: 92%<br/>Rank: 3rd</div>
					</DashboardCard>
					<DashboardCard title="Child's Attendance">
						<div className="text-sm">Present: 180/200 days</div>
					</DashboardCard>
					<DashboardCard title="Monthly Report">
						<button className="px-4 py-2 bg-indigo-600 text-white rounded">Download Report</button>
						<button className="ml-2 px-4 py-2 bg-green-600 text-white rounded">Email Report</button>
					</DashboardCard>
					<DashboardCard title="Linked Student Data">
						<div className="text-xs">Student: S12345<br/>Name: John Doe</div>
						<button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded">View Details</button>
					</DashboardCard>
				</main>
			</div>
		</div>
	);
