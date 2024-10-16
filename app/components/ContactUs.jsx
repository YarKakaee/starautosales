'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
	useEffect(() => {
		AOS.init(); // Initialize AOS with default settings
	}, []);
	return (
		<section className="px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 p-14 pb-20 bg-lwhite text-dblue">
			<div className="max-w-7xl mx-auto">
				<div className="text-center">
					<h2
						data-aos="fade-up"
						data-aos-delay="0"
						data-aos-duration="500"
						className="text-center text-4xl mb-8 sm:text-4xl md:text-5xl font-black"
					>
						Contact Us
					</h2>
					<p
						data-aos="fade-right"
						data-aos-delay="100"
						data-aos-duration="500"
						className="text-lg"
					>
						We would love to hear from you! Fill out the form below
						to get in touch.
					</p>
				</div>
				<div
					className="mt-12 mx-auto"
					data-aos="fade-up"
					data-aos-delay="250"
					data-aos-duration="600"
				>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
