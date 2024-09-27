import type React from "react";
import Image from "next/image";
import WIEImage from "@/assets/wie-logo.png";
import IEEBarImage from "@/assets/sb-logo.png";
import IEECSLogo from "@/assets/cs-logo.png";
import IEEDAYLogo from "@/assets/IEEEDAYLOGO.png";

// social icons
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
	return (
		<div className="bg-primary sticky">
			<div className="py-5 container max-w-7xl mx-auto w-full pt-10 px-4">
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
							className="h-auto w-[110px]"
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
				<div className="w-full h-[1.5px] bg-white my-5 rounded-full" />

				{/* Title, description + logo, responsive layout */}
				<div className="flex flex-col md:flex-row justify-between items-center p-3 sm:px-5 sm:p-0">
					<div className="flex flex-col justify-center md:w-7/12 md:pb-5">
						<h1 className="text-white text-2xl md:text-3xl mb-2 font-sansation">
							Ready to get started?
						</h1>
						<p className="text-white md:w-10/12 text-justify lg:pr-40">
							Join IEEE Day 2024 with the IEEE Student Branch of NSBM!
							Experience innovation, engaging activities, and powerful talks.
							Connect with tech enthusiasts and shape the future. Limited spots
							grab yours now!
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
					{/* YouTube Icon */}
					<div className="flex items-center justify-center">
						<a
							href="https://www.youtube.com/@ieeensbm"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaYoutube size={29} />
						</a>
					</div>
					{/* LinkedIn Icon */}
					<div className="flex items-center justify-center">
						<a
							href="https://www.linkedin.com/company/ieeesbnsbm/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedinIn size={26} />
						</a>
					</div>
					{/* Facebook Icon */}
					<div className="flex items-center justify-center">
						<a
							href="https://www.facebook.com/ieeensbm"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook size={26} />
						</a>
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
