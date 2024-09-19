import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Carousel from "../ui/carousel";
const Contextsection = () => {
	return (
		<div className="container mx-auto sticky mt-10 max-w-[1350px]">
			<div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center">
				<Card className="bg-primary p-6 mx-6 mt-5 rounded-lg xl:max-w-[450px]">
					<CardHeader>
						<h1 className="text-xl lg:text-3xl font-semibold tracking-widest font-sansation mb-2 animate-ease-in">
							DESCRIPTION
						</h1>
					</CardHeader>
					<CardBody>
						<p className="text-sm lg:text-base">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							eaque dolore impedit ea minus ipsam. Hic, nihil sint. Laborum quos
							aliquam rerum perspiciatis. Amet unde necessitatibus tempora nulla
							nemo molestias.
						</p>
					</CardBody>
				</Card>
				<Card className="bg-primary p-6 mx-6 mt-5 rounded-lg xl:max-w-[450px]">
					<CardHeader>
						<h1 className="text-xl lg:text-3xl font-semibold tracking-widest font-sansation mb-2">
							OUR HISTORY
						</h1>
					</CardHeader>
					<CardBody>
						<p className="text-sm lg:text-base">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							eaque dolore impedit ea minus ipsam. Hic, nihil sint. Laborum quos
							aliquam rerum perspiciatis. Amet unde necessitatibus tempora nulla
							nemo molestias.
						</p>
					</CardBody>
				</Card>
			</div>
			<Carousel />
		</div>
	);
};

export default Contextsection;
