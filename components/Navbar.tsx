import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "@/elements";

const Navbar = () => {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
				<Link href="/" className="flex justify-center">
					<Image
						src="/logo.png"
						alt="Product Catalog Logo"
						width={118}
						height={18}
						className="object-contain"
					/>
				</Link>
				<a
					href="https://github.com/Matcha7007/product-catalog/tree/batch-1"
					target="_blank"
					rel="noopener noreferrer"
					className="flex justify-center items-center text-ever-green rounded-full bg-white min-w-[110px] min-h-[40px] hover:border-ever-green">
					<Image
						src="/github.svg"
						width={30}
						height={30}
						alt="Github Logo"
						className="w-6 h-6 mr-2"
					/>
					Github
				</a>
			</nav>
		</header>
	);
};

export default Navbar;
