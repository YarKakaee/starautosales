export const metadata = {
	title: 'Accessibility Statement | Star Auto Sales | High Quality Used Cars in London',
	description:
		'Star Auto Sales is committed to providing an accessible website for all users. Learn more about our efforts to ensure a user-friendly experience for individuals with disabilities.',
};

const AccessibilityPage = () => {
	return (
		<main className={`bg-lwhite`}>
			<section className="pt-36 px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 py-28 bg-lwhite text-dblue lg:pt-44">
				<h1 className="text-center text-4xl sm:text-4xl md:text-4xl mt-7 mb-8 font-black lg:text-start">
					Accessibility Statement
				</h1>
				<p className="text-center text-base lg:text-start">
					Star Auto Sales is committed to ensuring digital
					accessibility for people with disabilities. We are
					continually improving the user experience for everyone and
					applying the relevant accessibility standards.
				</p>
				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Accessibility Guidelines
				</h2>
				<p className="text-center text-base lg:text-start">
					We strive to make our website accessible to individuals of
					all abilities. We have implemented the following guidelines
					to ensure accessibility:
				</p>

				<ul className="list-disc ml-12 mt-5 text-start">
					<li>
						Adhering to the Web Content Accessibility Guidelines
						(WCAG) 2.1 level AA standards.
					</li>
					<li>
						Providing alternative text descriptions for images and
						other non-text elements.
					</li>
					<li>
						Using clear and descriptive headings and page
						structures.
					</li>
					<li>Ensuring color contrast and readability.</li>
					<li>
						Supporting keyboard navigation and focus indicators.
					</li>
					<li>
						Providing closed captioning or transcripts for
						multimedia content.
					</li>
					<li>
						Ensuring compatibility with screen readers and assistive
						technologies.
					</li>
				</ul>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Feedback
				</h2>
				<p className="text-center text-base lg:text-start">
					We welcome your feedback on the accessibility of our
					website. If you have any suggestions or encounter any
					accessibility barriers, please let us know:
				</p>
				<div className="pt-4">
					<strong>Email:</strong> starautosalesinfo@gmail.com
					<br />
					<strong>Phone:</strong> (519) 701-2378
				</div>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Continual Improvement
				</h2>
				<p className="text-center text-base lg:text-start">
					We are committed to providing a positive user experience and
					will continue to assess and improve the accessibility of our
					website. Accessibility is an ongoing effort, and we
					appreciate your understanding and support.
				</p>

				<h2 className="text-center text-xl md:text-2xl mt-6 mb-4 font-extrabold lg:text-start">
					Third-Party Content
				</h2>
				<p className="text-center text-base lg:text-start">
					While we strive to ensure accessibility on our website, we
					may occasionally feature third-party content or links to
					external websites that are not fully accessible. We cannot
					guarantee the accessibility of such content or websites and
					are not responsible for their accessibility compliance.
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

export default AccessibilityPage;
