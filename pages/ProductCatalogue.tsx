"use client";

import { CarCard, CustomFilter, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { ShowMore } from "@/elements";
import { fetchCars } from "@/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductCatalogue() {
	const [allCars, setAllCars] = useState([]);
	const [loading, setLoading] = useState(false);

	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState("");
	const [fuel, setFuel] = useState("");
	const [year, setYear] = useState(2022);
	const [limit, setLimit] = useState(10);

	const [error, setError] = useState("");

	const getCars = async () => {
		setLoading(true);
		try {
			const result = await fetchCars({
				manufacturer: manufacturer || "",
				year: year || 2022,
				fuel: fuel || "",
				limit: limit || 10,
				model: model || "",
			});

			setAllCars(result);
		} catch (error) {
			setError("Waah ada masalah saat ngambil data :)");
			console.warn(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getCars();
	}, [manufacturer, year, model, fuel, limit]);

	return (
		<div className="mt-12 padding-x padding-y max-width" id="discover-catalog">
			<div className="home__text-container">
				<h1 className="text-4xl font-extrabold text-ever-green">
					Katalog Produk
				</h1>
				<p>Cari produk yang kamu suka!</p>
			</div>

			<div className="home__filters">
				<SearchBar setManufacturer={setManufacturer} setModel={setModel} />
				<div className="home__filter-container">
					<CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
					<CustomFilter
						title="year"
						options={yearsOfProduction}
						setFilter={setYear}
					/>
				</div>
			</div>
			{allCars.length > 0 ? (
				<section>
					<div className="home__cars-wrapper">
						{allCars.map((car) => (
							<CarCard car={car} />
						))}
					</div>

					{loading && (
						<div className="mt-16 w-full flex-center">
							<Image
								src="/product-catalog/loader.svg"
								alt="loader"
								width={50}
								height={50}
								className="object-contain"
							/>
						</div>
					)}

					<ShowMore
						setLimit={setLimit}
						pageNumber={limit / 10}
						isNext={limit > allCars.length}
					/>
				</section>
			) : (
				!loading && (
					<div className="home__error-container">
						<h2 className="text-black text-xl font-bold">
							Yaah, gada data mobilnyaa
						</h2>
						<p>{error}</p>
					</div>
				)
			)}
		</div>
	);
}
