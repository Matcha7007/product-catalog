"use client";
import React from "react";
import { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchButton } from "@/elements";
import { SearchBarProps } from "@/types";

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
	const [searchManufacturer, setSearchManuFacturer] = useState("");
	const [searchModel, setSearchModel] = useState("");

	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
			return alert("Please provide some input");
		}

		setModel(searchModel);
		setManufacturer(searchManufacturer);
	};

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					selected={searchManufacturer}
					setSelected={setSearchManuFacturer}
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<div className="searchbar__item">
				<Image
					src="/model-icon.png"
					width={25}
					height={25}
					className="absolute w-[20px] h-[20px] ml-4"
					alt="car model"
				/>
				<input
					type="text"
					name="model"
					value={searchModel}
					onChange={(e) => setSearchModel(e.target.value)}
					placeholder="Model"
					className="searchbar__input"
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<SearchButton otherClasses="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
