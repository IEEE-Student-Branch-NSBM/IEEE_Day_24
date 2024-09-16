import Contextsection from "@/components/sections/context-section";
import Carousel from "@/components/ui/carousel";
import React from "react";
import Countdown from "@/components/sections/countdown";

export default function Home() {
	return (
		<div>
			<Countdown />
			<Contextsection />
			<Carousel />
		</div>
	);
}
