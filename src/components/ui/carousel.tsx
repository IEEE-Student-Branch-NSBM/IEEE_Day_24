"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card, CardBody } from "@nextui-org/react";
import Image, { StaticImageData } from "next/legacy/image";
import image1 from "@/assets/image-1.jpg";
import image2 from "@/assets/image-2.jpg";
import image3 from "@/assets/image-3.jpg";
import image4 from "@/assets/image-4.jpg";
import image5 from "@/assets/image-5.jpg";
import image6 from "@/assets/image-6.jpg";
import image7 from "@/assets/image-7.jpg";
import image8 from "@/assets/image-8.jpg";
import image9 from "@/assets/image-9.jpg";
import image10 from "@/assets/image-10.jpg";
import image11 from "@/assets/image-11.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
	id: number;
	image: StaticImageData;
	name: string;
}

const Carousel: React.FC = () => {
	const slides: Slide[] = [
		{
			id: 1,
			image: image1,
			name: "image1",
		},
		{
			id: 2,
			image: image2,
			name: "image2",
		},
		{
			id: 3,
			image: image3,
			name: "image3",
		},
		{
			id: 4,
			image: image4,
			name: "image4",
		},
		{
			id: 5,
			image: image5,
			name: "image5",
		},
		{
			id: 6,
			image: image6,
			name: "image6",
		},
		{
			id: 7,
			image: image7,
			name: "image7",
		},
		{
			id: 8,
			image: image8,
			name: "image8",
		},
		{
			id: 9,
			image: image9,
			name: "image9",
		},
		{
			id: 10,
			image: image10,
			name: "image10",
		},
		{
			id: 11,
			image: image11,
			name: "image11",
		},
	];

	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			spaceBetween={10}
			slidesPerView={3}
			navigation={false}
			pagination={{ clickable: true }}
			autoplay={{ delay: 3000 }}
			loop
			className="container mx-auto my-10 max-w-[390px] sm:max-w-[790px] lg:max-w-[1200px]"
			breakpoints={{
				410: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1080: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			}}
		>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id}>
					<Card>
						<CardBody className="aspect-[3/2] relative overflow-hidden">
							<Image
								src={slide.image}
								alt={slide.name}
								objectFit="cover"
								layout="fill"
								className="translate-transaform duration-300 hover:scale-105"
							/>
						</CardBody>
					</Card>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
