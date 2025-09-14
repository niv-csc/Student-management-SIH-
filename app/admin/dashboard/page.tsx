"use client";

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

export default function AdminDashboard() {
	const tabs = [
		{ key: 'main', label: 'Main Dashboard' },
		{ key: 'events', label: 'Institutional Events' },
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
								className={`px-4 py-2 rounded-xl font-medium transition-colors ${activeTab === tab.key ? 'bg-rose-600 text-white' : 'bg-white text-rose-600 border'}`}
								onClick={() => setActiveTab(tab.key)}
							>
								{tab.label}
							</button>
						))}
					</div>
					{activeTab === 'main' && (
						<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<DashboardCard title="Overview">
								<div className="text-sm">Students: 1200<br />Teachers: 80<br />Admissions: 300<br />Events: 12</div>
							</DashboardCard>
							<DashboardCard title="Admission Management">
								<button className="px-4 py-2 bg-blue-600 text-white rounded">Manage Admissions</button>
							</DashboardCard>
							<DashboardCard title="Hostel Allocation">
								<button className="px-4 py-2 bg-indigo-600 text-white rounded">Allocate Hostel</button>
							</DashboardCard>
							<DashboardCard title="Notifications & Scheduling">
								<ul className="text-xs list-disc ml-4">
									<li>Fee Due - 10/10/2025</li>
									<li>Annual Day - 05/11/2025</li>
								</ul>
							</DashboardCard>
							<DashboardCard title="Teacher Salary Management">
								<button className="px-4 py-2 bg-green-600 text-white rounded">Manage Salaries</button>
							</DashboardCard>
							<DashboardCard title="Curriculum/Event Announcements">
								<button className="px-4 py-2 bg-amber-500 text-white rounded">Announce Event</button>
							</DashboardCard>
							<DashboardCard title="Institutional Events Organizer">
								<button className="px-4 py-2 bg-rose-600 text-white rounded">Organize Event</button>
							</DashboardCard>
						</main>
					)}
					{activeTab === 'events' && (
						<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<DashboardCard title="Events Timeline">
								<div className="h-20 flex items-center justify-center text-gray-400">[Institutional Events Timeline Placeholder]</div>
							</DashboardCard>
							<DashboardCard title="Event Analytics">
								<div className="text-sm">Attendance, Feedback, Success Metrics</div>
							</DashboardCard>
							<DashboardCard title="Organizer Tools">
								<button className="px-4 py-2 bg-rose-600 text-white rounded">Launch Event Tool</button>
							</DashboardCard>
							<DashboardCard title="Announcements">
								<ul className="text-xs list-disc ml-4">
									<li>Upcoming: Science Expo</li>
									<li>Recent: Annual Day</li>
								</ul>
							</DashboardCard>
						</main>
					)}
					{/* End of tab content */}
				</div>
			</div>
		</div>
	);
}
