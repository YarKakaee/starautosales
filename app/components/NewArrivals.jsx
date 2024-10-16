import axios from 'axios';
import Card from './Card';
import prisma from '@/prisma/client';

const NewArrivals = async () => {
	const cars = await prisma.car.findMany({
		orderBy: { stockId: 'desc' },
		take: 4, // Limit the results to the last 4 cars
	});

	return (
		<section className="px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 pt-6 pb-16 bg-lwhite text-dblue">
			<h1
				data-aos="fade-right"
				data-aos-delay="50"
				className="text-center text-4xl mb-10 sm:text-4xl md:text-4xl md:my-11 font-black lg:text-start"
			>
				New Arrivals
			</h1>
			<div className="flex flex-col flex-wrap sm:flex-row items-center sm:items-start justify-between">
				{cars.map((car) => (
					<Card key={car.stockId} car={car} />
				))}
			</div>
		</section>
	);
};

export default NewArrivals;
