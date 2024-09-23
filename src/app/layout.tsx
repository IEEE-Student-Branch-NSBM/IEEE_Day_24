import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { ParticlesContainer } from "@/components/ui/particle";
import { ScrollProvider } from "@/components/utility/scroll-context";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});
const sansation = localFont({
	src: "./fonts/SansationRegular.woff",
	variable: "--font-sansation",
	display: "swap",
});

export const metadata: Metadata = {
	title: "NSBM IEEE Day 24",
	description: "IEEE Day 2024: Unleash Your Leadership Potential in AI. Join us for this year's IEEE Day celebration, where we aim to create a transformative experience that opens doors to growth, connection, and learning.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={sansation.variable}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="mix-blend-screen">
					<ParticlesContainer />
				</div>
				<ScrollProvider>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</ScrollProvider>
			</body>
		</html>
	);
}
