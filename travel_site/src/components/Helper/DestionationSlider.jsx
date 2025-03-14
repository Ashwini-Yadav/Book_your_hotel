"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { destinationData } from "@/data/data";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1025 }, items: 4, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 3, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 639, min: 0 }, items: 1, slidesToSlide: 1 },
};

const DestinationSlider = () => {
  return (
    <div className="relative w-full px-4">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        showDots={true}
        draggable={true}
        swipeable={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {destinationData.map((data) => (
          <div key={data.id} className="space-x-3">
           <div  className="relative h-[380px]">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg"></div>
            
            {/* Image */}
            <Image
              src={data.image}
              alt={data.country}
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />

            </div>
            {/* Text Content */}
            <h1 className="text-lg font-semiboldm mt-4 ">{data.country}</h1>
            <p className="text-sm text-gray-600">{data.travelers} traveller</p>
          </div>
          
        ))}
      </Carousel>
    </div>
  );
};

export default DestinationSlider;
