"use client";
import React, { MutableRefObject, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TestimonialCard } from "../misc/TestimonialCard";
export const TestimonialList = () => {
    const swiperRef = useRef<SwiperRef>(null);
    return (
        <section className='lg:px-[100px] pt-[70px] pb-[180px] bg-muted'>
            <div className="grid cols-2">
                <div className="block">
                    <h2 className="text-3xl mb-[12px]">Mari Dengar Perkataan Mereka!</h2>
                    <p className="text-muted-foreground">Cerita gembira para user kami</p>
                </div>
                <div className="flex justify-end">
                <button onClick={() => swiperRef.current?.swiper.slidePrev()}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6875 23.6632L11.8125 15.7754L19.6875 7.8877" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button onClick={() => swiperRef.current?.swiper.slideNext()}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3125 24.1122L20.1875 16.2244L12.3125 8.33667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div style={{ marginTop:"40px" }}>
                <Swiper 
                      // install Swiper modules
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    ref={swiperRef}
                    className="mySwiper"
                    >
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                </Swiper>
            </div>
        </section>
        
        
    )
}