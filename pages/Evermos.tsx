"use client";
import { CustomButton } from "@/elements";
import Image from "next/image";
import React from "react";

const Evermos = () => {
	const handleScroll = () => {
		const nextSection = document.getElementById("discover-catalog");

		if (nextSection) {
			nextSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title text-ever-green">
					Cari yang kamu butuhin dengan mudah, semudah dia lupain kamu!
				</h1>
				<p className="hero__subtitle">Scroll - scroll aja ya di bawah ^,^</p>
				<CustomButton
					title="Mulai Yuk.."
					containerStyles="bg-ever-green text-white hover:bg-white hover:text-ever-green rounded-full mt-10"
					textStyles="text-ever-yerrow"
					handleClick={handleScroll}
				/>
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<Image
						src="/product-catalog/hero.png"
						alt="hero"
						fill
						className="object-contain"
					/>
				</div>
				<div className="hero__image-overlay" />
			</div>
		</div>
	);
};

export default Evermos;
