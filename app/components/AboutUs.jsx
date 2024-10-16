'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';

const AboutUs = () => {
	useEffect(() => {
		AOS.init(); // Initialize AOS with default settings
	}, []);
	return (
		<section className="px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 p-14 pb-20 bg-dblue text-lwhite drop-shadow-nav">
			<div className="max-w-7xl mx-auto">
				<div className="text-center">
					<h1
						data-aos="fade-up"
						data-aos-delay="0"
						data-aos-duration="500"
						className="text-3xl mt-5 mb-6 md:my-4 font-bold 2xl:text-4xl"
					>
						Welcome to
					</h1>
					<h1
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="500"
						className="text-4xl mb-10 md:mt-6 font-black 2xl:text-5xl"
					>
						Star Auto Sales!
					</h1>
					<p
						data-aos="fade-right"
						data-aos-delay="200"
						data-aos-duration="500"
						className="text-base font-light"
					>
						We are dedicated to providing exceptional pre-owned cars
						and outstanding customer service.
					</p>
				</div>
				<div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="flex flex-col">
						<div
							className="flex-shrink-0"
							data-aos="fade-up"
							data-aos-delay="300"
							data-aos-duration="600"
						>
							<img
								className="h-48 w-full object-cover rounded-md"
								src="/assets/abus1.png"
								alt="About Us Image 1"
							/>
						</div>
						<div className="mt-7">
							<h3
								className="text-lg font-semibold text-center"
								data-aos="fade-up"
								data-aos-delay="350"
								data-aos-duration="600"
							>
								Quality Selection
							</h3>
							<p
								className="mt-3 text-base font-light text-center"
								data-aos="fade-up"
								data-aos-delay="350"
								data-aos-duration="600"
							>
								Our inventory consists of carefully selected
								pre-owned vehicles that meet our high standards
								for quality and reliability.
							</p>
						</div>
					</div>
					<div className="flex flex-col">
						<div
							className="flex-shrink-0"
							data-aos="fade-up"
							data-aos-delay="300"
							data-aos-duration="600"
						>
							<img
								className="h-48 w-full object-cover rounded-md"
								src="/assets/abus2.png"
								alt="About Us Image 2"
							/>
						</div>
						<div className="mt-7">
							<h3
								data-aos="fade-up"
								data-aos-delay="350"
								data-aos-duration="600"
								className="text-lg font-semibold text-center"
							>
								Exceptional Service
							</h3>
							<p
								data-aos="fade-up"
								data-aos-delay="350"
								data-aos-duration="600"
								className="mt-3 text-base font-light text-center"
							>
								Our knowledgeable and friendly team is dedicated
								to providing you with a seamless car-buying
								experience.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
