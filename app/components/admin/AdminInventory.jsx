import authOptions from '@/app/auth/authOptions';
import prisma from '@/prisma/client';
import { getServerSession } from 'next-auth';
import InventoryCard from '../Inventory/InventoryCard';

const AdminInventory = async () => {
	const session = await getServerSession(authOptions);

	const cars = await prisma.car.findMany();

	if (!session) return null;

	return (
		<section className="px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 mb-20 -mt-80 bg-lwhite text-dblue">
			{session?.user?.email === 'starautosalesinfo@gmail.com' ? (
				<div>
					{cars.map((car) => (
						<InventoryCard
							key={car.stockId}
							car={car}
							view="admin"
						/>
					))}
				</div>
			) : (
				<div>
					<h3 className="text-lred text-lg font-semibold">
						You don't have access to view this page.
					</h3>
				</div>
			)}
		</section>
	);
};

export default AdminInventory;
