import React from "react";
import Image from "next/image";
import Outerlogo from "@/assets/Layer outter LOGO.png";

const RegisterSoon: React.FC = () => {
	return (
		<div className="relative bg-[#010b13] flex items-center justify-center h-[25rem] lg:h-[35rem] overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 flex items-center justify-center">
				<Image
					src={Outerlogo}
					alt="Background with icons"
					width={2000}
					height={2000}
					className="min-w-[600px] sm:w-[500px] lg:w-[1200px] animate-spin-slow z-0"
					// style={{
					// 	maxWidth: "100%",
					// 	height: "auto",
					// }}
				/>
			</div>

			{/* Centered Text */}
			<div className="relative z-10 text-center text-white sm:max-w-[450px] mt-2 lg:max-w-[600px]">
				<h1 className="text-2xl lg:text-6xl font-bold uppercase tracking-wider font-sansation">
					Registrations
					<br />
					Opening
					<br />
					Soon!
				</h1>
				<p className="text-sm md:text-lg mt-5 mx-8 font-sansation">
					Lorem ipsum dolor sit amet, consectetur <br />
					adipiscing elit, sed do eiusmod tempor incididunt <br />
					ut labore et dolore magna aliqua.
				</p>
			</div>
		</div>
	);
};

export default RegisterSoon;
