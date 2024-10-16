'use client';

import Image from 'next/image';
import Link from 'next/link';

const Card = ({ car }) => {
	const {
		listingId,
		year,
		make,
		model,
		transmission,
		body,
		eColor,
		mileage,
		price,
		image1,
		safety,
	} = car;
	return (
		<div className="relative w-full lg:w-76 h-96 bg-white rounded-md drop-shadow-3xl p-5 cursor-pointer text-dblue hover:drop-shadow-4xl transition ease-in-out mb-12">
			<Link href={`/vehicles/${listingId}`}>
				<div className="h-44 overflow-hidden bg-white top-0 left-0 right-0 absolute rounded-tl-md rounded-tr-md">
					<Image
						src={image1}
						alt="Card Image"
						width={1000}
						height={1000}
						className="w-full h-full object-cover overflow-hidden transition ease-in-out hover:scale-105"
					/>
				</div>
				<div className="flex flex-col justify-between mt-40">
					<div className="flex space-x-1.5">
						<h2 className="text-lg text-lgrey font-medium mt-4">
							{year}
						</h2>
						<h2 className="text-lg text-dblue font-extrabold mt-4">
							{make}
						</h2>
						<h2 className="text-lg text-dblue font-extrabold mt-4">
							{model}
						</h2>
					</div>
					<div className="flex mt-5 justify-between">
						<div className="flex items-center space-x-2 text-lgrey">
							<Image
								src="/assets/icons/manual-transmission.png"
								alt="Transmission Icon"
								width={15}
								height={15}
								className=""
							/>
							<p className="text-base">{transmission}</p>
						</div>
						<div className="flex items-center space-x-2 text-lgrey">
							<Image
								src="/assets/icons/car.png"
								alt="Body Style Icon"
								width={23}
								height={20}
								className="-mb-1"
							/>
							<p className="text-base">{body}</p>
						</div>
					</div>
					<div className="flex mt-5 justify-between">
						<div className="flex items-center space-x-2 text-lgrey">
							<Image
								src="/assets/icons/paint-palette.png"
								alt="Paint Icon"
								width={15}
								height={15}
								className=""
							/>
							<p className="text-base">{eColor}</p>
						</div>
						<div className="flex items-center space-x-2 text-lgrey">
							<Image
								src="/assets/icons/gauge.png"
								alt="Mileage Icon"
								width={22}
								height={22}
								className=""
							/>
							<p className="text-base">
								{mileage.toLocaleString()} km
							</p>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex flex-row">
							<h2 className="text-2xl text-dblue font-extrabold mt-5">
								$ {price.toLocaleString()}
							</h2>
							<h2 className="text-sm text-dblue mt-7 ml-2">
								+ HST
							</h2>
						</div>
						<div className="flex flex-row">
							<h2
								className={`mt-5 text-sm font-semibold p-1.5 px-3 rounded-md  ${
									safety === 'Certified'
										? 'ring-lgreen text-lgreen ring-1 ring-opacity-70'
										: 'ring-lred text-lred'
								}  ring-1 ring-opacity-70`}
							>
								{safety}
							</h2>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
