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
		<div className="relative w-full lg:h-[41rem] md:h-[37rem] xl:h-[44rem] 2xl:h-[55rem] h-[45rem] flex flex-col text-white overflow-hidden ">
			<div className="absolute inset-0 ">
				<Image
					src={backdrop}
					alt="Background"
					className="bottom-0 -z-10 hidden aspect-[9/16] md:block"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="relative w-full p-4 sm:p-8 lg:px-4 lg:pt-8">
				<div className="flex mx-4  md:mx-10 lg:px-20 justify-center">
					<div className="w-3/4 flex flex-col sm:flex-row gap-4 items-center">
						<div className="flex flex-col items-center lg:items-start">
							<Image
								src={IEEEday_logo}
								alt="IEEE Day Logo"
								width={1000}
								height={1000}
								className="w-[80px] sm:w-[130px] lg:w-[150px] hidden md:block z-[-1]"
							/>
						</div>
						<div className="flex flex-col text-center  lg:text-left font-sansation text-shadow-sm ">
							<h1 className="text-4xl md:text-4xl lg:text-6xl xl:text-8xl tracking-wider">
								IEEE DAY
							</h1>
							<h2 className="text-2xl sm:text-3xl lg:text-6xl tracking-[1rem]">
								2024
							</h2>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center relative mx-4 md:mt-8 py-10 lg:mt-10 xl:mt-0">
					<div className="relative pb-1 drop-shadow-[0_-8px_3px_rgba(0,0,0,0.5)] animate-spin-slow">
						<Image
							src={Outerlogo}
							alt="Outer Logo"
							width={1500}
							height={1500}
							className="w-[310px] md:w-[900px] lg:w-[800px] xl:w-[990px] 2xl:w-[1350px]  "
						/>
					</div>
					<div className="absolute flex justify-center items-center">
						<div className="overflow-hidden opacity-85 md:blur">
							<Image
								src={Innerlogo}
								alt="Inner Logo"
								width={140}
								className="w-[140] md:w-[370px] md:h-[370px] lg:w-[420px] lg:h-[420px] xl:w-[530px] xl:h-[530px] 2xl:w-[700px] 2xl:h-[700px] "
							/>
						</div>
					</div>
					<div className="absolute mt-[35rem] md:mt-[-10rem] lg:mt-[-13rem] xl:mb-[5rem] 2xl:mb-[7rem] text-center font-sansation ">
						<h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl">COMING SOON IN</h2>
						<Countdown date={ieeeDay} renderer={renderer} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountdownComponent;
