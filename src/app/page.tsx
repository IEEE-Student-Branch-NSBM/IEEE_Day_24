import Contextsection from "@/components/sections/context-section";
import Carousel from "@/components/ui/carousel";
import React from "react";
import Countdown from "@/components/sections/countdown";
import Timeline from "@/components/sections/Timeline";

export default function Home() {
	return (
		<div>
			<Countdown />
			<Contextsection />
			<Carousel />
			<Timeline />
		</div>
	);
}
