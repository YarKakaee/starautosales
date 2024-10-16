'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const AdminDashboard = () => {
	const { status, data: session } = useSession();

	return (
		<section className="px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 pb-6 bg-lwhite text-dblue pt-40">
			<div>
				{/* Flex container for heading and buttons */}
				<div className="sm:flex justify-between items-center mb-80">
					<h1 className="text-3xl mt-5 mb-3 md:my-4 font-bold 2xl:text-4xl">
						Admin Dashboard
					</h1>

					{/* Flex container for buttons */}
					<div className="flex space-x-4">
						{session?.user?.email ===
							'starautosalesinfo@gmail.com' && (
							<button className="bg-dblue text-lwhite py-2 px-6 rounded-md text-sm sm:text-md font-semibold transition duration-300 uppercase drop-shadow-3xl hover:drop-shadow-4xl ease-out">
								<Link href="/admin/addvehicle">
									Add Vehicle
								</Link>
							</button>
						)}
						{status === 'authenticated' && (
							<button className="bg-lred text-lwhite py-2 px-6 rounded-md text-sm sm:text-md font-semibold transition duration-300 uppercase drop-shadow-3xl hover:drop-shadow-4xl ease-out">
								<Link href="/api/auth/signout">Sign Out</Link>
							</button>
						)}
						{status === 'unauthenticated' && (
							<button className="bg-dblue text-lwhite py-3 px-8 rounded-md text-md font-semibold transition duration-300 uppercase drop-shadow-3xl hover:drop-shadow-4xl ease-out">
								<Link href="/api/auth/signin">Login</Link>
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AdminDashboard;
