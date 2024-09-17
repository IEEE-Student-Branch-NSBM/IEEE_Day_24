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
		<div className="bg-[#002E53]">
			<div className="py-5 container max-w-7xl mx-auto w-full pt-10">
				{/* three logo in row in space between*/}
				<div className="flex flex-row w-full justify-between">
					<div className="flex items-center justify-center">
						<Image src={WIEImage} alt="WIE Logo" className="h-auto w-[250px]" />
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={IEECSLogo}
							alt="WIE Logo"
							className="h-auto w-[150px]"
						/>
					</div>

					<div className="flex items-center justify-center">
						<Image
							src={IEEBarImage}
							alt="WIE Logo"
							className="h-auto w-[250px]"
						/>
					</div>
				</div>

				{/* devider */}
				<div className="w-full h-[1.5px] bg-white my-5 rounded-full"></div>

				{/* title , description + logo */}
				<div className="flex flex-row justify-between">
					<div className="flex flex-col justify-center">
						<h1 className="text-white text-3xl mb-2 font-sansation">
							Ready to get started?
						</h1>
						<p className="text-white w-5/12">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation
						</p>
					</div>
					<div className="items-center justify-center md:block hidden">
						<Image
							src={IEEDAYLogo}
							alt="WIE Logo"
							className="h-auto w-[200px]"
						/>
					</div>
				</div>

				{/* social icons */}
				<div className="flex flex-row w-full justify-center gap-4 mb-2">
					<div className="flex items-center justify-center">
						<Image
							src={YoutubeIcon}
							alt="WIE Logo"
							className="h-auto w-[30px]"
						/>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={LinkedinIcon}
							alt="WIE Logo"
							className="h-auto w-[30px]"
						/>
					</div>

					<div className="flex items-center justify-center">
						<Image
							src={FacebookIcon}
							alt="WIE Logo"
							className="h-auto w-[30px]"
						/>
					</div>
				</div>

				{/* copyright */}
				<div className="flex flex-row justify-center py-3">
					<p className="text-white">
						Powered by{" "}
						<span className="font-semibold">IEEE Computer Society</span>{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
