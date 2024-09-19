'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Custom styles for the swiper
import './styles.css';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
// Other Imports
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


const Hero = () => {
  const router = useRouter()

  return (
    <div className="w-full h-96 md:h-max ">
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
          ,
        }}
        // navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
       
        className="mySwiper"
      >
        <SwiperSlide>
      <div className="relative bg-cover bg-center h-96 md:h-lvh min-h-[300px] bg-[url('/child.jpg')]">
        <div className="absolute inset-0 flex items-center justify-end p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="bg-white bg-opacity-75 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-xl">
            <h1 className=" sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Welcome to Our Organization</h1>
            <p className="text-sm sm:text-base">Where every moment is dedicated to transforming the lives of orphaned children with love and care. Join us in creating a brighter future and giving every child the opportunity to thrive.</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="relative bg-cover bg-center h-96 md:h-lvh min-h-[300px] bg-[url('/child-smile.jpg')]">
        <div className="absolute inset-0 flex items-center justify-end p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="bg-white bg-opacity-75 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-xl">
            <h1 className=" sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Our Core Values</h1>
            <ul className="text-sm sm:text-base list-disc list-inside">
              <li>Compassion</li>
              <li>Integrity</li>
              <li>Commitment</li>
              <li>Empowerment</li>
            </ul>
            <Link href='' className='text-sm sm:text-base hover:underline underline-offset-4 hover:font-bold decoration-yellow-500 decoration-2'>More About Us &rarr;</Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="relative bg-cover bg-center h-96 md:h-lvh min-h-[300px] bg-[url('/child-outside.jpg')]">
        <div className="absolute inset-0 flex items-center justify-end p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="bg-white bg-opacity-75 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-xl">
            <h1 className=" sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">JOIN US IN OUR NOBLE CAUSE</h1>
            <button onClick={() => router.push('/donate')} className='bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 px-4 py-2 rounded-md'>Donate Now</button>
          </div>
        </div>
      </div>
    </SwiperSlide>
        
      </Swiper>
    </>
    </div>
  )
}

export default Hero