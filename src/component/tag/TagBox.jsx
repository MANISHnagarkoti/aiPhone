import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const MySwiper = () => {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const updateSwiperState = () => {
      if (swiper) {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }
    };

    if (swiper) {
      swiper.on("slideChange", updateSwiperState);
      updateSwiperState();
    }

    return () => {
      if (swiper) {
        swiper.off("slideChange", updateSwiperState);
      }
    };
  }, [swiper]);

  const handleSwiper = (s) => {
    setSwiper(s);
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const tabs = ["Clutch", "Fabric lining", " Baggit ", " Multi Compartment"];

  return (
    <div className="p-4 text-xs space-y-4">
      <div className="text-gray-400">Popular tags for handbag</div>

      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        onSwiper={handleSwiper}
        className="pe-12"
      >
        {tabs.map((e) => {
          return (
            <SwiperSlide>
              <div className="text-center border border-blue-500 rounded-lg bg-blue-400/10 py-2 px-3 text-blue-500">
                {e}
              </div>
            </SwiperSlide>
          );
        })}

        {/* Add more slides as needed */}
        <div
          className={`swiper-button-prev ${isBeginning ? "hidden" : null}`}
          onClick={handlePrev}
        />
        <div
          className={`swiper-button-next ${isEnd ? "hidden" : null}`}
          onClick={handleNext}
        />
      </Swiper>

      <div>
        <div className="max-w-[250px] text-[13px] p-2 bg-gradient-to-r rounded-2xl from-[#E5EEFF] from-30%  to-[#f3f3f37a] to-80%">
          <div className="flex bg-white p-2 rounded-xl gap-4">
            <div>
              <img
                src="tag img/bag.png"
                className=" object-cover w-[70px]"
                alt="bagImg"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex gap-2 items-center">
                  <div className="font-semibold text-xs">Bags on Timpu</div>
                  <img
                    src="header img/Vector.png"
                    className="w-4 h-4"
                    alt="vectorImg"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-gray-500">
                <div className="text-xs">1123 products </div>
                <div>
                  <img
                    src="tag img/arrow.png"
                    className="w-5 h-5"
                    alt="arrowImg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            Or set filter and help us choose the best bag for you.
          </div>
        </div>
        <div className="text-[10px] mt-2 ps-4">4:48 PM</div>
      </div>
    </div>
  );
};

export default MySwiper;
