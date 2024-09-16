import React from 'react';
import Image from "next/image";
import Outerlogo from "@/assets/Layer outter LOGO.png";

const BannerWithImages: React.FC = () => {
  return (
    <div className="relative bg-[#010b13] flex items-center justify-center h-screen overflow-hidden">
      {/* Container for centered content */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Background Image */}
        <Image
          src={Outerlogo}
          alt="Outer Logo"
          width={1150}
          height={1150}
          className="w-[310px] sm:w-[500px] lg:w-[1150px] animate-spin-slow"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-4">
              Registrations
              <br />
              Opening
              <br />
              Soon!
            </h1>
            <p className="text-sm md:text-lg mt-16">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithImages;