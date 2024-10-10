import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
	return (
		<footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
				<div className="flex flex-col justify-start items-start gap-6">
					<Image
						src="/logo.png"
						alt="logo"
						width={118}
						height={18}
						className="object-contain"
					/>
					<p className="text-base text-gray-700">
						ProductCatalog 2024 <br />
						All Rights Reserved &copy;
					</p>
				</div>
				<div className="footer__links">
					{footerLinks.map((link) => (
						<div key={link.title} className="footer__link">
							<h3 className="font-bold">{link.title}</h3>
							{link.links.map((item) => (
								<Link
									key={item.title}
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex text-gray-500 hover:text-ever-green">
									<Image
										src={item.logo}
										width={30}
										height={30}
										alt="Github Logo"
										className="w-6 h-6 mr-2"
									/>
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
				<p>@2024 ProductCatalog. All Rights Reserved</p>
				<div className="footer__copyrights-link">
					<Link href="/" className="text-gray-500 hover:text-ever-green">
						Privacy Policy
					</Link>
					<Link href="/" className="text-gray-500 hover:text-ever-green">
						Terms of Use
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
