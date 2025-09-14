<<<<<<< HEAD
"use client";

=======
'use client';
>>>>>>> ab26bd08de6d206ac98c34fb88ac30cdae6209f9
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

<<<<<<< HEAD
export default function TeacherDashboard() {
=======
export default function TeacherDashboardPage() {
>>>>>>> ab26bd08de6d206ac98c34fb88ac30cdae6209f9
	const tabs = [
		{ key: 'main', label: 'Main Dashboard' },
		{ key: 'ai', label: 'AI Insights' },
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
								className={`px-4 py-2 rounded-xl font-medium transition-colors ${activeTab === tab.key ? 'bg-green-600 text-white' : 'bg-white text-green-600 border'}`}
								onClick={() => setActiveTab(tab.key)}
							>
								{tab.label}
							</button>
						))}
					</div>
					{activeTab === 'main' && (
						<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<DashboardCard title="Upload Academic Details">
								<div className="h-20 flex items-center justify-center text-gray-500">[Upload Widget Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Mark Attendance">
								<div className="text-sm">Class: 10A<br />Present: 32/35</div>
							</DashboardCard>
							<DashboardCard title="Class Schedule & Curriculum">
								<div className="text-xs">Next: Math - 10:00 AM<br />Design: [Curriculum Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Announcements Panel">
								<ul className="text-xs list-disc ml-4">
									<li>Exam on 25/09/2025</li>
									<li>PTM - 30/09/2025</li>
								</ul>
							</DashboardCard>
							<DashboardCard title="Automated MCQ Correction">
								<div className="h-20 flex items-center justify-center text-gray-400">[MCQ Correction Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Feedback Rating">
								<div className="flex gap-2"><span className="px-2 py-1 bg-blue-200 rounded">4.7/5</span></div>
							</DashboardCard>
							<DashboardCard title="AI Data Insights">
								<div className="h-20 flex items-center justify-center text-gray-400">[AI Insights Widget]</div>
							</DashboardCard>
							<DashboardCard title="Badge Awarding">
								<button className="px-4 py-2 bg-green-600 text-white rounded">Award Badge</button>
							</DashboardCard>
							<DashboardCard title="Class Announcements">
								<ul className="text-xs list-disc ml-4">
									<li>Science Fair - 18/09/2025</li>
									<li>Holiday - 02/10/2025</li>
								</ul>
							</DashboardCard>
						</main>
					)}
					{activeTab === 'ai' && (
						<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<DashboardCard title="AI Data Insights">
								<div className="h-20 flex items-center justify-center text-gray-400">[Experimental AI Insights Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Automated MCQ Correction">
								<div className="h-20 flex items-center justify-center text-gray-400">[Automated Correction Experimental]</div>
							</DashboardCard>
							<DashboardCard title="Feedback Analytics">
								<div className="text-sm">Advanced feedback rating and analysis.</div>
							</DashboardCard>
						</main>
					)}
<<<<<<< HEAD
					{/* End of tab content */}
=======
>>>>>>> ab26bd08de6d206ac98c34fb88ac30cdae6209f9
				</div>
			</div>
		</div>
	);
<<<<<<< HEAD
}
=======
}
>>>>>>> ab26bd08de6d206ac98c34fb88ac30cdae6209f9
