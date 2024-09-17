"use client";
import { useState, useEffect } from "react";
import React from "react";
import Countdown from "react-countdown";
import Image from "next/image";
import backdrop from "@/assets/background 2.png";
import Innerlogo from "@/assets/innerlogo.png";
import Outerlogo from "@/assets/Layer outter LOGO.png";
import IEEEday_logo from "@/assets/IEEEDAYLOGO.png";
import CountdownItem from "../ui/count";

function formatTime(time: number) {
	if (time < 0) return "00";
	return time < 10 ? `0${time}` : time;
}

const CountdownComponent: React.FC = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const ieeeDay = new Date("2024-10-09T00:00:00");

	const renderer = ({
		days,
		hours,
		minutes,
		seconds,
		completed,
	}: {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		completed: boolean;
	}) => {
		if (completed) {
			return (
				<div className="flex justify-center items-center space-x-4">
					<CountdownItem value={"00"} label="DAYS" />
					<CountdownItem value={"00"} label="HRS" />
					<CountdownItem value={"00"} label="MIN" />
					<CountdownItem value={"00"} label="SEC" />
				</div>
			);
		} else {
			return (
				<div className="flex justify-center items-center space-x-4">
					<CountdownItem value={formatTime(days).toString()} label="DAYS" />
					<CountdownItem value={formatTime(hours).toString()} label="HRS" />
					<CountdownItem value={formatTime(minutes).toString()} label="MIN" />
					<CountdownItem value={formatTime(seconds).toString()} label="SEC" />
				</div>
			);
		}
	};

	if (!isClient) {
		return null;
	}

	return (
		<div className="relative w-full  h-[43rem] flex flex-col text-white overflow-hidden ">
			<div className="absolute inset-0 ">
				<Image
					src={backdrop}
					alt="Background"
					className="hidden lg:block z-[-1]"
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="relative w-full p-4 sm:p-8 lg:px-4 lg:pt-6">
				<div className="flex mx-4  md:mx-10 lg:px-20 justify-center">
					<div className="w-3/4 flex flex-col md:flex-row gap-4 items-center">
						<div className="flex flex-col items-center md:items-start">
							<Image
								src={IEEEday_logo}
								alt="IEEE Day Logo"
								width={1000}
								height={1000}
								className="w-[80px] sm:w-[120px] lg:w-[120px] hidden lg:block z-[-1]"
							/>
						</div>
						<div className="flex flex-col text-center md:text-left font-sansation text-shadow-sm ">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-wider">
								IEEE DAY
							</h1>
							<h2 className="text-2xl sm:text-3xl lg:text-3xl tracking-[1rem]">
								2024
							</h2>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center relative mx-4 md:mx-10 py-10 lg:py-5 md:py-1  ">
					<div className="relative">
						<Image
							src={Outerlogo}
							alt="Outer Logo"
							width={1500}
							height={1500}
							className="w-[310px] sm:w-[500px] lg:w-[1100px] pb-1 drop-shadow-[0_-8px_3px_rgba(0,0,0,0.5)] animate-spin-slow"
						/>
					</div>
					<div className="absolute flex justify-center items-center">
						<div className="overflow-hidden opacity-85 sm:blur">
							<Image
								src={Innerlogo}
								alt="Inner Logo"
								width={140}
								className="w-[140] md:w-[250px] md:h-[250px] lg:w-[580px] lg:h-[580px]"
							/>
						</div>
					</div>
					<div className="absolute mt-[35rem] sm:mt-[-1rem] lg:mt-[-20rem] text-center font-sansation ">
						<h2 className="text-xl sm:text-2xl lg:text-2xl">COMING SOON IN</h2>
						<Countdown date={ieeeDay} renderer={renderer} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountdownComponent;
