import AnimatedBackground from '../../../components/AnimatedBackground';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import NotificationsBar from '../../../components/NotificationsBar';
import { useState } from 'react';

function DashboardCard({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
			<h3 className="font-semibold text-lg mb-2">{title}</h3>
			{children}
		</div>
	);
}

export default function StudentDashboardPage() {
	const tabs = [
		{ key: 'main', label: 'Main Dashboard' },
		{ key: 'quantum', label: 'Quantum S³' },
		{ key: 'metacognitive', label: 'Metacognitive Ecosystem' },
		{ key: 'chronos', label: 'Chronos Scheduler' },
		{ key: 'holographic', label: 'Holographic Profile' },
	];
	const [activeTab, setActiveTab] = useState('main');
	return (
		<div className="relative min-h-screen flex">
			<AnimatedBackground />
			<NotificationsBar />
			<Sidebar />
			<div className="flex-1 ml-16 md:ml-56">
				<Navbar />
				<div className="max-w-7xl mx-auto px-4 pt-8">
					<div className="flex gap-2 mb-6">
						{tabs.map(tab => (
							<button
								key={tab.key}
								className={`px-4 py-2 rounded-xl font-medium transition-colors ${activeTab === tab.key ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border'}`}
								onClick={() => setActiveTab(tab.key)}
							>
								{tab.label}
							</button>
						))}
					</div>
					{activeTab === 'main' && (
						<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<DashboardCard title="Attendance Tracking">
								<div className="h-32 flex items-center justify-center text-gray-500">[Attendance Chart Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Academic Records">
								<div className="text-sm">Marks: 92%<br/>Library: 5 books issued</div>
							</DashboardCard>
							<DashboardCard title="Fees & Receipt">
								<div className="text-sm">Paid: ₹50,000<br/>Next Due: 10/10/2025</div>
								<button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Download Receipt</button>
							</DashboardCard>
							<DashboardCard title="Personal Data">
								<div className="text-sm">ID: S12345<br/>Phone: 9876543210<br/>Admission: 2023</div>
							</DashboardCard>
							<DashboardCard title="Hostel Allocation">
								<div className="text-sm">Room: 204<br/>Block: B</div>
							</DashboardCard>
							<DashboardCard title="Notifications & Events">
								<ul className="text-xs list-disc ml-4">
									<li>Sports Day - 20/09/2025</li>
									<li>Library Renewal - 15/09/2025</li>
								</ul>
							</DashboardCard>
							<DashboardCard title="AI Query Bot">
								<div className="h-20 flex items-center justify-center text-gray-400">[Bot Widget Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Badges">
								<div className="flex gap-2"><span className="px-2 py-1 bg-yellow-300 rounded">Topper</span><span className="px-2 py-1 bg-green-300 rounded">Library Star</span></div>
							</DashboardCard>
							<DashboardCard title="Certificates">
								<button className="px-4 py-2 bg-indigo-600 text-white rounded">Download Certificates</button>
							</DashboardCard>
							<DashboardCard title="MCQ Test Schedule/Results">
								<div className="text-xs">Next Test: 25/09/2025<br/>Last Score: 88%</div>
							</DashboardCard>
						</main>
					)}
					{activeTab === 'quantum' && (
						<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<DashboardCard title="Academic Probability Cloud">
								<div className="h-20 flex items-center justify-center text-gray-400">[Possible Grade Outcomes Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Pathway Entanglement">
								<div className="text-sm">Elective choices ripple through future options.</div>
							</DashboardCard>
							<DashboardCard title="Observer Effect Analytics">
								<div className="text-sm">Teacher interventions shift probabilities.</div>
							</DashboardCard>
							<DashboardCard title="Quantum Tunneling Alerts">
								<div className="text-sm">Students who can “jump” to success with targeted help.</div>
							</DashboardCard>
						</main>
					)}
					{activeTab === 'metacognitive' && (
						<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<DashboardCard title="Student Health Score">
								<div className="h-20 flex items-center justify-center text-gray-400">[Health Score Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Symbiotic Group Matching">
								<div className="text-sm">Mutual strengths for group projects.</div>
							</DashboardCard>
							<DashboardCard title="Adaptive Curriculum Landscape">
								<div className="text-sm">Personalized learning paths.</div>
							</DashboardCard>
							<DashboardCard title="Institutional Climate Dashboard">
								<div className="text-sm">Overview of school climate.</div>
							</DashboardCard>
						</main>
					)}
					{activeTab === 'chronos' && (
						<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<DashboardCard title="Personal Time Dilation">
								<div className="h-20 flex items-center justify-center text-gray-400">[Chronotype Scheduling Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Gravity Wells Visualization">
								<div className="text-sm">Major deadlines visualized.</div>
							</DashboardCard>
							<DashboardCard title="Causality Protection">
								<div className="text-sm">Prerequisite analysis for courses.</div>
							</DashboardCard>
							<DashboardCard title="Event Horizon Alerts">
								<div className="text-sm">Credit overload risks.</div>
							</DashboardCard>
						</main>
					)}
					{activeTab === 'holographic' && (
						<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<DashboardCard title="Minimal Metrics">
								<div className="h-20 flex items-center justify-center text-gray-400">[Grit, Curiosity, Collaboration, Focus]</div>
							</DashboardCard>
							<DashboardCard title="Holographic Projection">
								<div className="text-sm">Full learner profile projection.</div>
							</DashboardCard>
							<DashboardCard title="Interference Pattern Analysis">
								<div className="text-sm">Group project dynamics.</div>
							</DashboardCard>
							<DashboardCard title="Galaxy View">
								<div className="text-sm">Entire student body visualization.</div>
							</DashboardCard>
						</main>
					)}
				</div>
			</div>
		</div>
	);
}
import AnimatedBackground from '../../../components/AnimatedBackground';
import Navbar from '../../../components/Navbar';
// ...existing code...
import AnimatedBackground from '../../../components/AnimatedBackground';
import Navbar from '../../../components/Navbar';
// ...existing code...
			{children}
		</div>
	);
}

export default function StudentDashboardPage() {
	const tabs = [
		{ key: 'main', label: 'Main Dashboard' },
		{ key: 'quantum', label: 'Quantum S³' },
		{ key: 'metacognitive', label: 'Metacognitive Ecosystem' },
		{ key: 'chronos', label: 'Chronos Scheduler' },
		{ key: 'holographic', label: 'Holographic Profile' },
	];
	const [activeTab, setActiveTab] = useState('main');
	return (
		<div className="relative min-h-screen flex">
			<AnimatedBackground />
			<NotificationsBar />
			<Sidebar />
			<div className="flex-1 ml-16 md:ml-56">
				<Navbar />
				<div className="max-w-7xl mx-auto px-4 pt-8">
					<div className="flex gap-2 mb-6">
						{tabs.map(tab => (
							<button
								key={tab.key}
								className={`px-4 py-2 rounded-xl font-medium transition-colors ${activeTab === tab.key ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border'}`}
								onClick={() => setActiveTab(tab.key)}
							>
								{tab.label}
							</button>
						))}
					</div>
					{activeTab === 'main' && (
						<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<DashboardCard title="Attendance Tracking">
								<div className="h-32 flex items-center justify-center text-gray-500">[Attendance Chart Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Academic Records">
								<div className="text-sm">Marks: 92%<br/>Library: 5 books issued</div>
							</DashboardCard>
							<DashboardCard title="Fees & Receipt">
								<div className="text-sm">Paid: ₹50,000<br/>Next Due: 10/10/2025</div>
								<button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Download Receipt</button>
							</DashboardCard>
							<DashboardCard title="Personal Data">
								<div className="text-sm">ID: S12345<br/>Phone: 9876543210<br/>Admission: 2023</div>
							</DashboardCard>
							<DashboardCard title="Hostel Allocation">
								<div className="text-sm">Room: 204<br/>Block: B</div>
							</DashboardCard>
							<DashboardCard title="Notifications & Events">
								<ul className="text-xs list-disc ml-4">
									<li>Sports Day - 20/09/2025</li>
									<li>Library Renewal - 15/09/2025</li>
								</ul>
							</DashboardCard>
							<DashboardCard title="AI Query Bot">
								<div className="h-20 flex items-center justify-center text-gray-400">[Bot Widget Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Badges">
								<div className="flex gap-2"><span className="px-2 py-1 bg-yellow-300 rounded">Topper</span><span className="px-2 py-1 bg-green-300 rounded">Library Star</span></div>
							</DashboardCard>
							<DashboardCard title="Certificates">
								<button className="px-4 py-2 bg-indigo-600 text-white rounded">Download Certificates</button>
							</DashboardCard>
							<DashboardCard title="MCQ Test Schedule/Results">
								<div className="text-xs">Next Test: 25/09/2025<br/>Last Score: 88%</div>
							</DashboardCard>
						</main>
					)}
				{activeTab === 'quantum' && (
					<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<DashboardCard title="Academic Probability Cloud">
							<div className="h-20 flex items-center justify-center text-gray-400">[Possible Grade Outcomes Placeholder]</div>
						</DashboardCard>
						<DashboardCard title="Pathway Entanglement">
							<div className="text-sm">Elective choices ripple through future options.</div>
						</DashboardCard>
						<DashboardCard title="Observer Effect Analytics">
							<div className="text-sm">Teacher interventions shift probabilities.</div>
						</DashboardCard>
						<DashboardCard title="Quantum Tunneling Alerts">
							<div className="text-sm">Students who can “jump” to success with targeted help.</div>
						</DashboardCard>
					</main>
				)}
				{activeTab === 'metacognitive' && (
					<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<DashboardCard title="Student Health Score">
							<div className="h-20 flex items-center justify-center text-gray-400">[Health Score Placeholder]</div>
						</DashboardCard>
						<DashboardCard title="Symbiotic Group Matching">
							<div className="text-sm">Mutual strengths for group projects.</div>
						</DashboardCard>
						<DashboardCard title="Adaptive Curriculum Landscape">
							<div className="text-sm">Personalized learning paths.</div>
						</DashboardCard>
						<DashboardCard title="Institutional Climate Dashboard">
							<div className="text-sm">Overview of school climate.</div>
						</DashboardCard>
					</main>
				)}
				{activeTab === 'chronos' && (
					<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<DashboardCard title="Personal Time Dilation">
							<div className="h-20 flex items-center justify-center text-gray-400">[Chronotype Scheduling Placeholder]</div>
						</DashboardCard>
						<DashboardCard title="Gravity Wells Visualization">
							<div className="text-sm">Major deadlines visualized.</div>
						</DashboardCard>
						<DashboardCard title="Causality Protection">
							<div className="text-sm">Prerequisite analysis for courses.</div>
						</DashboardCard>
						<DashboardCard title="Event Horizon Alerts">
							<div className="text-sm">Credit overload risks.</div>
						</DashboardCard>
					</main>
				)}
								{activeTab === 'holographic' && (
									<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<DashboardCard title="Minimal Metrics">
											<div className="h-20 flex items-center justify-center text-gray-400">[Grit, Curiosity, Collaboration, Focus]</div>
										</DashboardCard>
										<DashboardCard title="Holographic Projection">
											<div className="text-sm">Full learner profile projection.</div>
										</DashboardCard>
										<DashboardCard title="Interference Pattern Analysis">
											<div className="text-sm">Group project dynamics.</div>
										</DashboardCard>
										<DashboardCard title="Galaxy View">
											<div className="text-sm">Entire student body visualization.</div>
										</DashboardCard>
									</main>
								)}
								{/* End of tab content */}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}