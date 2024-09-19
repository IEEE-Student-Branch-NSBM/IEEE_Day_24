import Contextsection from "@/components/sections/context-section";
import Countdown from "@/components/sections/countdown";
import Timeline from "@/components/sections/Timeline";
import Session from "@/components/sections/Session";
import Register from "@/components/sections/register";
import RegisterSoon from "@/components/sections/register-soon";
import Wrapper from "@/components/utility/wrapper";

export default function Home() {
	return (
		<div>
			<Countdown />
			<Wrapper>
				<Contextsection />
			</Wrapper>
			<Wrapper>
				<Timeline />
			</Wrapper>
			<Wrapper>
				<Session />
			</Wrapper>
			<RegisterSoon />
			<Register />
			
		</div>
	);
}
