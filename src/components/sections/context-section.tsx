import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Carousel from "../ui/carousel";
const Contextsection = () => {
	return (
		<div className="container mx-auto sticky mt-10 max-w-[1350px]">
			<div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5">
				<Card className="bg-primary p-6  mt-5 rounded-lg xl:max-w-[450px]">
					<CardHeader>
						<h1 className="text-xl lg:text-3xl font-semibold tracking-widest font-sansation mb-2 animate-ease-in">
							DESCRIPTION
						</h1>
					</CardHeader>
					<CardBody>
						<p className="text-sm lg:text-base">
						IEEE Student Branch of NSBM Green University is on a mission to inspire and empower students in 2024! We’re pushing the boundaries
						of innovation and personal growth, collaborating with the IEEE Computer Society and IEEE Women in Engineering groups. Join us as we create an energetic tech community,
						unleash potential, and pave the way for future leaders in technology.
						</p>
					</CardBody>
				</Card>
				<Card className="bg-primary p-6  mt-5 rounded-lg xl:max-w-[450px]">
					<CardHeader>
						<h1 className="text-xl lg:text-3xl font-semibold tracking-widest font-sansation mb-2">
							OUR HISTORY
						</h1>
					</CardHeader>
					<CardBody>
						<p className="text-sm lg:text-base">
						Since 2018, IEEE Day has united the community with events starting with lectures on IoT and Data-Driven Civilization. In 2019 and 2020,
						 it transitioned to a virtual format due to the pandemic. In 2021, the focus was on Cyber Security and Digital Wellbeing, while 2022 and 2023 emphasized AI, AR, VR, and IEEE's
						mission for a better tomorrow.
						</p>
					</CardBody>
				</Card>
			</div>
			<Carousel />
		</div>
	);
};

export default Contextsection;
