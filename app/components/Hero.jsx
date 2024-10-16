'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const Hero = () => {
	useEffect(() => {
		AOS.init(); // Initialize AOS with default settings
	}, []);
	return (
		<section className="pt-36 px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 py-28 bg-lwhite text-dblue relative lg:pt-48">
			<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between relative">
				<div className="lg:w-1/2">
					<div className="flex items-center justify-center lg:hidden">
						<Image
							src="/assets/blobnew.png"
							alt="Hero Image"
							width={1050}
							height={1050}
							className="mb-12 sm:w-80"
						/>
					</div>
					<h1
						data-aos="fade-up"
						data-aos-delay="0"
						data-aos-duration="600"
						className="text-center text-4xl mb-3 sm:text-4xl sm:mb-4 md:text-5xl md:mb-4 font-black lg:text-start  2xl:mb-6 2xl:mt-6"
					>
						Find Your
					</h1>
					<h1
						data-aos="fade-up"
						data-aos-delay="150"
						data-aos-duration="500"
						className="text-center text-5xl mb-6 sm:text-5xl sm:mb-8 md:text-6xl md:mb-8 font-black lg:text-start  2xl:mb-8"
					>
						Perfect Ride
					</h1>
					<p
						data-aos="fade-right"
						data-aos-delay="250"
						data-aos-duration="600"
						className="text-center text-base font-normal mb-8 lg:text-start 2xl:text-lg 2xl:mb-10"
					>
						Unlock a World of Exceptional Pre-Owned Cars - Discover
						Your Ideal Vehicle at Star Auto Sales.
					</p>
					<div className="flex justify-center lg:justify-start">
						<Link href="/vehicles">
							<button className="bg-lred text-lwhite py-3 px-5 rounded-md text-base font-semibold transition duration-300 hover:scale-105 uppercase 2xl:text-lg 2xl:py-3 2xl:px-6 drop-shadow-3xl hover:drop-shadow-4xl ease-out">
								Explore Inventory
							</button>
						</Link>
					</div>
					<div
						className="h-24 w-3/4 rounded-md bg-cover absolute mt-16 items-center justify-center 2xl:flex hidden drop-shadow-4xl"
						style={{
							backgroundImage:
								"url('/assets/stacked-waves-haikei (5).svg')",
						}}
						data-aos="fade-up"
						data-aos-delay="50"
						data-aos-duration="800"
					>
						<h1 className="text-sm sm:text-sm md:text-lg text-lwhite font-bold text-center">
							Driving Dreams: Your Trusted Destination for
							Pre-Owned Cars at Star Auto Sales
						</h1>
					</div>
				</div>
				<div>
					<Image
						src="/assets/blobnew.png"
						alt="Hero Image"
						width={330}
						height={330}
						className="hidden lg:block 2xl:hidden xl:w-90 2xl:w-128"
					/>
					<Image
						src="/assets/blobnew.png"
						alt="Hero Image"
						width={2000}
						height={2000}
						className="hidden 2xl:block xl:w-90 2xl:w-128"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
