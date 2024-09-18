import React from "react";

const CountdownItem: React.FC<{ value: string; label: string }> = ({
	value,
	label,
}) => (
	<div className="text-center text-white  font-sansation">
		<div className="text-4xl  sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-[1000] p-2 mt-4 sm:mt-6 lg:mt-8 xl:mt-4 2xl:mt-8">
			{value.toString().padStart(2, "0")}
		</div>
		<div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">{label}</div>
	</div>
);

export default CountdownItem;
