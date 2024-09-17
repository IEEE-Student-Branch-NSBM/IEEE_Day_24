import React from "react";
import Image from "next/legacy/image";
import Outerlogo from "@/assets/Layer outter LOGO.png";

const BannerWithImages: React.FC = () => {
	return (
		<div className="relative bg-[#010b13] flex items-center justify-center h-screen overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 flex items-center justify-center">
				<Image
					src={Outerlogo}
					alt="Background with icons"
					width={1150}
					height={1150}
					className="w-[310px] sm:w-[500px] lg:w-[1150px] animate-spin-slow z-0"
				/>
			</div>

			{/* Centered Text */}
			<div className="relative z-10 text-center text-white">
				<h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-4 font-sansation">
					Register now
				</h1>
				<p className="text-sm md:text-lg mt-16 font-sansation">
					Lorem ipsum dolor sit amet, consectetur <br />
					adipiscing elit, sed do eiusmod tempor incididunt <br />
					ut labore et dolore magna aliqua.
				</p>

				{/* Button */}
				<button className="mt-20 px-6 py-3 bg-white text-[#002E53] font-bold uppercase rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out font-sansation">
					Register
				</button>
			</div>
		</div>
	);
};

export default BannerWithImages;
