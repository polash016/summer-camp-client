import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Autoplay, EffectCube, Pagination } from "swiper";
import useInstuctors from "../../hooks/useInstuctors";

const Instructors = () => {
    const [instructors] = useInstuctors()
    return (
        <div className="w-[90%] mx-auto">
            <div className="grid lg:grid-cols-3">
            <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[Autoplay,EffectCube, Pagination]}
        className="mySwiper"
      >
        
      
            
        
                {/* {
                    instructors.slice(0,6).map(instructor => <SwiperSlide style={{backgroundImage: `url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`, backgroundRepeat: 'none', height: '500px'}} key={instructor._id} className=" h-full w-full rounded-none bg-[url()] bg-cover bg-center">
                        <p>instructor card</p>
                      </SwiperSlide>)
                } */}
                {
                    instructors.slice(0,6).map(instructor => <SwiperSlide style={{backgroundImage: `url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`, backgroundRepeat: 'none', height: '500px'}} key={instructor._id} className=" h-full w-full rounded-none bg-[url()] bg-cover bg-center">
                        <p>instructor card</p>
                      </SwiperSlide>)
                }
                </Swiper>
            </div>
            
        </div>
    );
};

export default Instructors;