'use client';

import AddUpdateVehicle from '@/app/components/admin/AddUpdateVehicle';
import { useSession } from 'next-auth/react';

const AddVehiclePage = () => {
	const { data: session } = useSession();

	return (
		<section className="px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 pb-6 bg-lwhite text-dblue pt-40">
			{session?.user?.email === 'starautosalesinfo@gmail.com' ? (
				<AddUpdateVehicle />
			) : (
				<h3 className="text-lred text-lg font-semibold mb-96 mt-7">
					You don't have access to view this page.
				</h3>
			)}
		</section>
	);
};

export default AddVehiclePage;
