import React from "react";
import Image from "next/image";
import Outerlogo from "@/assets/Layer outter LOGO.png";
import { Button } from "@nextui-org/button";

const BannerWithImages: React.FC = () => {
	return (
		<div className="relative bg-[#010b13] flex items-center justify-center h-[25rem] lg:h-[35rem] overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 flex items-center justify-center">
				<Image
					src={Outerlogo}
					alt="Background with icons"
					width={2000}
					height={2000}
					className="min-w-[800px] sm:w-[500px] lg:w-[1200px] animate-spin-slow z-0"
					style={{
						maxWidth: "100%",
						height: "auto",
					}}
				/>
			</div>

			{/* Centered Text */}
			<div className="relative z-10 text-center text-white">
				<h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider font-sansation">
					Register now
				</h1>
				<p className="text-sm md:text-lg mt-5 font-sansation">
					Lorem ipsum dolor sit amet, consectetur <br />
					adipiscing elit, sed do eiusmod tempor incididunt <br />
					ut labore et dolore magna aliqua.
				</p>

				{/* Button */}
				<Button
					href="/register"
					variant="shadow"
					className="bg-white text-blue-900 px-4 py-2 rounded-md mt-10 font-semibold hover:bg-gray-200 shadow-md font-sansation"
				>
					REGISTER
				</Button>
			</div>
		</div>
	);
};

export default BannerWithImages;
