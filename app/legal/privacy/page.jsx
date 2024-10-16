export const metadata = {
	title: 'Privacy Policy | Star Auto Sales | High Quality Used Cars in London',
	description:
		'Your privacy matters to us. Review the Star Auto Sales privacy policy to learn how we collect, use, and protect your personal information when you interact with our website and services.',
};

const PrivacyPolicyPage = () => {
	return (
		<main className={`bg-lwhite`}>
			<section className="pt-36 px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 py-28 bg-lwhite text-dblue lg:pt-44">
				<h1 className="text-center text-4xl sm:text-4xl md:text-4xl mt-7 mb-8 font-black lg:text-start">
					Privacy Policy
				</h1>
				<p className="text-center text-base lg:text-start">
					At Star Auto Sales, we are committed to protecting the
					privacy and security of our customers' personal information.
					This Privacy Policy outlines how we collect, use, disclose,
					and protect the information you provide to us through our
					website, services, and interactions. By using our website
					and services, you consent to the practices described in this
					policy.
				</p>
				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Information We Collect
				</h2>
				<p className="text-center text-base lg:text-start">
					We may collect personal information from you when you visit
					our website, fill out forms, make purchases, contact our
					customer support, or engage in other activities on our site.
					The types of personal information we may collect include:
				</p>
				<ul className="list-disc ml-12 mt-5 text-start">
					<li>
						Contact information (e.g., name, email address, phone
						number)
					</li>
					<li>Demographic information (e.g., age, gender)</li>
					<li>Vehicle preferences and purchase history</li>
					<li>Payment information</li>
					<li>Other information you provide to us voluntarily</li>
				</ul>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					How We Use Your Information
				</h2>
				<p className="text-center text-base lg:text-start">
					We may use the information we collect from you for various
					purposes, including:
				</p>
				<ul className="list-disc ml-12 mt-5 text-start">
					<li>Providing and personalizing our services</li>
					<li>Processing and fulfilling your orders</li>
					<li>Improving our website and services</li>
					<li>
						Communicating with you, including responding to your
						inquiries and providing customer support
					</li>
					<li>
						Sending promotional emails and newsletters (you may
						opt-out at any time)
					</li>
					<li>Conducting research and analysis</li>
					<li>Complying with legal obligations</li>
				</ul>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Information Sharing and Disclosure
				</h2>
				<p className="text-center text-base lg:text-start">
					We may share your personal information with third parties in
					the following situations:
				</p>
				<ul className="list-disc ml-12 mt-5 text-start">
					<li>With your consent</li>
					<li>
						With service providers who help us with our business
						operations (e.g., payment processors, shipping
						companies)
					</li>
					<li>
						To comply with applicable laws, regulations, or legal
						processes
					</li>
					<li>
						To protect our rights, property, or safety, and that of
						our users and others
					</li>
					<li>
						In connection with a business transaction, such as a
						merger, acquisition, or sale of assets
					</li>
				</ul>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Data Security
				</h2>
				<p className="text-center text-base lg:text-start">
					We take reasonable measures to protect the confidentiality,
					integrity, and security of your personal information.
					However, please note that no method of transmission over the
					internet or electronic storage is completely secure, and we
					cannot guarantee absolute security.
				</p>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Your Rights and Choices
				</h2>
				<p className="text-center text-base lg:text-start">
					You have the right to access, update, and correct your
					personal information. You may also have the right to request
					the deletion of your personal information or object to its
					processing. To exercise these rights, please contact us
					using the contact information provided below.
				</p>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Changes to This Privacy Policy
				</h2>
				<p className="text-center text-base lg:text-start">
					We may update this Privacy Policy from time to time to
					reflect changes in our practices or applicable laws. We
					encourage you to review this page periodically for any
					updates.
				</p>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Contact Us
				</h2>
				<p className="text-center text-base lg:text-start">
					If you have any questions or concerns about this Privacy
					Policy or our privacy practices, please contact us:
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

export default PrivacyPolicyPage;
