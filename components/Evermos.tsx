"use client";
import React from "react";
import CustomButton from "./button/CustomButton";

const Evermos = () => {
	const handleScroll = () => {};

	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">
					Cari yang kamu butuhin dengan mudah, semudah dia lupain kamu!
				</h1>
				<p className="hero__subtitle">Scroll - scroll aja ya di bawah ^,^</p>
				<CustomButton
					title="Explore Product"
					containerStyles="bg-primary-blue text-white rounded-full mt-10"
					handleClick={handleScroll}
				/>
			</div>
			<div className="hero__image-container">
				<div className="hero__image"></div>
			</div>
		</div>
	);
};

export default Evermos;
