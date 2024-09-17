import Contextsection from "@/components/sections/context-section";
import React from "react";
import Countdown from "@/components/sections/countdown";
import Timeline from "@/components/sections/Timeline";
import Session from "@/components/sections/Session";
import Register from "@/components/sections/register";
import RegisterSoon from "@/components/sections/register-soon";

export default function Home() {
	return (
		<div>
			<Countdown />
			<Contextsection />
			<Timeline />
			<Session/>
			<RegisterSoon/>
			<Register/>
		</div>
	);
}
