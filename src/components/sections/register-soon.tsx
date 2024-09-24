"use client";
import React from "react";
import Image from "next/image";
import Outerlogo from "@/assets/Layer outter LOGO.png";
import { useScroll } from "@/components/utility/scroll-context";
import { Button } from "@nextui-org/button";

const RegisterSoon: React.FC = () => {
	const { registerRef } = useScroll();
	return (
		<div
			className="relative flex items-center justify-center h-[25rem] md:h-[34rem] lg:h-[35rem] overflow-hidden"
			ref={registerRef}
		>
			<div className="absolute inset-0 flex items-center justify-center">
				<Image
					src={Outerlogo}
					alt="Background with icons"
					width={2000}
					height={2000}
					className="min-w-[600px] md:min-w-[600px] lg:w-[1200px] animate-spin-slow z-0"
				/>
			</div>

			{/* Centered Text */}
			<div className="relative z-10 text-center justify-items-center text-white sm:max-w-[450px] lg:max-w-[600px]">
				<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-widest font-sansation">
					{/* Registrations */}
					Register
					<br />
					{/* Opening */}
					now
					<br />
					{/* Soon */}
				</h1>
				<p className="text-sm md:text-base lg:text-lg mt-3 md:mt-5 lg:mt-8 mx-20 md:mx-12 font-sansation">
					{/* Get ready for IEEE Day 2024 with the IEEE Student Branch of NSBM! Join
					a day of innovation, inspiring talks, and future tech collaboration.
					Registration opens soon! */}
					Join us for IEEE Day 2024 with the IEEE Student Branch of NSBM. Enjoy
					innovation, inspiring talks, and exciting opportunities to connect
					with future tech leaders!
				</p>
				<div className="">
					<a href="https://forms.gle/U4Wy9fG7qN8U3b5i8">
						<Button
							href="/register"
							variant="shadow"
							className="bg-white text-blue-900 px-4 py-2 rounded-md mt-10 font-semibold hover:bg-gray-200 shadow-md font-sansation"
						>
							REGISTER
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default RegisterSoon;
