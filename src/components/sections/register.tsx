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
				<h1 className="text-4xl md:text-7xl font-bold uppercase tracking-wider mb-4 font-sansation">
					Register Now
				</h1>
				<p className="text-sm md:text-lg mt-20 font-sansation">
					Lorem ipsum dolor sit amet, consectetur <br />
					adipiscing elit, sed do eiusmod tempor incididunt <br />
					ut labore et dolore magna aliqua.
				</p>

				{/* Button */}
				<button className="mt-20 px-6 py-3 bg-white text-[#002E53] font-bold uppercase rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out font-sansation">
					Register
				</button>
			</div>
		</div>
	);
};

export default BannerWithImages;
