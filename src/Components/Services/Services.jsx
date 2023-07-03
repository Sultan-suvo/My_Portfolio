import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { FaHome, FaCode, FaPalette, FaWeibo } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const Services = () => {
    return (
        <div className="bg-[#FDF8F7] py-16 md:py-32">
            <div className="text-center mb-8">
                <h1 className="text-4xl text-yellow-500 font-bold">Services</h1>
                <p className="text-gray-600">I Provide a Wide Range of Digital Services</p>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                className="mySwiper mx-auto"
            >
                <SwiperSlide>
                    <div className="flex flex-col items-center bg-white rounded-lg p-6 py-12 shadow-2xl transform hover:scale-105 transition duration-300">
                        <FaWeibo className="text-5xl text-blue-500 mb-4" />
                        <h1 className="text-xl font-bold mb-2">Web Developer</h1>
                        <p className="text-gray-600">
                            Web development is the process of creating websites or web applications using programming languages and technologies like HTML, CSS, and JavaScript. It involves designing and coding the frontend (client-side) and backend (server-side) components of a website to ensure its functionality and interactivity.
                        </p>
                        <button className="mt-4 btn btn-primary text-white px-4 py-2 rounded-md">
                            Learn More
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center bg-white rounded-lg p-6 py-12 shadow-2xl transform hover:scale-105 transition duration-300">
                        <FaCode className="text-5xl text-blue-500 mb-4" />
                        <h1 className="text-xl font-bold mb-2">Web Design</h1>
                        <p className="text-gray-600">
                            Web design involves creating and designing websites to make them visually appealing and user-friendly.
                        </p>
                        <button className="mt-4 btn btn-primary text-white px-4 py-2 rounded-md">
                            Learn More
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center bg-white rounded-lg p-6 py-12 shadow-2xl transform hover:scale-105 transition duration-300">
                        <FaPalette className="text-5xl text-blue-500 mb-4" />
                        <h1 className="text-xl font-bold mb-2">UX Design</h1>
                        <p className="text-gray-600">
                            UX design, short for User Experience design, is the process of creating products, such as websites or applications, that are user-centered and provide a seamless and enjoyable experience for the users. It involves understanding user needs, conducting research, and designing interfaces that are intuitive, visually appealing, and easy to navigate.
                        </p>
                        <button className="mt-4 btn btn-primary text-white px-4 py-2 rounded-md">
                            Learn More
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Services;