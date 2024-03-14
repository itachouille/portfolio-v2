"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type SwiperType from "swiper";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";

interface ImageSliderProps {
  urls: string[];
}

const WorkSlider = ({ urls }: ImageSliderProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (urls.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (urls.length ?? 0) - 1,
      });
    });
  }, [swiper, urls]);

  /*   const activeStyles =
    "h-10 w-10 text-white-smoke";
  const inactiveStyles = "text-gray-400"; */

  return (
    <div className="group relative aspect-square">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        slidesPerView={1}
        className="h-full w-full"
      >
        {urls.map((url, i) => (
          <SwiperSlide key={i} className="-z-10 relative h-full w-full">
            <Image
              fill
              loading="eager"
              className="-z-10 h-full w-full object-cover object-center"
              src={url}
              alt="Product image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center  justify-evenly border-b border-border">
        <div className="flex justify-center w-1/2 p-6 border-r border-border">
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slidePrev();
            }}
            className="w-full h-full"
            /* className={cn(activeStyles, "left-3 transition", {
              [inactiveStyles]: slideConfig.isBeginning,
              "hover:bg-primary-300 text-primary-800 opacity-100":
                !slideConfig.isBeginning,
            })} */
            aria-label="previous image"
          >
            <MoveLeft
              className="h-10 w-10 text-white-smoke"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="flex items-center justify-center w-1/2 p-6 ">
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slideNext();
            }}
            /*   className={cn(activeStyles, "right-3 transition", {
              [inactiveStyles]: slideConfig.isEnd,
              "hover:bg-primary-300 text-primary-800 opacity-100":
                !slideConfig.isEnd,
            })} */
            aria-label="next image"
          >
            <MoveRight
              className="h-10 w-10 text-white-smoke"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;
