'use client';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';

const FilterDropdown = ({ optionsList, optionsTitle }) => {
	const [selected, setSelected] = useState(optionsList[0]);
	return (
		<div>
			<h3 className="mt-3 lg:mt-5 font-medium text-base">
				{optionsTitle}
			</h3>
			<Listbox value={selected} onChange={setSelected}>
				<div className="w-full mt-1 relative">
					<Listbox.Button className="w-full rounded-md bg-white ring-lwhite ring-1 py-2 pl-3 pr-10 text-left transition ease-in-out hover:drop-shadow-lg">
						<span className="block truncate text-sm">
							{selected && selected.name}
						</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronUpDownIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute w-full max-w-full max-h-60 rounded-md bg-white py-2 text-sm shadow-lg z-50 ring-lwhite ring-1 mt-1.5 ">
							{optionsList.map((option, optionIdx) => (
								<Listbox.Option
									key={optionIdx}
									className="relative cursor-pointer select-none py-2 pl-10 pr-4 transition ease-out hover:bg-lwhite"
									value={option}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected
														? 'font-medium'
														: 'font-normal'
												}`}
											>
												{option.name}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
													<CheckIcon
														className="h-5 w-5"
														aria-hidden="true"
													/>
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

export default FilterDropdown;
