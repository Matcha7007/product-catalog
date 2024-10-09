"use client";

import { CustomFilter, SearchBar } from "@/components";
import React from "react";

const ProductCatalogue = () => {
	return (
		<div className="mt-12 padding-x padding-y max-width" id="discover-catalog">
			<div className="home__text-container">
				<h1 className="text-4xl font-extrabold">Katalog Produk</h1>
				<p>Cari produk yang kamu suka!</p>
			</div>

			<div className="home__filters">
				<SearchBar />
				<div className="home__filter-container">
					<CustomFilter title="fuel" />
					<CustomFilter title="year" />
				</div>
			</div>
		</div>
	);
};

export default ProductCatalogue;
