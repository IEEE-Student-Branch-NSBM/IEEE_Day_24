import React from "react";

interface WrapperProps {
	children: React.ReactNode;
}

const wrapper: React.FC<WrapperProps> = ({ children }) => {
	return <div className="m-4 md:m-8 lg:m-16 xl:m-24">{children}</div>;
};

export default wrapper;
