import Image from "next/image";
import registerbg from "@/assets/register-bg.png";

const BannerWithImages: React.FC = () => {
	return (
		<div className="relative bg-[#010b13] flex items-center justify-center h-screen">
			{/* Background Image */}
			<Image
				src={registerbg}
				alt="Background with icons"
				layout="fill"
				objectFit="cover"
				className="z-0" // Background should be behind the text
			/>

			{/* Centered Text */}
			<div className="relative z-10 text-center text-white">
				<h1 className="text-4xl md:text-7xl font-bold uppercase tracking-wider mb-4">
					Registrations
					<br />
					Opening
					<br />
					Soon!
				</h1>
				<p className="text-sm md:text-lg mt-20">
					Lorem ipsum dolor sit amet, consectetur
				</p>
			</div>
		</div>
	);
};

export default BannerWithImages;
