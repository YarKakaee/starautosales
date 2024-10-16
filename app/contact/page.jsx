import ContactUs from '@/app/components/ContactUs';

export const metadata = {
	title: 'Contact Us | Star Auto Sales | High Quality Used Cars in London',
	description:
		'Have questions or need assistance? Get in touch with the team at Star Auto Sales. We’re here to help with inquiries about our vehicles, services, or any other requests. Contact us today for more information.',
};

const ContactPage = () => {
	return (
		<main className={`bg-lwhite`}>
			<div className="pt-28 pb-8">
				<ContactUs />
			</div>
		</main>
	);
};

export default ContactPage;
