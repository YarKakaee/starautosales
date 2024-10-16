'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

const NewArrivals = () => {
	const [latestCars, setLatestCars] = useState([]);

	useEffect(() => {
		async function fetchLatestCars() {
			try {
				const response = await axios.get('/api/findNewArrivals');
				const data = response.data;
				setLatestCars(data.cars);
			} catch (error) {
				console.error('Error fetching latest cars:', error);
			}
		}

		fetchLatestCars();
	}, []);

	return (
		<section className="px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 pt-6 pb-16 bg-lwhite text-dblue">
			<h1
				data-aos="fade-right"
				data-aos-delay="50"
				className="text-center text-4xl mb-10 sm:text-4xl md:text-4xl md:my-11 font-black lg:text-start"
			>
				Latest Arrivals
			</h1>
			<div className="flex flex-col flex-wrap sm:flex-row items-center sm:items-start justify-between">
				{latestCars.map((car) => (
					<Card key={car.stockId} car={car} />
				))}
			</div>
		</section>
	);
};

export default NewArrivals;
