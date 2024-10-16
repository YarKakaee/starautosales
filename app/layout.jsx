import AuthProvider from './auth/Provider';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Star Auto Sales | Find Your Perfect Ride | High Quality Used Cars in London',
	description:
		'Unlock a world of exceptional pre-owned cars at Star Auto Sales. Explore our inventory of high-quality vehicles, handpicked for their reliability and value. Find your perfect ride and start driving your dreams today!',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`bg-lwhite ${inter.className}`}>
				<AuthProvider>
					<Nav />
					{children}
					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
