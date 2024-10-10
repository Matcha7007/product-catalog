// import { Evermos, ProductCatalogue } from "@/pages";

import Evermos from "@/pages/Evermos";
import ProductCatalogue from "@/pages/ProductCatalogue";
import { HomeProps } from "@/types";

export default function Home({ searchParams }: HomeProps) {
	return (
		<main className="overflow-hidden">
			<Evermos />
			<ProductCatalogue searchParams={searchParams} />
		</main>
	);
}
