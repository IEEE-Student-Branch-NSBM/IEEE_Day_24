interface TimelineTextContentProps {
	title: string;
	description: string;
}

const TimelineTextContent = ({
	title,
	description,
}: TimelineTextContentProps) => {
	return (
		<div className="w-full h-full rounded-md px-5 md:pl-4 md:pb-4">
			<h1 className="font-sansation text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium pb-3">
				{title}
			</h1>
			<p className="text-gray-100 text-lg sm:text-xl pb-5 md:w-[80%] w-[100%] md:mt-3">
				{description}
			</p>
		</div>
	);
};

export default TimelineTextContent;
