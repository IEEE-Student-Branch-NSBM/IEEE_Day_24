"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/sb-logo.png";
import { Button } from "@nextui-org/button";
import { useScroll } from "@/components/utility/scroll-context";

const Navbar: React.FC = () => {
	const { registerRef } = useScroll();

	const handleScroll = () => {
		if (registerRef.current) {
			const offset = 115;
			const top =
				registerRef.current.getBoundingClientRect().top +
				window.scrollY -
				offset;
			window.scrollTo({
				top,
				behavior: "smooth",
			});
		}
	};
	return (
		<div>
			<nav className=" bg-primary fixed z-50 inset-x-0 top-0 shadow-lg py-2 flex-wrap">
				<div className="container mx-auto grid grid-cols-2 gap-x-48 md:max-w-[670px] md:gap-x-[460px] lg:max-w-[870px] lg:gap-x-[600px] xl:max-w-[1150px] xl:gap-x-[950px] 2xl:max-w-[1500px] 2xl:gap-x-[1250px]">
					<div className=" ms-1 align-middle sm:ms-[-2rem]">
						<Image
							src={logo}
							width={500}
							height={300}
							alt="NSBM Logo"
							className="py-2 mt-1 md:mt-0 max-w-[220px] sm:max-w-[280px]"
						/>
					</div>

					<div className="my-2 align-middle">
						<Button
							onClick={handleScroll}
							className=" bg-white text-blue-950 rounded-md font-sansation text-xs sm:text-base scale-90 font-semibold tracking-wider"
						>
							REGISTER
						</Button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
