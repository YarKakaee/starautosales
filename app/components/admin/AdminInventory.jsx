import authOptions from '@/app/auth/authOptions';
import { getServerSession } from 'next-auth';
import AdminInventorySection from './AdminInventorySection';

const AdminInventory = async () => {
	const session = await getServerSession(authOptions);

	if (!session) return null;

	return (
		<main className={`bg-lwhite`}>
			{session?.user?.email === 'starautosalesinfo@gmail.com' ? (
				<AdminInventorySection />
			) : (
				<section className="px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 mb-96 -mt-96 bg-lwhite text-dblue">
					<h3 className="text-lred text-lg font-semibold">
						You don't have access to view this page.
					</h3>
				</section>
			)}
		</main>
	);
};

export default AdminInventory;
