"use client";
import React, { createContext, useContext, useRef } from "react";

interface ScrollContextType {
	registerRef: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const registerRef = useRef<HTMLDivElement>(null);

	return (
		<ScrollContext.Provider value={{ registerRef }}>
			{children}
		</ScrollContext.Provider>
	);
};

export const useScroll = () => {
	const context = useContext(ScrollContext);
	if (!context) {
		throw new Error("useScroll must be used within a ScrollProvider");
	}
	return context;
};
