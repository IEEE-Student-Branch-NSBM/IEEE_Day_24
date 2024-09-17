import React from "react";
import AgendaItem from "@/components/ui/session/AgendaItem";

const Session: React.FC = () => {
	// Array of agenda items
	const agendaItems = [
		{
			phaseNumber: "01",
			phaseTitle: "Agenda phase",
			time: "9:30 am - 10:30 am",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			phaseNumber: "02",
			phaseTitle: "Agenda phase",
			time: "10:30 am - 11:30 am",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			phaseNumber: "03",
			phaseTitle: "Agenda phase",
			time: "11:30 am - 12:30 pm",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			phaseNumber: "04",
			phaseTitle: "Agenda phase",
			time: "1:30 pm - 2:30 pm",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			phaseNumber: "05",
			phaseTitle: "Agenda phase",
			time: "2:30 pm - 3:30 pm",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
	];

	return (
		<div className="container max-w-5xl mx-auto w-full px-4 md:mt-5 py-8">
			{/* Title */}
			<h1 className="font-sansation text-center text-3xl md:text-4xl md:py-10 ">
				SESSIONS
			</h1>

			{/* Agenda Items */}
			<div className="p-6 mt-5">
				{agendaItems.map((item, index) => (
					<AgendaItem
						key={index}
						phaseNumber={item.phaseNumber}
						phaseTitle={item.phaseTitle}
						time={item.time}
						description={item.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Session;
