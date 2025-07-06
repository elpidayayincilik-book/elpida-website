"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import book1 from "@/assets/book1.png";
import book2 from "@/assets/book2.png";
import book3 from "@/assets/book3.png";
import book4 from "@/assets/book4.png";

import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// import ReactMarkdown from "react-markdown";
// import Markdown from "react-markdown";

function IntroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //   const markdown = `
  // # Hi, *Pluto*!.
  // ## This is a Heading
  // _You **can** combine them_
  //   `;

  return (
    <div className=" ">
      {/* <div className="p-16 prose prose-lg ">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div> */}
      {mounted ? (
        <Swiper
          mousewheel={true}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            type: "bullets",
          }}
          navigation={true}
          modules={[Pagination, Navigation, Mousewheel]}
          className="w-screen xl:h-[600] md:h-[400] h-[200] "
        >
          {Array.from([
            { id: 1, img: book1 },
            { id: 2, img: book2 },
            { id: 3, img: book3 },
            { id: 4, img: book4 },
          ]).map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="w-full h-auto swiperSlider"
              >
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
                  src={item.img}
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
      ) : (
        <div className="w-[60] h-[60] animate-spin"></div>
      )}
    </div>
  );
}
export default IntroSlider;
