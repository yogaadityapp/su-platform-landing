"use client";
import Link from 'next/link'
import './CategoryList.css'
import React, {useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductCard } from '../misc/ProductCard';

export const CategoryList = () => {
    const swiperRef = useRef<SwiperRef>(null);
    return (
        <section className='lg:px-[100px] mt-[70px] mb-[130px]'>
            <h2 className="text-3xl mb-[32px]">Pelatihan Produk Kami</h2>
            <div className="product w-full">
                <Swiper 
                    // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                ref={swiperRef}
                className="mySwiper"
                >
                    <SwiperSlide><ProductCard /></SwiperSlide>
                    <SwiperSlide><ProductCard /></SwiperSlide>
                    <SwiperSlide><ProductCard /></SwiperSlide>
                    <SwiperSlide><ProductCard /></SwiperSlide>
                    <SwiperSlide><ProductCard /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}