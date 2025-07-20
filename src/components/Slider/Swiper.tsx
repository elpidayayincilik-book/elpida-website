"use client";
import { ISlider } from "@/types/types";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperCLient({ sliders }: { sliders: ISlider[] }) {
  return (
    <Swiper
      mousewheel={true}
      slidesPerView={1}
      spaceBetween={24}
      pagination={{
        type: "bullets",
      }}
      navigation={true}
      modules={[Pagination, Navigation, Mousewheel]}
      className="w-[75vw] xl:h-[400] md:h-[400] h-[200] "
    >
      {sliders.map((item: ISlider) => {
        return (
          <SwiperSlide key={item.id} className="w-full h-auto swiperSlider">
            {/* <div
                className=" w-screen h-[500] bg-center bg-cover bg-no-repeat bg-cover bg-center flex justify-center p-4 "
                style={{
                  backgroundImage: ` url(${item.img.src})`,
                  width: "100%",
                  objectFit: "cover",
                  height: "500",
                  backgroundRepeat: "no-repeat",
                }}
              > */}
            {/* <div className="prose prose-lg">
                  <ReactMarkdown>{markdown}</ReactMarkdown>
                </div> */}
            <Image
              src={item.image_url}
              alt=""
              sizes="100%"
              fill
              priority={false}
              className="w-full"
            />
            {/* </div> */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default SwiperCLient;
