import Image from "next/image";

// images
import RegOpen from "@/assets/reg-open.svg";
import RegClose from "@/assets/reg-close.svg";
import EventDay from "@/assets/event-day.svg";
import TimelineTextContent from "@/components/ui/timeline/TimelineTextContent";

const Timeline = () => {
	return (
		<>
			<h1 className="text-center text-3xl md:text-4xl font-semibold md:py-28 py-10">
				TIMELINE
			</h1>

			<div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 pb-10">
				
				{/* Stack 1 */}
				<div className="col-span-4 w-full h-full md:my-5 my-0 md:block hidden">
					<Image
						className="mx-auto"
						src={RegOpen}
						alt="Register Open"
						width={250}
						height={250}
					/>
				</div>
				<div className="relative col-span-1 w-full h-full flex justify-center items-center">
					<div className="h-full w-1 bg-[#3DA6FF]"></div>
					<div className="top-0 absolute w-6 h-6 rounded-full bg-[#3DA6FF] z-10 text-white text-center"></div>
				</div>
				<div className="md:col-span-4 w-full h-full md:mb-5 mb-5 col-span-8">
					<TimelineTextContent
						title="REGISTRATIONS OPEN"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
				</div>

				{/* Stack 2 */}
				<div className="relative col-span-1 w-full h-full flex justify-center items-center md:hidden">
					<div className="h-full w-1 bg-white"></div>
					<div className="top-0 absolute w-6 h-6 rounded-full bg-[#3DA6FF] z-10 text-white text-center"></div>
				</div>
				<div className="md:col-span-4 w-full h-full md:my-5 mb-5 col-span-8 flex justify-center items-center md:ml-24">
					<TimelineTextContent
						title="REGISTRATIONS CLOSE"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
				</div>
				<div className="relative col-span-1 w-full h-full md:flex hidden justify-center items-center">
					<div className="h-full w-1 bg-white"></div>
					<div className="top-0 absolute w-6 h-6 rounded-full bg-[#3DA6FF] z-10 text-white text-center"></div>
				</div>
				<div className="col-span-4 w-full h-full md:mb-5 mb-5 md:block hidden">
					<Image
						src={RegClose}
						alt="Register Closed"
						width={250}
						height={200}
					/>
				</div>

				{/* Stack 3 */}
				<div className="col-span-4 w-full h-full md:mb-5  md:block hidden">
					<Image
						src={EventDay}
						alt="IEEE Day Logo"
						className="mx-auto"
						width={250}
					/>
				</div>
				<div className="relative col-span-1 w-full h-full flex justify-center items-center">
				<div className="h-full w-1 bg-white md:hidden"></div>
					<div className="top-0 absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
				</div>
				<div className="md:col-span-4 w-full h-full md:my-5 my-0 col-span-8">
					<TimelineTextContent
						title="IEEE DAY 2024"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
				</div>
			</div>
		</>
	);
};

export default Timeline;
