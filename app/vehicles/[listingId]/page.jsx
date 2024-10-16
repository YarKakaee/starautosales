import CarImages from '@/app/components/Inventory/CarImages';
import InventoryContactForm from '@/app/components/Inventory/InventoryContactForm';
import prisma from '@/prisma/client';
import { Description } from '@headlessui/react';
import { notFound } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

const CarPage = async ({ params }) => {
	const car = await prisma.car.findUnique({
		where: { listingId: parseInt(params.listingId) },
	});

	if (!car) notFound();

	return (
		<main className={`bg-lwhite`}>
			<Toaster />
			<section className="px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 p-14 mb-20 bg-lwhite text-dblue pt-44 h-fit">
				<div className="flex flex-col xl:flex-row gap-14">
					<div className="xl:w-4/6">
						<h1 className="text-center md:text-start text-3xl font-semibold opacity-90">
							{car.year}
						</h1>
						<h1 className="text-center md:text-start text-5xl font-black mt-2">
							{car.make} {car.model}
						</h1>
						<div className="flex flex-row justify-between mt-6">
							<h4
								data-aos="fade-right"
								data-aos-delay="300"
								className="text-sm opacity-50 font-semibold py-1.5 "
							>
								{car.eColor.toUpperCase()} EXTERIOR,{' '}
								{car.body.toUpperCase()}, {car.seats} SEATS,{' '}
								{car.doors} DOORS,{' '}
								{car.transmission.toUpperCase()} TRANSMISSION,{' '}
								{car.safety.toUpperCase()}
							</h4>
							<h4
								className="text-center text-sm opacity-50 font-semibold p-1.5 rounded-md bg-white ring-dblue ring-1 ring-opacity-70"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								LISTING # {car.listingId}
							</h4>
						</div>
						<CarImages car={car} />
					</div>
					<div className="xl:w-2/6">
						<div className="rounded-md bg-dblue text-lwhite drop-shadow-4xl h-fit px-9 py-10">
							<h2 className="uppercase opacity-80">Our price</h2>
							<div className="flex flex-row">
								<h1 className="text-4xl font-bold mt-2">
									$ {car.price.toLocaleString()}
								</h1>
								<h2 className="text-lg text-lwhite mt-5 ml-2">
									+ HST
								</h2>
							</div>
						</div>
						<div className="rounded-md bg-dblue text-lwhite drop-shadow-4xl h-fit p-8 mt-5">
							<h2 className="uppercase opacity-80">Odometer</h2>
							<h1 className="text-3xl font-medium mt-2">
								{car.mileage.toLocaleString()} km
							</h1>
						</div>
						<div className="rounded-md bg-white text-dblue drop-shadow-4xl h-fit p-8 mt-5">
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									Body style
								</h2>
								<h2 className="text-sm font-semibold">
									{car.body}
								</h2>
							</div>
							<div className="bg-dblue w-full h-px rounded-md my-4 opacity-40" />
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									Engine
								</h2>
								<h2 className="text-sm font-semibold">
									{car.engine}
								</h2>
							</div>
							<div className="bg-dblue w-full h-px rounded-md my-4 opacity-40" />
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									Fuel Type
								</h2>
								<h2 className="text-sm font-semibold">
									{car.fuel}
								</h2>
							</div>
							<div className="bg-dblue w-full h-px rounded-md my-4 opacity-40" />
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									Transmission
								</h2>
								<h2 className="text-sm font-semibold">
									{car.transmission}
								</h2>
							</div>
							<div className="bg-dblue w-full h-px rounded-md my-4 opacity-40" />
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									Exterior Color
								</h2>
								<h2 className="text-sm font-semibold">
									{car.eColor}
								</h2>
							</div>
							<div className="bg-dblue w-full h-px rounded-md my-4 opacity-40" />
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									Interior Color
								</h2>
								<h2 className="text-sm font-semibold">
									{car.iColor}
								</h2>
							</div>
							<div className="bg-dblue w-full h-px rounded-md my-4 opacity-40" />
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									Doors
								</h2>
								<h2 className="text-sm font-semibold">
									{car.doors}
								</h2>
							</div>
							<div className="bg-dblue w-full h-px rounded-md my-4 opacity-40" />
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									Seats
								</h2>
								<h2 className="text-sm font-semibold">
									{car.seats}
								</h2>
							</div>
							<div className="bg-dblue w-full h-px rounded-md my-4 opacity-40" />
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									VIN
								</h2>
								<h2 className="uppercase text-sm font-semibold">
									{car.vin}
								</h2>
							</div>
							<div className="bg-dblue w-full h-px rounded-md my-4 opacity-40" />
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									Stock ID
								</h2>
								<h2 className="text-sm font-semibold">
									SAS
									{car.stockId < 10
										? `00${car.stockId}`
										: car.stockId < 100
										? `0${car.stockId}`
										: car.stockId}
								</h2>
							</div>
							<div className="bg-dblue w-full h-px rounded-md my-4 opacity-40" />
							<div className="flex flex-row justify-between">
								<h2 className="uppercase opacity-60 text-sm font-semibold">
									Listing #
								</h2>
								<h2 className="text-sm font-semibold">
									{car.listingId}
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-16">
					<InventoryContactForm carData={car} />
				</div>
			</section>
		</main>
	);
};

export async function generateMetadata({ params }) {
	const car = await prisma.car.findUnique({
		where: { listingId: parseInt(params.listingId) },
	});

	if (!car)
		return {
			title: '404 - Page Not Found | Find Your Perfect Ride | High Quality Used Cars in London',
			description:
				"We couldn't find the page you were looking for. It may have been moved or deleted, or the URL might be misspelled.",
		};

	return {
		title: `${car?.year} ${car?.make} ${car?.model} for Sale | Star Auto Sales | High
	Quality Used Cars in London`,
		description: `Explore this ${car?.year} ${car?.make} ${
			car?.model
		} with ${
			car?.mileage
		} km for sale at Star Auto Sales. Price: $${car?.price.toLocaleString()}. Contact us for more details and to schedule a test drive.`,
	};
}

export default CarPage;
