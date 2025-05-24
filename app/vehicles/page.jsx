import InventorySection from '@/app/components/InventorySection';
import NewArrivals from '@/app/components/NewArrivals';
import FinancingSection from '@/app/components/FinancingSection';

export const metadata = {
	title: 'Explore Our Inventory | Star Auto Sales | High Quality Used Cars in London',
	description:
		'Browse a wide selection of quality used cars at Star Auto Sales.',
};

const VehiclesPage = () => {
	return (
		<main className={`bg-lwhite`}>
			<div className="pt-28">
				<NewArrivals />
			</div>
			<InventorySection />
		</main>
	);
};

export default VehiclesPage;
