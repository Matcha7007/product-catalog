"use client";

import {
	Combobox,
	ComboboxButton,
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
	Transition,
} from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
	manufacturer,
	setManufacturer,
}: SearchManufacturerProps) => {
	const [quesry, setQuesry] = useState("");
	const filteredManufacturers =
		quesry === ""
			? manufacturers
			: manufacturers.filter((item) =>
					item
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(quesry.toLowerCase().replace(/\s+/g, ""))
			  );

	return (
		<div className="search-manufacturer">
			<Combobox value={manufacturer} onChange={setManufacturer}>
				<div className="relative w-full">
					<ComboboxButton className="absolute top-[14px]">
						<Image
							src="/car-logo.svg"
							width={20}
							height={20}
							className="ml-4"
							alt="logo"
						/>
					</ComboboxButton>
					<ComboboxInput
						className="search-manufacturer__input"
						placeholder="Volkswagen"
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuesry(e.target.value)}></ComboboxInput>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuesry("")}>
						<ComboboxOptions>
							{filteredManufacturers.map((item) => (
								<ComboboxOption
									value={item}
									key={item}
									className={({ active }) => `
										relative search-manufacturer__option ${
											active ? "bg-primary-blue text-white" : "text-gray-900"
										}
										`}>
									{({ selected, active }) => (
										<>
											<span
												className={`block truncate ${
													selected ? "font-medium" : "font-normal"
												}`}>
												{item}
											</span>
											{selected ? (
												<span
													className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
														active ? "text-white" : "text-pribg-primary-purple"
													}`}></span>
											) : null}
										</>
									)}
								</ComboboxOption>
							))}
						</ComboboxOptions>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

export default SearchManufacturer;
