import AboutUs from '@/app/components/AboutUs';
import ContactUs from '@/app/components/ContactUs';
import Hero from '@/app/components/Hero';
import NewArrivals from '@/app/components/NewArrivals';

export default function Home() {
	return (
		<main>
			<Hero />
			<NewArrivals />
			<AboutUs />
			<ContactUs />
		</main>
	);
}
