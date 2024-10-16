export const metadata = {
	title: 'Terms and Conditions | Star Auto Sales | High Quality Used Cars in London',
	description:
		'Read the terms and conditions for using the Star Auto Sales website. Learn about our policies, purchase agreements, and user obligations when accessing our services and inventory.',
};

const TermsConditionsPage = () => {
	return (
		<main className={`bg-lwhite`}>
			<section className="pt-36 px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 py-28 bg-lwhite text-dblue lg:pt-44">
				<h1 className="text-center text-4xl sm:text-4xl md:text-4xl mt-7 mb-8 font-black lg:text-start">
					Terms and Conditions
				</h1>
				<p className="text-center text-base lg:text-start">
					Please read these Terms and Conditions ("Terms", "Terms and
					Conditions") carefully before using the Star Auto Sales
					website (the "Service") operated by Star Auto Sales ("us",
					"we", or "our").
				</p>
				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Agreement to Terms
				</h2>
				<p className="text-center text-base lg:text-start">
					By accessing or using the Service, you agree to be bound by
					these Terms. If you disagree with any part of the Terms,
					then you may not access the Service.
				</p>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Intellectual Property
				</h2>
				<p className="text-center text-base lg:text-start">
					The Service and its original content, features, and
					functionality are owned by Star Auto Sales and are protected
					by international copyright, trademark, patent, trade secret,
					and other intellectual property or proprietary rights laws.
				</p>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Disclaimer
				</h2>
				<p className="text-center text-base lg:text-start">
					The Service is provided on an "as is" and "as available"
					basis without any warranties, expressed or implied. Star
					Auto Sales does not warrant that the Service will be
					uninterrupted, timely, secure, or error-free.
				</p>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Limitation of Liability
				</h2>
				<p className="text-center text-base lg:text-start">
					In no event shall Star Auto Sales be liable for any
					indirect, incidental, special, consequential, or punitive
					damages, including without limitation, loss of profits,
					data, use, goodwill, or other intangible losses, resulting
					from:
				</p>
				<ul className="list-disc ml-12 mt-5 text-start">
					<li>The use or inability to use the Service</li>
					<li>
						Any conduct or content of any third-party on the Service
					</li>
					<li>
						Unauthorized access, use, or alteration of your
						transmissions or content
					</li>
					<li>Any other matter relating to the Service</li>
				</ul>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Links to Other Websites
				</h2>
				<p className="text-center text-base lg:text-start">
					Our Service may contain links to third-party websites or
					services that are not owned or controlled by Star Auto
					Sales. We have no control over and assume no responsibility
					for the content, privacy policies, or practices of any
					third-party websites or services.
				</p>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Governing Law
				</h2>
				<p className="text-center text-base lg:text-start">
					These Terms shall be governed and construed in accordance
					with the laws of Ontario, without regard to its conflict of
					law provisions.
				</p>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Changes to Terms and Conditions
				</h2>
				<p className="text-center text-base lg:text-start">
					We reserve the right, at our sole discretion, to modify or
					replace these Terms at any time. If a revision is material,
					we will try to provide at least 30 days' notice prior to any
					new terms taking effect. What constitutes a material change
					will be determined at our sole discretion.
				</p>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Contact Us
				</h2>
				<p className="text-center text-base lg:text-start">
					If you have any questions or suggestions about our Terms and
					Conditions, please contact us:
				</p>
				<div className="py-4">
					<strong>Email:</strong> starautosalesinfo@gmail.com
					<br />
					<strong>Phone:</strong> (519) 701-2378
				</div>
			</section>
		</main>
	);
};

export default TermsConditionsPage;
