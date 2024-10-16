'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Spinner from '../Spinner';

const AddUpdateVehicle = ({ car }) => {
	const [currentCarId, setCurrentCarId] = useState('');
	const [isSubmitting, setSubmitting] = useState(false);
	const [isDeleting, setDeleting] = useState(false);

	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
	});

	useEffect(() => {
		const fetchLastCarId = async () => {
			try {
				const response = await axios.get('/api/findLastCar');
				const { lastCarId } = response.data;
				setCurrentCarId(lastCarId + 1);
			} catch (error) {
				console.error('Error fetching last car ID:', error);
			}
		};

		fetchLastCarId();
	}, []);

	// Validation function for image URLs
	const imageUrlValidation = (url) => {
		const regex =
			/^https:\/\/i\.imgur\.com\/[a-zA-Z0-9]+(\.jpg|\.jpeg|\.png)$/;
		return (
			regex.test(url) ||
			'Image URL must start with https://i.imgur.com and end with .jpg, .jpeg, or .png'
		);
	};

	// Validation function for number fields
	const isNumber = (value) => !isNaN(value) || 'This field must be a number';

	const onSubmit = handleSubmit(async (data) => {
		// Convert the necessary fields to integers
		const vehicleData = {
			...data,
			price: parseInt(data.price, 10),
			year: parseInt(data.year, 10),
			mileage: parseInt(data.mileage, 10),
			seats: parseInt(data.seats, 10),
			doors: parseInt(data.doors, 10),
		};
		setSubmitting(true);
		if (car) axios.patch('/api/' + car.listingId, vehicleData);
		else await axios.post('/api/createCar', vehicleData);
		router.push('/admin');
		router.refresh();
	});

	const deleteCar = async () => {
		try {
			setDeleting(true);
			await axios.delete('/api/' + car.listingId);
			router.push('/admin');
			router.refresh();
		} catch (error) {
			setDeleting(false);
		}
	};

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">
				{car ? 'Update Vehicle' : 'Add Vehicle'}
			</h1>

			<form
				className="max-w-2xl mx-auto lg:mx-0 rounded-md drop-shadow-4xl bg-white p-6 mt-8 mb-20"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="border border-lwhite w-full text-dblue font-bold rounded-md px-4 py-3 text-center mb-4">
					<h1>
						Stock ID: SAS
						{car
							? car.stockId < 10
								? `00${car.stockId}`
								: car.stockId < 100
								? `0${car.stockId}`
								: car.stockId
							: currentCarId < 10
							? `00${currentCarId}`
							: currentCarId < 100
							? `0${currentCarId}`
							: currentCarId}
					</h1>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<input
							defaultValue={car?.make}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Make"
							{...register('make', {
								required: 'Make is required',
							})}
						/>
						{errors.make && (
							<p className="text-red-500">
								{errors.make.message}
							</p>
						)}

						<input
							defaultValue={car?.price}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Price"
							{...register('price', {
								required: 'Price is required',
								validate: isNumber,
							})}
						/>
						{errors.price && (
							<p className="text-red-500">
								{errors.price.message}
							</p>
						)}

						<input
							defaultValue={car?.transmission}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Transmission"
							{...register('transmission', {
								required: 'Transmission is required',
							})}
						/>
						{errors.transmission && (
							<p className="text-red-500">
								{errors.transmission.message}
							</p>
						)}

						<input
							defaultValue={car?.eColor}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Exterior Color"
							{...register('eColor', {
								required: 'Exterior Color is required',
							})}
						/>
						{errors.eColor && (
							<p className="text-red-500">
								{errors.eColor.message}
							</p>
						)}

						<input
							defaultValue={car?.body}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Body Type"
							{...register('body', {
								required: 'Body Type is required',
							})}
						/>
						{errors.body && (
							<p className="text-red-500">
								{errors.body.message}
							</p>
						)}

						<input
							defaultValue={car?.seats}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="# of Seats"
							{...register('seats', {
								required: 'Seats are required',
								validate: isNumber,
							})}
						/>
						{errors.seats && (
							<p className="text-red-500">
								{errors.seats.message}
							</p>
						)}

						<input
							defaultValue={car?.engine}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Engine"
							{...register('engine', {
								required: 'Engine is required',
							})}
						/>
						{errors.engine && (
							<p className="text-red-500">
								{errors.engine.message}
							</p>
						)}
					</div>
					<div>
						<input
							defaultValue={car?.model}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Model"
							{...register('model', {
								required: 'Model is required',
							})}
						/>
						{errors.model && (
							<p className="text-red-500">
								{errors.model.message}
							</p>
						)}

						<input
							defaultValue={car?.year}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Year"
							{...register('year', {
								required: 'Year is required',
								validate: isNumber,
							})}
						/>
						{errors.year && (
							<p className="text-red-500">
								{errors.year.message}
							</p>
						)}

						<input
							defaultValue={car?.mileage}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Mileage"
							{...register('mileage', {
								required: 'Mileage is required',
								validate: isNumber,
							})}
						/>
						{errors.mileage && (
							<p className="text-red-500">
								{errors.mileage.message}
							</p>
						)}

						<input
							defaultValue={car?.iColor}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Interior Color"
							{...register('iColor', {
								required: 'Interior Color is required',
							})}
						/>
						{errors.iColor && (
							<p className="text-red-500">
								{errors.iColor.message}
							</p>
						)}

						<input
							defaultValue={car?.fuel}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="Fuel"
							{...register('fuel', {
								required: 'Fuel is required',
							})}
						/>
						{errors.fuel && (
							<p className="text-red-500">
								{errors.fuel.message}
							</p>
						)}

						<input
							defaultValue={car?.doors}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="# of Doors"
							{...register('doors', {
								required: 'Doors are required',
								validate: isNumber,
							})}
						/>
						{errors.doors && (
							<p className="text-red-500">
								{errors.doors.message}
							</p>
						)}

						<input
							defaultValue={car?.vin}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
							placeholder="VIN"
							{...register('vin', {
								required: 'VIN is required',
							})}
						/>
						{errors.vin && (
							<p className="text-red-500">{errors.vin.message}</p>
						)}
					</div>
				</div>

				<input
					defaultValue={car?.safety}
					className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
					placeholder="Safety"
					{...register('safety', {
						required: 'Safety information is required',
					})}
				/>
				{errors.safety && (
					<p className="text-red-500">{errors.safety.message}</p>
				)}

				<h3 className="mt-1 mb-3 font-bold text-center text-lg">
					Vehicle Images
				</h3>
				<h3 className="mb-5 font-medium text-center text-sm text-white rounded-md bg-dblue py-1.5 px-2.5 w-fit mx-auto">
					Copy POST link - URL should have i.imgur.com in it
				</h3>

				<div className="grid grid-cols-2 gap-4">
					<input
						defaultValue={car?.image1}
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						placeholder="Main Image URL"
						{...register('image1', {
							validate: imageUrlValidation,
						})}
					/>
					{errors.image1 && (
						<p className="text-red-500">{errors.image1.message}</p>
					)}

					{/* Repeat for the other image fields */}
					<input
						defaultValue={car?.image2}
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						placeholder="Image #2 URL"
						{...register('image2', {
							validate: imageUrlValidation,
						})}
					/>
					{errors.image2 && (
						<p className="text-red-500">{errors.image2.message}</p>
					)}

					<input
						defaultValue={car?.image3}
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						placeholder="Image #3 URL"
						{...register('image3', {
							validate: imageUrlValidation,
						})}
					/>
					{errors.image3 && (
						<p className="text-red-500">{errors.image3.message}</p>
					)}

					<input
						defaultValue={car?.image4}
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						placeholder="Image #4 URL"
						{...register('image4', {
							validate: imageUrlValidation,
						})}
					/>
					{errors.image4 && (
						<p className="text-red-500">{errors.image4.message}</p>
					)}

					<input
						defaultValue={car?.image5}
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						placeholder="Image #5 URL"
						{...register('image5', {
							validate: imageUrlValidation,
						})}
					/>
					{errors.image5 && (
						<p className="text-red-500">{errors.image5.message}</p>
					)}

					<input
						defaultValue={car?.image6}
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						placeholder="Image #6 URL"
						{...register('image6', {
							validate: imageUrlValidation,
						})}
					/>
					{errors.image6 && (
						<p className="text-red-500">{errors.image6.message}</p>
					)}

					<input
						defaultValue={car?.image7}
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						placeholder="Image #7 URL"
						{...register('image7', {
							validate: imageUrlValidation,
						})}
					/>
					{errors.image7 && (
						<p className="text-red-500">{errors.image7.message}</p>
					)}

					<input
						defaultValue={car?.image8}
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						placeholder="Image #8 URL"
						{...register('image8', {
							validate: imageUrlValidation,
						})}
					/>
					{errors.image8 && (
						<p className="text-red-500">{errors.image8.message}</p>
					)}

					<input
						defaultValue={car?.image9}
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						placeholder="Image #9 URL"
						{...register('image9', {
							validate: imageUrlValidation,
						})}
					/>
					{errors.image9 && (
						<p className="text-red-500">{errors.image9.message}</p>
					)}

					<input
						defaultValue={car?.image10}
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						placeholder="Image #10 URL"
						{...register('image10', {
							validate: imageUrlValidation,
						})}
					/>
					{errors.image10 && (
						<p className="text-red-500">{errors.image10.message}</p>
					)}
				</div>

				<button
					type="submit"
					className="bg-dblue text-lwhite py-3 px-6 rounded-md text-base font-semibold transition duration-300 drop-shadow-3xl hover:drop-shadow-4xl ease-out w-full mt-2"
				>
					{car ? 'Update Vehicle' : 'Add Vehicle'}{' '}
					{isSubmitting && <Spinner />}
				</button>
				{car && (
					<button
						className="bg-lred text-lwhite py-3 px-6 rounded-md text-base font-semibold transition duration-300 drop-shadow-3xl hover:drop-shadow-4xl ease-out w-full mt-3"
						disabled={isDeleting}
						onClick={deleteCar}
					>
						Delete Vehicle {isDeleting && <Spinner />}
					</button>
				)}
			</form>
		</div>
	);
};

export default AddUpdateVehicle;
