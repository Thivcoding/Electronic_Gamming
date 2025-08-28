import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import benner1 from '../../../assets/Images/benner1.webp'
import benner2 from '../../../assets/Images/benner2.webp'
import controller from '../../../assets/Images/controller.webp'
import keyboard from '../../../assets/Images/keyboard.webp'
import 'animate.css';

export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div>
      <Slider {...settings}>
        {/* slider 1 */}
        <div className="w-full h-[95vh] relative ">
          {/* image */}
          <img className="w-full h-full object-cover" src={benner1} alt="Slide 1" />
          {/* detail on benner */}
          <div className="w-full h-full flex absolute z-10 top-0 left-0">
              {/* image */}
              <div className="w-1/2 p-24 flex justify-center items-center h-full ">
                  <img className="w-full h-full animate__animated animate__backInUp" src={controller}  alt="controller" />
              </div>
              {/* detail */}
              <div className="w-1/2 flex flex-col justify-center h-full animate__animated animate__backInUp">
                    <h3 className="text-white text-3xl uppercase font-bold">wireless controller</h3>
                    <h1 className="text-white text-8xl py-2 uppercase font-bold">evolve your <br />                 
                        experience
                    </h1>
                    <button className="w-[25%] bg-white mt-4 rounded-md text-base
                     hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300
                      ease-in-out p-4">Shop Now</button>
              </div>
          </div>
        </div>
        {/* slider 2 */}
        <div className="w-full h-[95vh] relative ">
          {/* image */}
          <img className="w-full h-full object-cover" src={benner2} alt="Slide 1" />
          {/* detail on benner */}
          <div className="w-full h-full flex absolute top-0 left-0">
              {/* image */}
              <div className="w-1/2 p-24 flex justify-center items-center h-full ">
                  <img className="w-full h-full animate__animated animate__backInUp" src={keyboard}  alt="controller" />
              </div>
              {/* detail */}
              <div className="w-1/2 flex flex-col justify-center h-full animate__animated animate__backInUp">
                    <h3 className="text-white text-3xl uppercase font-bold">wireless controller</h3>
                    <h1 className="text-white text-8xl py-2 uppercase font-bold">evolve your <br />                 
                        experience
                    </h1>
                    <button className="w-[25%] bg-white mt-4 rounded-md text-base
                     hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300
                      ease-in-out p-4">Shop Now</button>
              </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
