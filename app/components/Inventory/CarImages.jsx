'use client'; // Ensure this is treated as a client component

import { useState } from 'react';
import Image from 'next/image';

const CarImages = ({ car }) => {
	const [selectedImage, setSelectedImage] = useState(car.image1); // Default to first image

	const handleThumbnailClick = (image) => {
		setSelectedImage(image);
	};

	return (
		<div>
			<div className="mt-6">
				<Image
					src={selectedImage}
					alt="Car Image"
					width={1000}
					height={1000}
					className="w-full h-72 md:h-96 lg:h-109 object-cover overflow-hidden rounded-md drop-shadow-nav"
				/>
			</div>
			<div className="mt-6 flex flex-row justify-between flex-wrap gap-y-2">
				{[
					car.image1,
					car.image2,
					car.image3,
					car.image4,
					car.image5,
					car.image6,
					car.image7,
					car.image8,
					car.image9,
					car.image10,
				].map((image, index) => (
					<Image
						key={index}
						src={image}
						alt={`Car Image ${index + 1}`}
						width={1000}
						height={1000}
						className={`${
							selectedImage === image && 'border-dblue'
						} ${
							selectedImage !== image && 'opacity-60'
						} w-2/7 h-20 sm:h-24 md:h-28 object-cover overflow-hidden rounded-md drop-shadow-nav
            border-2 cursor-pointer transition-opacity ease-out hover:opacity-100`}
						onClick={() => handleThumbnailClick(image)}
					/>
				))}
			</div>
		</div>
	);
};

export default CarImages;
