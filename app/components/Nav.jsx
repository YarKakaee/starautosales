'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Nav = () => {
	const currentPath = usePathname();

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-24 lg:px-32 xl:px-48 2xl:px-64 flex justify-between items-center py-1 bg-dblue text-lwhite drop-shadow-nav">
			<Link href={'/'}>
				<Image
					width={155}
					height={155}
					className=""
					src="/assets/logo.png"
					alt="logo"
				/>
			</Link>
			<div className="relative sm:hidden">
				<button
					className="block ml-4 p-2 rounded-md bg-lwhite text-dblue"
					onClick={toggleMenu}
				>
					{menuOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
				{menuOpen && (
					<div className="absolute mt-2 right-0 w-full bg-white py-2 px-20 shadow-xl rounded-md">
						<ul className="flex flex-col items-center gap-4">
							<Link href={'/'}>
								<li className="relative group">
									<h3 className="font-semibold duration-300 text-dblue">
										Home
									</h3>
									<div
										className={`${
											currentPath !== '/'
												? ' scale-x-0 group-hover:scale-x-100'
												: null
										} absolute w-full bg-dblue h-0.5 top-6 left-0 transition-all duration-300 transform`}
									></div>
								</li>
							</Link>
							<Link href={'/vehicles'}>
								<li className="relative group">
									<h3 className="font-semibold duration-300 text-dblue">
										Inventory
									</h3>
									<div
										className={`${
											currentPath !== '/vehicles'
												? ' scale-x-0 group-hover:scale-x-100'
												: null
										} absolute w-full bg-dblue h-0.5 top-6 left-0 transition-all duration-300 transform`}
									></div>{' '}
								</li>
							</Link>
							<Link href={'/about'}>
								<li className="relative group">
									<h3 className="font-semibold duration-300 text-dblue">
										About
									</h3>
									<div
										className={`${
											currentPath !== 'about'
												? ' scale-x-0 group-hover:scale-x-100'
												: null
										} absolute w-full bg-dblue h-0.5 top-6 left-0 transition-all duration-300 transform`}
									></div>{' '}
								</li>
							</Link>
							<Link href={'/contact'}>
								<li className="relative group">
									<h3 className="font-semibold duration-300 text-dblue">
										Contact
									</h3>
									<div
										className={`${
											currentPath !== '/contact'
												? ' scale-x-0 group-hover:scale-x-100'
												: null
										} absolute w-full bg-dblue h-0.5 top-6 left-0 transition-all duration-300 transform`}
									></div>{' '}
								</li>
							</Link>
						</ul>
					</div>
				)}
			</div>
			<ul className="hidden sm:flex items-center gap-4 sm:gap-14">
				<Link href={'/'}>
					<li className="relative group">
						<h3 className="font-semibold duration-300">Home</h3>
						<div
							className={`${
								currentPath !== '/'
									? ' scale-x-0 group-hover:scale-x-100'
									: null
							} absolute w-full bg-lwhite h-0.5 top-6 left-0 transition-all duration-300 transform`}
						></div>
					</li>
				</Link>
				<Link href={'/vehicles'}>
					<li className="relative group">
						<h3 className="font-semibold duration-300">
							Inventory
						</h3>
						<div
							className={`${
								currentPath !== '/vehicles'
									? ' scale-x-0 group-hover:scale-x-100'
									: null
							} absolute w-full bg-lwhite h-0.5 top-6 left-0 transition-all duration-300 transform`}
						></div>
					</li>
				</Link>
				<Link href={'/about'}>
					<li className="relative group">
						<h3 className="font-semibold duration-300">About</h3>
						<div
							className={`${
								currentPath !== '/about'
									? ' scale-x-0 group-hover:scale-x-100'
									: null
							} absolute w-full bg-lwhite h-0.5 top-6 left-0 transition-all duration-300 transform`}
						></div>
					</li>
				</Link>
				<Link href={'/contact'}>
					<li className="relative group">
						<h3 className="font-semibold duration-300">Contact</h3>
						<div
							className={`${
								currentPath !== '/contact'
									? ' scale-x-0 group-hover:scale-x-100'
									: null
							} absolute w-full bg-lwhite h-0.5 top-6 left-0 transition-all duration-300 transform`}
						></div>
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
