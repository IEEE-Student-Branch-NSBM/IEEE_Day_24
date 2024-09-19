"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface props {
	children: React.ReactNode;
}

const Scrollanimation: React.FC<props> = ({ children }) => {
	const [ref, inView] = useInView({ threshold: 0.2 });

	return (
		<div ref={ref}>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
				transition={{ duration: 1 }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default Scrollanimation;
