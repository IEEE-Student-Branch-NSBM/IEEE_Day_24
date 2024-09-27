import { BsCalendarDateFill } from "react-icons/bs";

interface TimelineTextContentProps {
	title: string;
	description: string;
	date: string;
}

const TimelineTextContent = ({
	title,
	description,
	date
}: TimelineTextContentProps) => {
	return (
		<div className="w-full h-full rounded-md px-5 md:pl-4 md:pb-4">
			<h1 className="font-sansation tracking-wider text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium pb-2 md:pb-1">
				{title}
			</h1>
			<div className="flex items-center py-2 md:hidden ">
				<BsCalendarDateFill className="text-gray-100 text-lg" />
				<p className="text-gray-100 text-lg sm:text-md ml-2">
					{date}
				</p>
			</div>
			<p className="text-gray-100 text-lg sm:text-xl pb-5 md:w-[80%] w-[100%] md:mt-1">
				{description}
			</p>
		</div>
	);
};

export default TimelineTextContent;
