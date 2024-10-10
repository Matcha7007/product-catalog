import { CarCard, CustomFilter, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { ShowMore } from "@/elements";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import React from "react";

export default async function ProductCatalogue({ searchParams }: HomeProps) {
	const { manufacturer, year, model, fuel, limit } = searchParams;
	const allCars = await fetchCars({
		manufacturer: manufacturer || "",
		year: year || 2022,
		fuel: fuel || "",
		limit: limit || 10,
		model: model || "",
	});
	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<div className="mt-12 padding-x padding-y max-width" id="discover-catalog">
			<div className="home__text-container">
				<h1 className="text-4xl font-extrabold">Katalog Produk</h1>
				<p>Cari produk yang kamu suka!</p>
			</div>

			<div className="home__filters">
				<SearchBar />
				<div className="home__filter-container">
					<CustomFilter title="fuel" options={fuels} />
					<CustomFilter title="year" options={yearsOfProduction} />
				</div>
			</div>
			{!isDataEmpty ? (
				<section>
					<div className="home__cars-wrapper">
						{allCars.map((car) => (
							<CarCard car={car} />
						))}
					</div>

					<ShowMore
						pageNumber={(searchParams.limit || 10) / 10}
						isNext={(searchParams.limit || 10) > allCars.length}
					/>
				</section>
			) : (
				<div className="home__error-container">
					<h2 className="text-black text-xl font-bold">
						Yaah, gada data mobilnyaa
					</h2>
					<p>{allCars?.message}</p>
				</div>
			)}
		</div>
	);
}
