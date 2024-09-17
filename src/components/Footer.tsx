import React from "react";
import Image from "next/image";
import WIEImage from "@/assets/WIE Logo Bar - White Redused 2.png";
import IEEBarImage from "@/assets/IEEE_logo_bar.png";
import IEECSLogo from "@/assets/IEEE NSBM CS LOGO REBUILD - WHITE 1.png";
import IEEDAYLogo from "@/assets/IEEEDAYLOGO.png";
import SocialIcons from "@/assets/Group 18761.png";

const Footer: React.FC = () => {
	return (
		<footer className="relative w-full h-[600px] sm:h-[700px] md:h-[410px] lg:h-[410px] bg-[#002E53] p-4 sm:p-6">
			<div className="flex flex-col items-center md:absolute md:w-[150px] md:h-[65px] md:left-1/2 md:transform md:-translate-x-1/2 md:top-[40px]">
				<Image src={IEECSLogo} alt="SB Logo" width={150} height={65} />
			</div>

			<div className="flex flex-col items-center md:absolute md:w-[222px] md:h-[32px] md:left-[255px] md:top-[calc(50%-32px/2-132px)] mt-6 md:mt-0">
				<Image src={IEEBarImage} alt="IEEE Logo" width={222} height={32} />
			</div>

			<div className="flex flex-col items-center md:absolute md:w-[222px] md:h-[32px] md:left-[1190px] md:top-[57px] mt-6 md:mt-0">
				<Image src={WIEImage} alt="WIE Logo" width={222} height={32} />
			</div>

			<div className="absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[1140px] h-0.6 border border-white left-1/2 transform -translate-x-1/2 top-[32.44%]" />

			<div className="absolute left-[5%] right-[5%] top-[25%] sm:top-[35%] md:left-[10.42%] md:right-[63.89%] md:top-[35%]">
				<h3 className="text-white text-[20px] leading-[30px] font-normal text-center md:text-[24px] md:leading-[34px]">
					Ready to get started?
				</h3>
			</div>

			<div className="absolute left-[5%] right-[5%] top-[40%] sm:top-[42%] md:hidden flex justify-center items-center">
				<Image
					src={IEEDAYLogo}
					alt="Your Image"
					width={100}
					height={100}
					className="rounded-lg"
				/>
			</div>

			<div className="absolute left-[19%] right-[19%] top-[50%] sm:top-[60%] md:left-[16.42%] md:right-[63.89%] md:top-[54%] flex justify-center md:justify-start">
				<p className="text-white text-[14px] leading-[20px] font-normal text-center md:text-left">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</div>

			{/* Image for the pc scrrens */}
			<div className="absolute left-[65%] top-[30%] hidden md:block md:left-[76.65%] md:top-[39.27%]">
				<Image
					src={IEEDAYLogo}
					alt="Your Image"
					width={100}
					height={100}
					className="rounded-lg md:w-[131.17px] md:h-[131.88px]"
				/>
			</div>

			<div className="absolute left-1/2 transform -translate-x-1/2 top-[74%] sm:top-[78%]">
				<Image
					src={SocialIcons}
					width={96}
					height={32}
					alt="Social Media Icons"
				/>
			</div>

			<div className="absolute w-[223px] left-1/2 transform -translate-x-1/2 top-[86.59%] text-center sm:top-[86%]">
				<a
					href="https://www.computer.org"
					target="_blank"
					rel="noopener noreferrer"
					className="font-sans font-normal text-[14px] leading-[20px] text-white"
				>
					Powered by IEEE Computer Society
				</a>
			</div>
		</footer>
	);
};

export default Footer;
