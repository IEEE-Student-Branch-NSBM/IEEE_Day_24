import React from "react";
import Image from "next/image";
import logo from "@/assets/sb-logo.png";
import { Button } from "@nextui-org/button";

const Navbar: React.FC = () => {
	return (
		<nav className=" bg-[#002E53] fixed p-2">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<div className="flex items-center space-x-4">
					<Image
						src={logo}
						width={300}
						height={200}
						alt="NSBM Logo"
						className="  mb-2 ml-15 mt-2"
					/>
				</div>

				<div className="mt-2 md:mt-0">
					<Button
						href="/register"
						variant="shadow"
						color="primary"
						className=" bg-white text-blue-900 px-4 py-2 rounded-md font-semibold  hover:bg-gray-200 transition shadow-md hover:shadow-lg text-sm md:text-base md:px-6 md:py-3 w-full sm:w-auto"
					>
						REGISTER
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
