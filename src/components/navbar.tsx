import React from "react";
import Image from "next/image";
import logo from "@/assets/sb-logo.png";
import { Button } from "@nextui-org/button";

const Navbar: React.FC = () => {
	return (
		<nav className=" bg-[#002E53] fixed z-50 inset-x-0 top-0 shadow-lg py-2 flex-wrap">
			<div className="container mx-auto grid grid-cols-2 gap-x-48 sm:max-w-[800px] sm:gap-x-[550px] lg:max-w-[970px] lg:gap-x-[750px] xl:max-w-[1150px] xl:gap-x-[950px] 2xl:max-w-[1500px] 2xl:gap-x-[1250px]">
				<div className=" ms-1 sm:ms-[-2rem]">
					<Image
						src={logo}
						width={500}
						height={300}
						alt="NSBM Logo"
						className="py-2 max-w-[220px] sm:max-w-[280px]"
					/>
				</div>

				<div className="my-2 align-middle">
					<Button
						href="/register"
						className=" bg-white text-blue-950 rounded-md font-sansation text-xs sm:text-base scale-90 font-semibold tracking-wider"
					>
						REGISTER
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
