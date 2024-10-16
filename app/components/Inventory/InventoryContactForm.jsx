'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const InventoryContactForm = ({ carData }) => {
	const [state, handleSubmit] = useForm('xnqkqaap');

	const [year, setYearValue] = useState(carData.year);
	const [make, setMakeValue] = useState(carData.make);
	const [model, setModelValue] = useState(carData.model);
	const [listing, setListingValue] = useState(carData.listingId);

	if (state.succeeded) {
		toast.success('Thanks for reaching out!');
	}

	return (
		<div className="rounded-md drop-shadow-4xl bg-white p-5">
			<h1 className="text-xl text-center font-bold mb-5 mt-2">
				Email us about the vehicle
			</h1>

			<div>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col lg:flex-row lg:gap-3">
						<input
							type="text"
							placeholder="Name *"
							name="name"
							required
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						/>
						<input
							type="email"
							placeholder="Email *"
							name="email"
							required
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						/>
						<input
							type="text"
							placeholder="Phone"
							name="phone"
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						/>
					</div>
					<div className="flex flex-col lg:flex-row lg:gap-3">
						<input
							type="text"
							placeholder="Year"
							name="year"
							value={year}
							onChange={(e) => setYearValue(e.target.value)}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						/>
						<input
							type="text"
							placeholder="Make"
							name="make"
							value={make}
							onChange={(e) => setMakeValue(e.target.value)}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						/>
						<input
							type="text"
							placeholder="Model"
							name="model"
							value={model}
							onChange={(e) => setModelValue(e.target.value)}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						/>
						<input
							type="text"
							placeholder="Listing #"
							name="listing"
							value={listing}
							onChange={(e) => setListingValue(e.target.value)}
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						/>
					</div>
					<textarea
						placeholder="Your Message *"
						name="message"
						required
						className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue resize-none"
					></textarea>

					<ValidationError
						prefix="Name"
						field="name"
						errors={state.errors}
						className="text-red-500"
					/>
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
						className="text-red-500"
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
						className="text-red-500"
					/>

					<button
						type="submit"
						className="bg-dblue text-lwhite py-3 px-6 rounded-md text-base font-semibold transition duration-300 uppercase drop-shadow-3xl hover:drop-shadow-4xl ease-out w-full"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default InventoryContactForm;
