"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card, CardBody } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import image1 from "@/assets/image-1.jpg"
import image2 from "@/assets/image-2.jpg"
import image3 from "@/assets/image-3.jpeg"
import image4 from "@/assets/image-4.jpeg"
import image5 from "@/assets/image-5.jpeg"
import image6 from "@/assets/image-6.jpeg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    }
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
        className="container mx-auto mt-10 max-w-[1200px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Card>
            <CardBody>
              <Image src={slide.image} alt={slide.name} /> 
            </CardBody>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;