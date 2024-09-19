import Contextsection from "@/components/sections/context-section";
import Countdown from "@/components/sections/countdown";
import Timeline from "@/components/sections/Timeline";
import Session from "@/components/sections/Session";
import Register from "@/components/sections/register";
import RegisterSoon from "@/components/sections/register-soon";
import Wrapper from "@/components/utility/wrapper";
import ScrollAnimation from "@/components/utility/scrollanimation";

export default function Home() {
	return (
		<div>
			<ScrollAnimation>
				<Countdown />
			</ScrollAnimation>
			<Wrapper>
				<ScrollAnimation>
					<Contextsection />
				</ScrollAnimation>
			</Wrapper>
			<Wrapper>
				<ScrollAnimation>
					<Timeline />
				</ScrollAnimation>
			</Wrapper>
			<Wrapper>
				<ScrollAnimation>
					<Session />
				</ScrollAnimation>
			</Wrapper>
			<RegisterSoon />
			<Register />
			
		</div>
	);
}
