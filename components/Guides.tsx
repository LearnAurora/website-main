import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

const Guides = () => {
  const [slideCount, setSlideCount] = useState(1);

  const handleResizeRoadmap = () => {
    if (window.innerWidth > 720) {
      setSlideCount(1);
    }
    if (window.innerWidth > 1020) {
      setSlideCount(1);
    }
    if (window.innerWidth > 1280) {
      setSlideCount(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeRoadmap);
  }, [slideCount]);

  return (
    <div
      className="flex justify-center items-center text-white"
      id="section-guides"
    >
      <div className="max-w-6xl h-screen max-h-full w-full flex flex-col justify-center items-center gap-x-16 uppercase mx-5">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h1 className="mb-14 text-7xl font-semibold" id="textgradient">
            Guides
          </h1>
        </div>

        <Swiper
          slidesPerView={slideCount}
          spaceBetween={20}
          grabCursor={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiperRoadmap w-[400px] sm:w-[500px]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <SwiperSlide className="bg-[#1a373d]/50 rounded-md p-5 flex flex-col mySwiperTeam-slide gap-2">
            <div className="border-gradient p-1 w-auto h-auto">
              <Image
                src="/assets/images/WILA.png"
                height={500}
                width={500}
                alt="what is learn aurora?"
              />
            </div>
            <p className="text-left">November 2, 2022</p>
            <h1 className="font-semibold text-lg">
              Introduction to Learn Aurora
            </h1>
            <div className="flex justify-end">
              <Image
                src="/assets/icons/right-arrow.svg"
                height={20}
                width={20}
                alt="what is learn aurora?"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Guides;
