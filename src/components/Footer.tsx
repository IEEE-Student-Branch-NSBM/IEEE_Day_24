import React from "react";
import Image from "next/image";
import WIEImage from "@/assets/WIE Logo Bar - White Redused 2.png";
import IEEBarImage from "@/assets/IEEE_logo_bar.png";
import IEECSLogo from "@/assets/IEEE NSBM CS LOGO REBUILD - WHITE 1.png";
import IEEDAYLogo from "@/assets/IEEEDAYLOGO.png";

// social icons
import FacebookIcon from "@/assets/footer-social/Facebook.svg";
import LinkedinIcon from "@/assets/footer-social/linkedin.svg";
import YoutubeIcon from "@/assets/footer-social/YouTube.svg";

const Footer: React.FC = () => {
	return (
		<div className="bg-[#002E53] sticky">
			<div className="py-5 container max-w-7xl mx-auto w-full pt-10 px-4">
				{/* Three logos in a row, responsive layout */}
				<div className="flex flex-col md:flex-row w-full justify-between items-center space-y-6 md:space-y-0">
				<div className="flex items-center justify-center">
						<Image
							src={IEEBarImage}
							alt="IEEE Bar Logo"
							className="h-auto w-[200px] md:w-[250px]"
						/>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={IEECSLogo}
							alt="IEEE CS Logo"
							className="h-auto w-[120px] md:w-[150px]"
						/>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={WIEImage}
							alt="WIE Logo"
							className="h-auto w-[200px] md:w-[250px]"
						/>
					</div>
				</div>

				{/* Divider */}
				<div className="w-full h-[1.5px] bg-white my-5 rounded-full"></div>

				{/* Title, description + logo, responsive layout */}
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex flex-col justify-center md:w-7/12">
						<h1 className="text-white text-2xl md:text-3xl mb-2 font-sansation">
							Ready to get started?
						</h1>
						<p className="text-white md:w-10/12">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation.
						</p>
					</div>
					<div className="mt-4 md:mt-0 items-center justify-center hidden md:flex">
						<Image
							src={IEEDAYLogo}
							alt="IEEE Day Logo"
							className="h-auto w-[150px] md:w-[150px]"
						/>
					</div>
				</div>

				{/* Social icons */}
				<div className="flex flex-row w-full justify-center gap-6 py-2">
					<div className="flex items-center justify-center">
						<Image
							src={YoutubeIcon}
							alt="YouTube Logo"
							className="h-auto w-[30px]"
						/>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={LinkedinIcon}
							alt="LinkedIn Logo"
							className="h-auto w-[30px]"
						/>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={FacebookIcon}
							alt="Facebook Logo"
							className="h-auto w-[30px]"
						/>
					</div>
				</div>

				{/* Copyright */}
				<div className="flex flex-row justify-center py-3">
					<p className="text-white text-center">
						Powered by{" "}
						<span className="font-semibold">IEEE Computer Society</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
