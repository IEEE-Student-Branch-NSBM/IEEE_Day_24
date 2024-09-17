import React from "react";
import Image from "next/image";
import WIEImage from "@/assets/WIE Logo Bar - White Redused 2.png";
import IEEBarImage from "@/assets/IEEE_logo_bar.png";
import IEECSLogo from "@/assets/IEEE NSBM CS LOGO REBUILD - WHITE 1.png";
import IEEDAYLogo from "@/assets/IEEEDAYLOGO.png";
import SocialIcons from "@/assets/Group 18761.png";

const Footer: React.FC = () => {
	return (
		<footer className="relative w-full h-[650px] sm:h-[800px] md:h-[410px] lg:h-[410px] bg-[#002E53] p-4 sm:p-6">
			{/* For mobile version only */}
			<div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-10 lg:hidden">

			
				<div className="flex items-center justify-center">
					<Image src={IEECSLogo} alt="SB Logo" width={150} height={65} />
				</div>

				
				<div className="flex items-center justify-center">
					<Image src={IEEBarImage} alt="IEEE Logo" width={222} height={32} />
				</div>

				
				<div className="flex items-center justify-center">
					<Image src={WIEImage} alt="WIE Logo" width={222} height={32} />
				</div>
			</div>

			{/* For mobile version only */}
			<div className="hidden md:block">

				<div className="flex flex-col items-center absolute w-[150px] h-[65px] left-1/2 transform -translate-x-1/2 top-[40px]">
					<Image src={IEECSLogo} alt="SB Logo" width={150} height={65} />
				</div>

				
				<div className="flex flex-col items-center absolute w-[222px] h-[32px] left-[255px] top-[35px] mt-6">
					<Image src={IEEBarImage} alt="IEEE Logo" width={222} height={32} />
				</div>

				
				<div className="flex flex-col items-center absolute w-[222px] h-[32px] left-[1190px] top-[35px] mt-6">
					<Image src={WIEImage} alt="WIE Logo" width={222} height={32} />
				</div>
			</div>

		
			<div className="absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[1140px] h-0.6 border border-white left-1/2 transform -translate-x-1/2 top-[35%] md:top-[32.44%]" />

			
			<div className="absolute left-[5%] right-[5%] top-[38%] sm:top-[30%] md:left-[10.42%] md:right-[63.89%] md:top-[35%]">
				<h3 className="text-white text-[18px] leading-[28px] font-normal text-center md:text-[24px] md:leading-[34px]">
					Ready to get started?
				</h3>
			</div>

			{/* IEEE Day Logo for Mobile */}
			<div className="absolute left-1/2 transform -translate-x-1/2 top-[46%] sm:top-[42%] md:hidden flex justify-center items-center">
				<Image
					src={IEEDAYLogo}
					alt="Your Image"
					width={80}
					height={80}
					className="rounded-lg"
				/>
			</div>

			
			<div className="absolute left-[10%] right-[10%] top-[61%] sm:top-[60%] md:left-[16.42%] md:right-[63.89%] md:top-[54%] flex justify-center md:justify-start">
				<p className="text-white text-[14px] leading-[20px] font-normal text-center md:text-left">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>

			{/* IEEE Day Logo for PC screens */}
			<div className="absolute hidden md:block left-[65%] top-[30%] md:left-[76.65%] md:top-[39.27%]">
				<Image
					src={IEEDAYLogo}
					alt="Your Image"
					width={100}
					height={100}
					className="rounded-lg md:w-[131.17px] md:h-[131.88px]"
				/>
			</div>

			{/* Social Icons */}
			<div className="absolute left-1/2 transform -translate-x-1/2 top-[82%] sm:top-[78%]">
				<Image
					src={SocialIcons}
					width={96}
					height={32}
					alt="Social Media Icons"
				/>
			</div>

			{/* Footer Text */}
			<div className="absolute w-[223px] left-1/2 transform -translate-x-1/2 top-[89%] sm:top-[86%] text-center">
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
