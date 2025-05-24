import AboutUs from '@/app/components/AboutUs';
import ContactUs from '@/app/components/ContactUs';
import Hero from '@/app/components/Hero';
import NewArrivals from '@/app/components/NewArrivals';
import FinancingSection from '@/app/components/FinancingSection';

export default function Home() {
	return (
		<main>
			<Hero />
			<FinancingSection />
			<NewArrivals />
			<AboutUs />
			<ContactUs />
		</main>
	);
}
