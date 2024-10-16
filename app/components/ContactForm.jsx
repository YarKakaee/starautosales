'use client';

import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
	const [state, handleSubmit] = useForm('mayzgavv');

	if (state.succeeded) {
		return (
			<p className="text-center text-lg mb-8 sm:text-4xl md:text-xl font-bold">
				Thanks for reaching out!
			</p>
		);
	}

	return (
		<div className="max-w-2xl mx-auto rounded-md drop-shadow-4xl bg-white p-5">
			{state.submitting ? (
				<p className="text-center text-lg mb-8 sm:text-4xl md:text-xl font-bold">
					Submitting...
				</p>
			) : (
				<div>
					<form onSubmit={handleSubmit}>
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
						<input
							type="text"
							placeholder="Subject"
							name="subject"
							className="w-full px-4 py-3 text-sm mb-4 border border-lwhite rounded-md focus:outline-dblue"
						/>
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
							disabled={state.submitting}
							className="bg-lred text-lwhite py-3 px-6 rounded-md text-base font-semibold transition duration-300 uppercase drop-shadow-3xl hover:drop-shadow-4xl ease-out w-full"
						>
							Submit
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default ContactForm;
