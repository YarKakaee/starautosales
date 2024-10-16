import Link from 'next/link';

export const metadata = {
	title: '404 - Page Not Found | Find Your Perfect Ride | High Quality Used Cars in London',
	description:
		"We couldn't find the page you were looking for. It may have been moved or deleted, or the URL might be misspelled.",
};

const NotFound = () => {
	return (
		<main className={`bg-lwhite`}>
			<div className="flex flex-col items-center justify-center h-screen bg-lwhite">
				<h1 className="text-3xl font-extrabold text-dblue mb-4">
					404 - Page Not Found
				</h1>
				<p className="text-sm font-normal text-dblue mb-6 sm:text-lg">
					Oops! The page you are looking for does not exist.
				</p>
				<Link
					href="/"
					className="text-lred bg-transparent border border-lred hover:bg-lred hover:text-lwhite py-2 px-6 rounded-md text-base font-semibold transition duration-300"
				>
					Back to Home
				</Link>
			</div>
		</main>
	);
};

export default NotFound;
