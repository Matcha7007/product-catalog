// import { Evermos, ProductCatalogue } from "@/pages";

import Evermos from "@/pages/Evermos";
import ProductCatalogue from "@/pages/ProductCatalogue";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<Evermos />
			<ProductCatalogue />
		</main>
	);
}
