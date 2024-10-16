import React from 'react';
import AdminDashboard from '../components/admin/AdminDashboard';
import AdminInventory from '../components/admin/AdminInventory';

export const metadata = {
	title: 'Admin Dashboard | Star Auto Sales | High Quality Used Cars in London',
	description:
		'View and manage inventory with ease on the Admin Dashboard of Star Auto Sales.',
};

const AdminPage = () => {
	return (
		<main className="bg-lwhite">
			<AdminDashboard />
			<AdminInventory />
		</main>
	);
};

export default AdminPage;
