import React from "react";

const CountdownItem: React.FC<{ value: string; label: string }> = ({
	value,
	label,
}) => (
	<div className="text-center text-white ">
		<div className="text-4xl sm:text-5xl lg:text-6xl font-bold p-2 mt-4 sm:mt-6 lg:mt-8 text-stroke-[2px]">
			{value.toString().padStart(2, "0")}
		</div>
		<div className="text-lg sm:text-xl lg:text-2xl text-stroke">{label}</div>
	</div>
);

export default CountdownItem;
